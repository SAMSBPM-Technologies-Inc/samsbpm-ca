import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SAMSBPM Technologies Inc. — how we collect, use, and protect your personal information in compliance with PIPEDA.',
}

const EFFECTIVE_DATE = 'April 24, 2026'
const COMPANY = 'SAMSBPM Technologies Inc.'
const EMAIL = 'contact@samsbpm.ca'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-bold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
        {title}
      </h2>
      <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed text-sm">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Legal
          </p>
          <h1 className="font-display text-4xl font-bold text-[var(--foreground)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm">
            Effective date: {EFFECTIVE_DATE} · Applies to: {COMPANY}
          </p>
        </div>

        {/* Intro */}
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-5 mb-10 text-sm text-[var(--muted-foreground)] leading-relaxed">
          {COMPANY} (&quot;SAMSBPM&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy
          of individuals who visit our website and use our services. This Privacy Policy describes how
          we collect, use, disclose, and safeguard your personal information in accordance with the
          <strong className="text-[var(--foreground)]"> Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and
          applicable Canadian provincial privacy legislation.
        </div>

        <Section title="1. Information We Collect">
          <p>We may collect the following categories of personal information:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li><strong className="text-[var(--foreground)]">Contact information</strong> — name, email address, phone number, and company name provided through our contact form or when requesting a demo.</li>
            <li><strong className="text-[var(--foreground)]">Usage data</strong> — pages visited, time on site, browser type, device type, and referring URL collected automatically via cookies and analytics tools.</li>
            <li><strong className="text-[var(--foreground)]">Communications</strong> — messages you send us through our contact form, email, or other channels.</li>
            <li><strong className="text-[var(--foreground)]">Business information</strong> — details about your business needs or interests in our products, provided voluntarily.</li>
          </ul>
          <p className="mt-3">We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently done so, please contact us immediately.</p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the personal information we collect for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li>To respond to inquiries and provide requested information about our products and services.</li>
            <li>To schedule and conduct product demonstrations.</li>
            <li>To send transactional communications related to your requests.</li>
            <li>To improve the content, functionality, and user experience of our website.</li>
            <li>To analyze website traffic and usage patterns using aggregated, anonymized data.</li>
            <li>To comply with legal obligations and enforce our agreements.</li>
          </ul>
          <p className="mt-3">We will not use your personal information for purposes other than those identified at the time of collection without your consent, except where required or permitted by law.</p>
        </Section>

        <Section title="3. Disclosure of Your Information">
          <p>We do not sell, rent, or trade your personal information. We may disclose your information only in the following circumstances:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li><strong className="text-[var(--foreground)]">Service providers</strong> — trusted third-party vendors (e.g., email delivery, analytics) who process data on our behalf under confidentiality obligations and are prohibited from using it for their own purposes.</li>
            <li><strong className="text-[var(--foreground)]">Legal requirements</strong> — when required by law, court order, or governmental authority.</li>
            <li><strong className="text-[var(--foreground)]">Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, where personal information may be transferred as a business asset, subject to equivalent privacy protections.</li>
            <li><strong className="text-[var(--foreground)]">With your consent</strong> — in any other circumstances, with your explicit consent.</li>
          </ul>
        </Section>

        <Section title="4. Data Residency & Storage">
          <p>
            SAMSBPM Technologies Inc. is a Canadian company. We store and process personal information on servers located in Canada. Where we engage third-party service providers located outside Canada, we take appropriate contractual measures to ensure your information receives protection equivalent to Canadian privacy standards.
          </p>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Contact form submissions are retained for a maximum of 2 years unless an ongoing business relationship requires longer retention.
          </p>
        </Section>

        <Section title="5. Cookies & Tracking Technologies">
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. Cookies are small text files stored on your device.</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li><strong className="text-[var(--foreground)]">Essential cookies</strong> — required for the website to function (e.g., theme preference). Cannot be disabled.</li>
            <li><strong className="text-[var(--foreground)]">Analytics cookies</strong> — help us understand how visitors use our site. These are anonymized and aggregated.</li>
          </ul>
          <p className="mt-3">You may disable cookies through your browser settings; however, this may affect the functionality of certain features of our website.</p>
        </Section>

        <Section title="6. Your Rights Under PIPEDA">
          <p>Under PIPEDA, you have the right to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li><strong className="text-[var(--foreground)]">Access</strong> — request access to the personal information we hold about you.</li>
            <li><strong className="text-[var(--foreground)]">Correction</strong> — request that we correct inaccurate or incomplete personal information.</li>
            <li><strong className="text-[var(--foreground)]">Withdrawal of consent</strong> — withdraw consent for the use of your personal information at any time, subject to legal or contractual restrictions.</li>
            <li><strong className="text-[var(--foreground)]">Complaint</strong> — file a complaint with the Office of the Privacy Commissioner of Canada if you believe your privacy rights have been violated.</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact our Privacy Officer at{' '}
            <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">{EMAIL}</a>.
            We will respond to all requests within 30 days.
          </p>
        </Section>

        <Section title="7. Security">
          <p>
            We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include encrypted data transmission (TLS/SSL), access controls, and regular security reviews.
          </p>
          <p>
            No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will indicate the effective date of any revision at the top of this page. We encourage you to review this policy periodically. Continued use of our website following any changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:</p>
          <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 not-prose">
            <p className="font-semibold text-[var(--foreground)] mb-1">{COMPANY}</p>
            <p>Privacy Officer</p>
            <p>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">
                {EMAIL}
              </a>
            </p>
            <p>Location: Canada</p>
          </div>
          <p className="mt-3">
            If you are not satisfied with our response, you may contact the{' '}
            <strong className="text-[var(--foreground)]">Office of the Privacy Commissioner of Canada</strong> at{' '}
            <span className="text-[var(--foreground)]">www.priv.gc.ca</span>.
          </p>
        </Section>

      </div>
    </div>
  )
}
