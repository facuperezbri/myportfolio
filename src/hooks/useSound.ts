'use client'

import { useEffect, useRef } from 'react'

export const useSound = (enabled: boolean = true) => {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    if (!enabled) return

    try {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (e) {
    }
  }, [enabled])

  const playKeySound = () => {
    if (!enabled || !audioContextRef.current) return

    try {
      const audioContext = audioContextRef.current
      if (audioContext.state === 'suspended') {
        audioContext.resume()
      }
      
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 800
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.05)
    } catch (e) {
    }
  }

  return { playKeySound }
}
