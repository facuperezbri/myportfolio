import { NextRequest } from 'next/server'
import OpenAI from 'openai'
import { systemPrompt } from '@/lib/systemPrompt'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 10

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(key)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (limit.count >= MAX_REQUESTS_PER_WINDOW) {
    return false
  }

  limit.count++
  return true
}

function isQuestionAboutFacu(message: string): boolean {
  const lowerMessage = message.toLowerCase()
  
  const facuKeywords = ['facu', 'you', 'tu', 'tus', 'tú', 'your', 'portfolio', 'proyectos', 'projects', 'skills', 'habilidades', 'experience', 'experiencia', 'trabajo', 'work', 'tecnologías', 'technologies']
  const unrelatedKeywords = ['weather', 'clima', 'news', 'noticias', 'politics', 'política', 'sports', 'deportes', 'movie', 'película', 'recipe', 'receta', 'how to', 'cómo hacer']
  
  const hasFacuKeyword = facuKeywords.some(keyword => lowerMessage.includes(keyword))
  const hasUnrelatedKeyword = unrelatedKeywords.some(keyword => lowerMessage.includes(keyword))
  
  if (hasUnrelatedKeyword && !hasFacuKeyword) {
    return false
  }
  
  return true
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const rateLimitKey = getRateLimitKey(req)
    if (!checkRateLimit(rateLimitKey)) {
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        { 
          status: 429, 
          headers: { 
            'Content-Type': 'application/json',
            'Retry-After': '60'
          } 
        }
      )
    }

    const { message } = await req.json()

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (message.length > 500) {
      return new Response(
        JSON.stringify({ error: 'Message is too long. Maximum 500 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    if (!isQuestionAboutFacu(message)) {
      return new Response(
        "I can only answer questions about Facu Pérez Brizuela's professional background and portfolio. Would you like to know about his projects, skills, or experience?",
        { headers: { 'Content-Type': 'text/plain' } }
      )
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 250,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content || 'No response generated.'

    return new Response(response, {
      headers: { 'Content-Type': 'text/plain' },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
