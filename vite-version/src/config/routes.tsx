import { lazy } from 'react'

// Lazy load components for better performance
const Landing = lazy(() => import('@/app/landing/page'))
const Privacy = lazy(() => import('@/app/privacy/page'))
const Terms = lazy(() => import('@/app/terms/page'))
const Screencast = lazy(() => import('@/app/screencast/page'))

// Error pages
const NotFound = lazy(() => import('@/app/errors/not-found/page'))

export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - Landing page
  {
    path: "/",
    element: <Landing />
  },

  // Landing Page (alias)
  {
    path: "/landing",
    element: <Landing />
  },

  // Privacy Policy
  {
    path: "/privacy",
    element: <Privacy />
  },

  // Terms of Service
  {
    path: "/terms",
    element: <Terms />
  },

  // Screencast / Demo
  {
    path: "/screencast",
    element: <Screencast />
  },

  // Catch-all route for 404
  {
    path: "*",
    element: <NotFound />
  }
]
