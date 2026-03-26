"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Shopify Store Owner',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-1',
    quote:
      'Before IndexBeam, our new products took weeks to show up in Google. Now they appear within hours. It has been a game-changer for our seasonal launches.',
  },
  {
    name: 'James Rodriguez',
    role: 'E-commerce Manager',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-1',
    quote: 'The auto-indexing feature is incredible. Every time we update a product, IndexBeam handles everything automatically. Zero manual work.',
  },
  {
    name: 'Emily Chen',
    role: 'DTC Brand Founder',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-2',
    quote:
      'The AI visibility monitoring opened our eyes. We had no idea how often AI chatbots were recommending our competitors instead of us. Now we can track and improve that.',
  },
  {
    name: 'David Park',
    role: 'Shopify Plus Merchant',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-2',
    quote:
      'With over 5,000 products in our catalog, bulk submission is a lifesaver. We reindexed our entire site in under an hour.',
  },
  {
    name: 'Maria Santos',
    role: 'Marketing Director',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-3',
    quote:
      'IndexBeam pays for itself. Faster indexing means our new collections start generating organic traffic from day one instead of waiting weeks. The ROI is clear and the dashboard makes it easy to see results at a glance.',
  },
  {
    name: 'Michael Foster',
    role: 'Store Owner - Fashion',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-3',
    quote: 'Simple to set up, works like magic. Installed it, connected my store, and forgot about indexing problems forever.',
  },
  {
    name: 'Lisa Chang',
    role: 'SEO Consultant',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-4',
    quote:
      'I recommend IndexBeam to all my Shopify clients. The IndexNow integration is properly implemented and the Bing Webmaster connection gives real visibility into index status. It fills a gap that no other Shopify app addresses this well.',
  },
  {
    name: 'Thomas Anderson',
    role: 'Shopify Developer',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-4',
    quote: 'Clean implementation of the IndexNow protocol. The webhook integration is solid and the dashboard gives clear, actionable data.',
  },
  {
    name: 'Sophie Laurent',
    role: 'E-commerce Entrepreneur',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-5',
    quote:
      'The free tier was perfect to test the waters. After seeing my indexing times drop dramatically, upgrading to Starter was a no-brainer.',
  },
  {
    name: 'Robert Kim',
    role: 'Digital Marketing Lead',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-5',
    quote: 'The AI traffic analytics feature is ahead of its time. Understanding how AI referrals impact our traffic is invaluable.',
  },
  {
    name: 'Natasha Petrov',
    role: 'Shopify Store Manager',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=female-6',
    quote:
      'We run flash sales every week and timing is everything. IndexBeam ensures our sale pages are indexed before we even start promoting them on social media.',
  },
  {
    name: 'Carlos Rivera',
    role: 'Dropshipping Entrepreneur',
    image: 'https://notion-avatars.netlify.app/api/avatar?preset=male-6',
    quote: 'As someone who adds 50+ products weekly, IndexBeam keeps everything indexed without me lifting a finger.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Shopify Merchants Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See how IndexBeam helps store owners get their products indexed faster and boost their search visibility.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
