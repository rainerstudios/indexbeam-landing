"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'What is IndexNow?',
    answer:
      'IndexNow is an open protocol that allows website owners to instantly notify search engines like Bing, Yandex, and others about new or updated content. Instead of waiting for search engine crawlers to discover your changes, IndexNow pushes the information directly, resulting in much faster indexing.',
  },
  {
    value: 'item-2',
    question: 'How fast will my pages get indexed?',
    answer:
      'With IndexNow, your pages are typically indexed within minutes to hours, compared to the days or even weeks it can take with traditional crawling. The exact timing depends on the search engine, but most merchants see their new product pages appearing in search results significantly faster.',
  },
  {
    value: 'item-3',
    question: 'Which search engines does IndexNow support?',
    answer:
      'IndexNow currently works with Bing, Yandex, Naver, Seznam, and other participating search engines. Google does not yet support IndexNow, but faster Bing indexing often helps Google discover your pages sooner too since search engines share crawl signals.',
  },
  {
    value: 'item-4',
    question: 'What is AI Visibility monitoring?',
    answer:
      'AI Visibility monitoring checks whether AI chatbots like ChatGPT, Perplexity, and other AI-powered search tools mention your brand or products when users ask related questions. This helps you understand how visible your brand is in the growing AI search landscape.',
  },
  {
    value: 'item-5',
    question: 'Do I need technical knowledge to use IndexBeam?',
    answer:
      'Not at all! Simply install the app from the Shopify App Store and it works automatically. IndexBeam sets up webhooks to detect when you create or update products, and submits URLs to search engines on your behalf. No coding or technical configuration required.',
  },
  {
    value: 'item-6',
    question: 'Can I cancel anytime?',
    answer:
      'Yes, absolutely. All plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time directly through the Shopify App Store. If you cancel, you will retain access until the end of your current billing period.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about IndexBeam, IndexNow, and getting your Shopify store indexed faster.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
