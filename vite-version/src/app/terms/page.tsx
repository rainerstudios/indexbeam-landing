import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 26, 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By installing, accessing, or using IndexBeam ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms apply to all users of the Service, including Shopify store owners and their authorized representatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              IndexBeam is a Shopify application that provides URL indexing submission via the IndexNow protocol, AI visibility monitoring, search engine index status checking, and related SEO tools. The Service integrates with third-party platforms including Google, Bing, and various AI search engines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account and Billing</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IndexBeam is installed and billed through the Shopify App Store. All billing, subscription management, and payment processing is handled by Shopify.</li>
              <li>You are responsible for maintaining the security of your Shopify account.</li>
              <li>Subscription plans and pricing are as listed on the Shopify App Store listing and may be updated from time to time.</li>
              <li>All plans are billed monthly. You may cancel your subscription at any time through the Shopify admin.</li>
              <li>Refunds are handled in accordance with Shopify's app billing policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the Service to submit spam URLs or URLs that violate search engine guidelines</li>
              <li>Attempt to circumvent plan limits or rate limits</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Resell or redistribute the Service without authorization</li>
              <li>Submit URLs that contain malware, phishing content, or other harmful material</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Integrations</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service integrates with third-party services including Google Search Console, Google Analytics, Bing Webmaster Tools, and various AI platforms. Your use of these integrations is subject to the respective third-party terms of service. We are not responsible for the availability, accuracy, or actions of third-party services. Search engine indexing results depend on third-party search engine policies and are not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to maintain high availability of the Service but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. We will make reasonable efforts to notify users of planned downtime in advance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service, including its design, code, features, and documentation, is owned by IndexBeam and protected by intellectual property laws. You retain ownership of your store data and content. By using the Service, you grant us a limited license to access and process your data as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free, secure, or uninterrupted. We do not guarantee specific indexing results, search engine rankings, or AI visibility outcomes. Results may vary based on search engine policies, content quality, and other factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, IndexBeam shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of or inability to use the Service. Our total liability shall not exceed the amount you paid for the Service in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate your access to the Service at any time if you violate these Terms or for any other reason at our discretion. You may terminate your use of the Service at any time by uninstalling the app from your Shopify store. Upon termination, your right to use the Service ceases immediately, and we may delete your data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the "Last updated" date and, where appropriate, providing notice through the app. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or the Service shall be resolved through good-faith negotiation before pursuing formal legal proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
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
