import * as React from "react"

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function Logo({ size = 24, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="4" width="28" height="24" rx="4" fill="#22c55e" fillOpacity="0.15"/>
      <path d="M10 20V12L16 8L22 12V20L16 24L10 20Z" fill="#22c55e" fillOpacity="0.3"/>
      <path d="M16 8V24" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 12L16 8L22 12" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20L16 24L22 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="2" fill="#22c55e"/>
    </svg>
  )
}
