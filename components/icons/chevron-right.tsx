interface ChevronRightProps {
  className?: string
}

export function ChevronRight({ className = "size-4" }: ChevronRightProps) {
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
      <polyline points="9,18 15,12 9,6"></polyline>
    </svg>
  )
}
