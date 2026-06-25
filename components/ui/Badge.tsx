import { cn } from '@/lib/utils'

interface BadgeProps {
  children:  React.ReactNode
  variant?:  'gold' | 'lapis' | 'ivory' | 'green' | 'red'
  size?:     'sm' | 'md'
  className?: string
}

const variants = {
  gold:  'bg-gold/15 text-gold-dark border border-gold/30',
  lapis: 'bg-lapis-800/10 text-lapis-800 border border-lapis-800/20',
  ivory: 'bg-ivory-200 text-charcoal border border-ivory-300',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  red:   'bg-red-50 text-red-700 border border-red-200',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
}

export default function Badge({
  children, variant = 'gold', size = 'md', className
}: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center font-body font-semibold rounded-full uppercase tracking-wider',
      variants[variant], sizes[size], className
    )}>
      {children}
    </span>
  )
}
