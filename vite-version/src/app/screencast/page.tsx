import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/logo'

export default function ScreencastPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Logo size={32} />
            <span className="font-bold">
              <span className="text-[#4ade80]">Index</span>Beam
            </span>
          </a>
          <Button variant="outline" asChild className="cursor-pointer">
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              See IndexBeam in Action
            </h1>
            <p className="text-lg text-muted-foreground">
              Watch how IndexBeam helps Shopify merchants get their products indexed faster and monitor AI search visibility.
            </p>
          </div>

          {/* Video Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border bg-muted">
            {/* Replace the src below with your actual video URL */}
            {/* For YouTube: https://www.youtube.com/embed/VIDEO_ID */}
            {/* For Loom: https://www.loom.com/embed/VIDEO_ID */}
            <iframe
              src=""
              title="IndexBeam Demo"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Placeholder shown when no video URL is set */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
              <svg className="w-16 h-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <p className="text-lg font-medium">Demo video coming soon</p>
            </div>
          </div>

          {/* CTA below video */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to get your products indexed instantly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="cursor-pointer">
                <a href="https://apps.shopify.com/indexbeam" target="_blank" rel="noopener noreferrer">
                  Install Free on Shopify
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="cursor-pointer">
                <a href="/#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
