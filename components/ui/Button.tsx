import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?:     'sm' | 'md' | 'lg' | 'xl'
  children:  ReactNode
  isLoading?: boolean
  fullWidth?: boolean
}

const variants = {
  primary:   'bg-lapis-800 text-white hover:bg-lapis-700 focus-visible:ring-lapis-800',
  secondary: 'bg-ivory-100 text-lapis-800 hover:bg-ivory-200 focus-visible:ring-ivory-200',
  outline:   'border-2 border-lapis-800 text-lapis-800 hover:bg-lapis-800 hover:text-white focus-visible:ring-lapis-800',
  ghost:     'text-lapis-800 hover:bg-lapis-50 focus-visible:ring-lapis-800',
  gold:      'bg-gold text-white hover:bg-gold-dark shadow-gold focus-visible:ring-gold',
}

const sizes = {
  sm:  'px-4 py-2 text-sm gap-1.5',
  md:  'px-5 py-2.5 text-sm gap-2',
  lg:  'px-7 py-3.5 text-base gap-2',
  xl:  'px-9 py-4 text-lg gap-2.5',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  children,
  isLoading,
  fullWidth,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        // Base
        'inline-flex items-center justify-center font-body font-medium',
        'rounded-full transition-all duration-300 ease-luxury',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'select-none tracking-wide',
        // Variant & Size
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : children}
    </button>
  )
}
