import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse md:bg-dark-astral-40 bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
