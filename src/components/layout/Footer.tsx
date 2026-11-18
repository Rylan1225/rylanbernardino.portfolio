import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-10 text-center font-mono text-xs text-muted sm:px-10">
      {new Date().getFullYear()} · {profile.name}
    </footer>
  )
}
