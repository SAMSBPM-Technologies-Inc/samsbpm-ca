import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for SAMSBPM Technologies Inc.',
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <div className="mb-10">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">Legal</p>
          <h1 className="font-display text-4xl font-bold text-[var(--foreground)] mb-3">
            Terms of Service
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm">
            Effective date: {EFFECTIVE_DATE} · Applies to: {COMPANY}
          </p>
        </div>

        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-5 mb-10 text-sm text-[var(--muted-foreground)] leading-relaxed">
          By accessing or using any product or service offered by{' '}
          <strong className="text-[var(--foreground)]">{COMPANY}</strong>, a corporation incorporated
          under the laws of Ontario, Canada, you agree to be bound by these Terms of Service. If you
          do not agree, do not use our services.
        </div>

        <Section title="1. Services">
          <p>
            SAMSBPM provides software products including AutoOrderSync, Vedoryx-API, Vedoryx-Dashboard,
            eCommerce Frontend, Website Builder, Rental Management System, and Portfolio Hosting
            (collectively, &quot;Services&quot;). Services are provided on a subscription or usage basis
            as described in your applicable order or plan.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            You must be at least 18 years of age and have the legal authority to enter into binding
            contracts under the laws of Canada or your jurisdiction. By using our Services, you
            represent and warrant that you meet these requirements.
          </p>
        </Section>

        <Section title="3. Account Responsibilities">
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>
              You must notify us immediately of any unauthorized access at{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">{EMAIL}</a>.
            </li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>
        </Section>

        <Section title="4. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li>Use the Services for any unlawful purpose or in violation of applicable Canadian or international law.</li>
            <li>Transmit spam, malware, or any content that infringes third-party rights.</li>
            <li>Reverse-engineer, decompile, or otherwise attempt to derive source code from our software.</li>
            <li>Resell or sublicense the Services without our written consent.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All intellectual property rights in the Services, including software, trademarks, and
            documentation, are owned by SAMSBPM or its licensors. These Terms do not grant you any
            ownership rights — only a limited, non-exclusive, non-transferable licence to use the
            Services as permitted herein.
          </p>
        </Section>

        <Section title="6. Payment & Billing">
          <p>
            Fees are as stated in your plan or order form. All amounts are in Canadian dollars (CAD)
            unless otherwise specified. Applicable taxes (HST/GST) will be added where required by law.
            Subscriptions auto-renew unless cancelled at least 48 hours before the renewal date.
          </p>
        </Section>

        <Section title="7. Privacy">
          <p>
            Our{' '}
            <Link href="/privacy" className="text-brand-500 hover:text-brand-600 transition-colors">
              Privacy Policy
            </Link>{' '}
            governs the collection and use of personal information in connection with the Services
            and is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by Ontario and Canadian law, SAMSBPM&apos;s total liability
            for any claim arising from or related to the Services shall not exceed the greater of
            (a) the fees paid by you in the twelve (12) months preceding the claim, or (b) CAD $100.
            SAMSBPM is not liable for indirect, incidental, special, or consequential damages.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>
            The Services are provided &quot;as is&quot; without warranty of any kind. SAMSBPM disclaims all
            warranties, express or implied, including merchantability and fitness for a particular
            purpose, to the extent permitted by law.
          </p>
        </Section>

        <Section title="10. Indemnification">
          <p>
            You agree to indemnify and hold harmless SAMSBPM, its officers, directors, employees,
            and contractors from any claim, damage, or expense (including legal fees) arising from
            your use of the Services or breach of these Terms.
          </p>
        </Section>

        <Section title="11. Termination">
          <p>
            Either party may terminate the agreement on written notice. SAMSBPM may suspend or
            terminate your access immediately for material breach of these Terms. Upon termination,
            your right to use the Services ceases immediately, and we will provide a data export
            for 30 days.
          </p>
        </Section>

        <Section title="12. Governing Law & Dispute Resolution">
          <p>
            These Terms are governed by the laws of the Province of Ontario and the federal laws
            of Canada applicable therein. Any dispute shall be resolved by binding arbitration
            under the <em>Arbitration Act, 1991 (Ontario)</em>, or by the courts of Ontario if
            arbitration is not applicable.
          </p>
        </Section>

        <Section title="13. Changes to These Terms">
          <p>
            We may update these Terms from time to time. We will provide at least 14 days&apos; notice
            of material changes via email or in-app notification. Continued use of the Services
            after the effective date constitutes acceptance.
          </p>
        </Section>

        <Section title="14. Contact">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <p className="font-semibold text-[var(--foreground)] mb-1">{COMPANY}</p>
            <p>Whitby, Ontario, Canada</p>
            <p>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">
                {EMAIL}
              </a>
            </p>
          </div>
          <p className="mt-3 text-xs">Effective date: {EFFECTIVE_DATE} · Last updated: {EFFECTIVE_DATE}</p>
        </Section>

      </div>
    </div>
  )
}
