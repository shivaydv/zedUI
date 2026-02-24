'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import * as Slot from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

/**
 * Button Variants:
 * 1. premium: Default moody dark button with subtle radial highlight.
 * 2. outline: Minimal glassmorphism border button.
 * 3. shine: Refined light sweep animation.
 * 4. ghost: Ultra-minimal interaction-focused button.
 */

type VariantType = 'premium' | 'outline' | 'shine' | 'ghost'

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: VariantType
  isMagnetic?: boolean
  isLoading?: boolean
  asChild?: boolean
}

export function Button({
  className,
  variant = 'premium',
  isMagnetic = false,
  isLoading = false,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Slot : 'button'

  const content = (
    <Comp
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-2.5 text-sm font-medium transition-all focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <AnimatePresence mode="popLayout">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center mr-2"
          >
            <LoaderIcon className="h-4 w-4 animate-spin" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>

      {/* Variant Specific Backgrounds/Effects */}
      {renderVariantDecoration(variant)}
    </Comp>
  )

  if (isMagnetic) {
    return <MagneticWrapper>{content}</MagneticWrapper>
  }

  return content
}

const variantStyles: Record<VariantType, string> = {
  premium: 'bg-neutral-900 text-neutral-100 shadow-[0_1px_1px_rgba(255,255,255,0.1)_inset,0_8px_16px_-4px_rgba(0,0,0,0.5)] active:shadow-none',
  outline: 'border border-neutral-200 bg-white/5 text-neutral-900 backdrop-blur-sm hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900',
  shine: 'bg-neutral-900 text-neutral-100 overflow-hidden',
  ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-900',
}

function renderVariantDecoration(variant: VariantType) {
  switch (variant) {
    case 'premium':
      return (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      )
    case 'shine':
      return (
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        </div>
      )
    default:
      return null
  }
}

function MagneticWrapper({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.35
    const y = (clientY - (top + height / 2)) * 0.35
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  )
}

function LoaderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )
}
