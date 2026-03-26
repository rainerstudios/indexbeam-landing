import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2 cursor-pointer">
            <Logo size={32} />
            <span className="font-bold">IndexBeam</span>
          </a>
          <Button variant="ghost" asChild className="cursor-pointer">
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 26, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              IndexBeam ("we", "our", or "us") operates the IndexBeam application available on the Shopify App Store and the website indexbeam.app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">When you install and use IndexBeam, we may collect the following information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Store Information:</strong> Your Shopify store name, domain, and store owner contact details as provided by the Shopify API.</li>
              <li><strong className="text-foreground">Product URLs:</strong> URLs of products and pages in your Shopify store that are submitted for indexing.</li>
              <li><strong className="text-foreground">Index Status Data:</strong> Results from index status checks including whether URLs are indexed by search engines.</li>
              <li><strong className="text-foreground">Google Analytics Data:</strong> If you connect Google Analytics, we access read-only traffic data related to AI referral sources. We do not modify your GA4 configuration.</li>
              <li><strong className="text-foreground">Bing Webmaster Data:</strong> If you connect Bing Webmaster Tools, we access URL index status information.</li>
              <li><strong className="text-foreground">AI Visibility Data:</strong> Results from checking whether AI chatbots mention your brand or products.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our app, including features used and submission history.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To submit your URLs to search engines via the IndexNow protocol</li>
              <li>To check the index status of your URLs through Bing Webmaster Tools</li>
              <li>To monitor AI chatbot mentions of your brand</li>
              <li>To display analytics and reports in your dashboard</li>
              <li>To send you email notifications and weekly digest reports (if enabled)</li>
              <li>To improve our services and develop new features</li>
              <li>To provide customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We integrate with the following third-party services to provide our functionality:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Google (Search Console, Analytics):</strong> For index status checking and AI traffic monitoring. Subject to Google's Privacy Policy.</li>
              <li><strong className="text-foreground">Microsoft Bing (Webmaster Tools, IndexNow):</strong> For URL submission and index status verification. Subject to Microsoft's Privacy Policy.</li>
              <li><strong className="text-foreground">Yandex:</strong> For IndexNow URL submission. Subject to Yandex's Privacy Policy.</li>
              <li><strong className="text-foreground">Mailgun:</strong> For sending email notifications and digest reports. Subject to Mailgun's Privacy Policy.</li>
              <li><strong className="text-foreground">Shopify:</strong> For store data access and billing. Subject to Shopify's Privacy Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your data for as long as your IndexBeam account is active or as needed to provide our services. URL submission history and index status data is retained for up to 12 months. If you uninstall the app, we will delete your data within 30 days, except where we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data, including encryption of sensitive credentials at rest, secure HTTPS connections, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Disconnect third-party integrations at any time through the app settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our landing page website may use essential cookies for functionality. The Shopify app itself operates within the Shopify admin and uses Shopify's session management. We do not use tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              <strong className="text-foreground">Email:</strong> support@indexbeam.app<br />
              <strong className="text-foreground">Website:</strong> https://indexbeam.app
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
