import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '@/data/portfolio'
import { useSectionContext } from '@/context/SectionContext'

interface NavbarProps {
  onNavigate: (id: string) => void
}

export function Navbar({ onNavigate }: NavbarProps) {
  const { activeId } = useSectionContext()
  const headerRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  // Keep --nav-h in sync so anchor jumps land just below the sticky bar.
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const sync = () =>
      document.documentElement.style.setProperty('--nav-h', `${header.offsetHeight}px`)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleClick = (e: MouseEvent, id: string) => {
    e.preventDefault()
    setOpen(false)
    onNavigate(id)
  }

  const linkBase = 'font-mono no-underline transition-colors duration-150 hover:text-accent-ink'

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-20 border-b border-line bg-canvas/85 backdrop-blur-[8px]"
    >
      <div className="flex items-center justify-between px-6 py-[1.1rem] sm:px-10">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, 'hero')}
          className="whitespace-nowrap font-mono text-[0.95rem] font-semibold text-ink no-underline"
        >
          {profile.navName}
        </a>

        <nav aria-label="Primary" className="hidden min-[680px]:block">
          <ul className="m-0 flex list-none gap-6 p-0">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  aria-current={activeId === id ? 'true' : undefined}
                  className={`${linkBase} text-[0.8rem] ${activeId === id ? 'text-accent-ink' : 'text-muted'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex size-11 items-center justify-center text-ink min-[680px]:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-line px-6 pb-3 pt-1 min-[680px]:hidden sm:px-10"
          >
            <ul className="m-0 list-none p-0">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    aria-current={activeId === id ? 'true' : undefined}
                    className={`${linkBase} flex min-h-11 items-center text-sm ${activeId === id ? 'text-accent-ink' : 'text-muted'}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
