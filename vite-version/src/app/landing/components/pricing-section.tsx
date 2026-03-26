"use client"

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Free',
    description: 'Get started with basic indexing for small stores',
    price: 0,
    features: [
      '50 URLs/month',
      'IndexNow submission',
      'Basic dashboard',
      'Manual URL submission',
    ],
    cta: 'Install Free',
    popular: false,
  },
  {
    name: 'Starter',
    description: 'For growing stores that need automated indexing and AI insights',
    price: 19,
    features: [
      '500 URLs/month',
      'AI visibility monitoring',
      'Auto-indexing on publish',
      'Weekly email digest',
      'Index status tracking',
    ],
    cta: 'Get Started',
    popular: true,
    includesPrevious: 'All Free features, plus',
  },
  {
    name: 'Growth',
    description: 'Advanced analytics and integrations for scaling brands',
    price: 49,
    features: [
      '2,000 URLs/month',
      'Priority support',
      'Advanced analytics',
      'Bing Webmaster integration',
      'AI traffic analytics',
      'Bulk URL submission',
    ],
    cta: 'Get Started',
    popular: false,
    includesPrevious: 'All Starter features, plus',
  },
  {
    name: 'Enterprise',
    description: 'Unlimited indexing with dedicated support for large catalogs',
    price: 99,
    features: [
      'Unlimited URLs',
      'Dedicated support',
      'Custom integrations',
      'API access',
      'Priority indexing queue',
      'Custom reporting',
    ],
    cta: 'Get Started',
    popular: false,
    includesPrevious: 'All Growth features, plus',
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">Pricing Plans</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free and scale as your store grows. All plans include IndexNow protocol support and are billed through the Shopify App Store.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border">
            <div className="grid lg:grid-cols-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${
                    plan.popular
                      ? 'my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur'
                      : ''
                  }`}
                >
                  {/* Plan Header */}
                  <div>
                    <div className="text-lg font-medium tracking-tight mb-2">{plan.name}</div>
                    <div className="text-muted-foreground text-balance text-sm">{plan.description}</div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="text-4xl font-bold mb-1">
                      {plan.price === 0 ? '$0' : `$${plan.price}`}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {plan.price === 0 ? 'Free forever' : 'Per month'}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      className={`w-full cursor-pointer my-2 ${
                        plan.popular
                          ? 'shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90'
                          : 'shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50'
                      }`}
                      variant={plan.popular ? 'default' : 'secondary'}
                      asChild
                    >
                      <a href="https://apps.shopify.com/indexbeam">
                        {plan.cta}
                      </a>
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.includesPrevious && (
                        <li className="flex items-center gap-3 font-medium">
                          {plan.includesPrevious}:
                        </li>
                      )}
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan or have questions? {' '}
            <Button variant="link" className="p-0 h-auto cursor-pointer" asChild>
              <a href="#contact">
                Contact us
              </a>
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
