interface ChevronLeftProps {
  className?: string
}

export function ChevronLeft({ className = "size-4" }: ChevronLeftProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15,18 9,12 15,6"></polyline>
    </svg>
  )
}
