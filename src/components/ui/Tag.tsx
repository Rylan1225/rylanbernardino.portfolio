export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded bg-accent-soft px-2 py-1 font-mono text-[0.7rem] text-accent-ink">
      {children}
    </span>
  )
}
