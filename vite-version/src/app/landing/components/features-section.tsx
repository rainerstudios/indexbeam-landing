"use client"

import {
  Zap,
  RefreshCw,
  Eye,
  BarChart3,
  Globe,
  Upload,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Zap,
    title: 'Instant IndexNow Submission',
    description: 'Submit URLs to Google & Bing with one click using the IndexNow protocol. Get your pages discovered in minutes, not weeks.'
  },
  {
    icon: RefreshCw,
    title: 'Auto-Index on Publish',
    description: 'Webhooks automatically submit new and updated product URLs to search engines as soon as you publish changes.'
  },
  {
    icon: Eye,
    title: 'AI Visibility Monitoring',
    description: 'Track if AI chatbots like ChatGPT and Perplexity mention your brand when users ask related questions.'
  },
  {
    icon: BarChart3,
    title: 'AI Traffic Analytics',
    description: 'Monitor visitors coming from AI search sources via Google Analytics integration. Understand your AI-driven traffic.'
  },
  {
    icon: Globe,
    title: 'Bing Webmaster Integration',
    description: 'Check real-time index status of your submitted URLs directly through the Bing Webmaster Tools API.'
  },
  {
    icon: Upload,
    title: 'Bulk URL Submission',
    description: 'Submit up to 100 URLs at once for rapid indexing. Perfect for large catalog updates or new collection launches.'
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to get indexed and stay visible
          </h2>
          <p className="text-lg text-muted-foreground">
            From instant URL submission to AI visibility monitoring, IndexBeam gives Shopify merchants the tools to be found faster across search engines and AI platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
