import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

// Preserved from the original portfolio. Lucide has dropped brand icons.
export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 17l6-10" />
  </svg>
)

export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 8v8M8 8h.01M12 16v-4a2 2 0 0 1 4 0v4" />
  </svg>
)
