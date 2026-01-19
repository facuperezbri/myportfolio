'use client'

import { devAscii } from '@/lib/asciiArt'
import { contactInfo } from '@/constants/portfolio'

interface WelcomeHeaderProps {
  theme: {
    text?: string
    accent?: string
    muted?: string
  }
}

export const WelcomeHeader = ({ theme }: WelcomeHeaderProps) => {
  const accentColor = theme.accent || '#FF8C42'
  const textColor = theme.text || '#E5E7EB'
  const mutedColor = theme.muted || '#4B5563'

  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <div className="mb-2">
            <span style={{ color: accentColor }} className="font-mono text-sm">
              Facu's Terminal v1.0
            </span>
          </div>
          <div className="mb-3">
            <span style={{ color: textColor }} className="font-mono text-sm">
              Welcome back!
            </span>
          </div>
          <div className="mb-3 font-mono text-xs" style={{ color: accentColor }}>
            <pre className="whitespace-pre">{devAscii}</pre>
          </div>
          <div className="font-mono text-sm" style={{ color: textColor }}>
            <div>Fullstack Developer & UX/UI Designer</div>
            <div className="mt-1" style={{ color: mutedColor }}>
              Mendoza, Argentina
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <span style={{ color: accentColor }} className="font-mono text-sm">
              Quick Links
            </span>
          </div>
          <div className="font-mono text-xs space-y-1" style={{ color: mutedColor }}>
            <div>
              GitHub:{' '}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: textColor }}
              >
                {contactInfo.github.replace('https://', '')}
              </a>
            </div>
            <div>
              LinkedIn:{' '}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: textColor }}
              >
                {contactInfo.linkedin.replace('https://www.', '').replace('https://', '')}
              </a>
            </div>
            <div>
              Email:{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:underline"
                style={{ color: textColor }}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="border-t pt-4"
        style={{ borderColor: mutedColor + '40' }}
      />
    </div>
  )
}
