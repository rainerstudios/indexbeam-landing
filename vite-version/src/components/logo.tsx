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
      {/* Green beam/index icon matching the IndexBeam brand */}
      <rect x="4" y="4" width="12" height="12" rx="2" fill="#4ade80" />
      <rect x="4" y="4" width="8" height="8" rx="1" fill="#22c55e" />
      <path d="M20 4H28V12L20 4Z" fill="#4ade80" fillOpacity="0.6" />
      <rect x="4" y="20" width="24" height="4" rx="1" fill="#22c55e" />
      <rect x="4" y="27" width="16" height="3" rx="1" fill="#4ade80" fillOpacity="0.5" />
    </svg>
  )
}
