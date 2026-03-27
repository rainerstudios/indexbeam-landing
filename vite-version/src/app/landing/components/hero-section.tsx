"use client"

import { ArrowRight, Star, Zap, Eye, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DotPattern } from '@/components/dot-pattern'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" size="md" fadeStyle="ellipse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="outline" className="px-4 py-2 border-foreground">
              <Star className="w-3 h-3 mr-2 fill-current" />
              New: Instant Search Engine Indexing for Shopify
              <ArrowRight className="w-3 h-3 ml-2" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Get Your Shopify Products
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Indexed in Minutes,{" "}
            </span>
            Not Weeks
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            IndexBeam uses the IndexNow protocol to instantly notify Bing, Yandex, and other search engines when you publish or update products. Plus, monitor your AI search visibility across ChatGPT, Perplexity, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base cursor-pointer" asChild>
              <a href="https://apps.shopify.com/indexbeam">
                Install on Shopify
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base cursor-pointer" asChild>
              <a href="#features">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Stats below hero */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">10,000+</span>
              <span>URLs Indexed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Timer className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">50%</span>
              <span>Faster Indexing</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">AI</span>
              <span>Visibility Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
