import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — WhatsApp Commerce Worker',
  description: 'Privacy Policy for the WhatsApp Commerce Worker platform operated by SAMSBPM Technologies Inc.',
}

const LAST_UPDATED = 'April 25, 2025'
const COMPANY = 'SAMSBPM Technologies Inc.'
const EMAIL = 'samudralasudheer@samsbpm.ca'

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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            {headers.map((h) => (
              <th key={h} className="text-left py-2 px-3 font-semibold text-[var(--foreground)] bg-[var(--card)] first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border)] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3 align-top" dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function WhatsAppPrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/privacy"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-brand-500 transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Back to Privacy Policy
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Legal · Product Policy
          </p>
          <h1 className="font-display text-4xl font-bold text-[var(--foreground)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[var(--muted-foreground)] text-base font-medium mb-1">
            WhatsApp Commerce Worker
          </p>
          <p className="text-[var(--muted-foreground)] text-sm">
            Last updated: {LAST_UPDATED} · Operated by: {COMPANY}
          </p>
        </div>

        {/* Section 1 */}
        <Section title="1. Who We Are">
          <p>
            WhatsApp Commerce Worker is a multi-tenant SaaS platform that enables retail businesses
            (&ldquo;Merchants&rdquo;) to sell products and manage orders through WhatsApp Business
            messaging. The platform is operated by{' '}
            <strong className="text-[var(--foreground)]">{COMPANY}</strong>{' '}
            (&ldquo;Platform Operator&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="2. Roles and Responsibilities">
          <p>This policy covers the Platform Operator&rsquo;s data practices. Each Merchant is responsible for maintaining their own privacy policy governing their end-user relationships.</p>
          <Table
            headers={['Role', 'Description']}
            rows={[
              ['<strong class="text-[var(--foreground)]">Platform Operator</strong>', 'Operates the Cloudflare Worker infrastructure; provides the commerce bot software'],
              ['<strong class="text-[var(--foreground)]">Merchant (Tenant)</strong>', 'Each business registered on the platform; acts as an independent data controller for their customers'],
              ['<strong class="text-[var(--foreground)]">End User</strong>', 'The WhatsApp user who messages a Merchant\'s business number'],
            ]}
          />
        </Section>

        {/* Section 3 */}
        <Section title="3. Data Collected">
          <p className="font-semibold text-[var(--foreground)]">3a. Data Collected from End Users (WhatsApp Customers)</p>
          <p>The following data is collected from End Users who message a Merchant&rsquo;s WhatsApp Business number:</p>
          <Table
            headers={['Data', 'When Collected', 'Purpose']}
            rows={[
              ['WhatsApp phone number', 'On every message', 'Session identification; customer lookup in Merchant\'s backend'],
              ['Full name', 'During checkout (optional for returning customers)', 'Order fulfillment'],
              ['Email address', 'During checkout (explicitly optional — user may skip)', 'Order confirmation'],
              ['Cart contents', 'During shopping session', 'Order processing'],
              ['Selected pickup location', 'During checkout', 'Order fulfillment'],
              ['Conversation state', 'Throughout session', 'Routing user through commerce flow'],
              ['Message history', 'Only when AI mode is enabled (last 20 turns)', 'Natural language understanding via GPT-4o-mini'],
            ]}
          />
          <p className="font-semibold text-[var(--foreground)] mt-4">3b. Data NOT Collected</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li>Message media (images, audio, video, documents) — only text and interactive reply IDs are processed</li>
            <li>Payment card or financial data</li>
            <li>Device identifiers beyond phone number</li>
            <li>Location data</li>
            <li>Contact lists</li>
          </ul>
        </Section>

        {/* Section 4 */}
        <Section title="4. How Data Is Used">
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong className="text-[var(--foreground)]">Session data</strong> is used exclusively to route users through the conversational commerce flow (browse products, add to cart, place orders, check order status).</li>
            <li><strong className="text-[var(--foreground)]">Phone number</strong> is used to look up returning customers from the Merchant&rsquo;s backend so they don&rsquo;t need to re-enter their name and email.</li>
            <li><strong className="text-[var(--foreground)]">Name and email</strong> are transmitted to the Merchant&rsquo;s backend solely when an order is placed, to fulfill that order.</li>
            <li><strong className="text-[var(--foreground)]">Message history</strong> (when AI mode is enabled) is passed to OpenAI&rsquo;s GPT-4o-mini API to enable natural language shopping; history is capped at 20 turns and cleared when the user resets the conversation.</li>
          </ul>
        </Section>

        {/* Section 5 */}
        <Section title="5. Data Sharing">
          <p>We share data with the following parties only as necessary to operate the service:</p>
          <Table
            headers={['Party', 'Data Shared', 'Basis']}
            rows={[
              ["<strong class=\"text-[var(--foreground)]\">Merchant's backend</strong>", 'Phone number, name, email, order items, pickup location', 'Order fulfillment'],
              ['<strong class="text-[var(--foreground)]">Meta Platforms</strong>', 'WhatsApp messages (text, interactive replies)', 'Message delivery via Cloud API v19.0'],
              ['<strong class="text-[var(--foreground)]">OpenAI</strong> (if AI mode enabled)', 'Conversation history (last 20 turns)', 'Natural language processing'],
              ['<strong class="text-[var(--foreground)]">Cloudflare</strong>', 'Session data stored in Cloudflare KV', 'Infrastructure provider'],
            ]}
          />
          <p className="mt-3">We do not sell user data. We do not use user data for advertising.</p>
        </Section>

        {/* Section 6 */}
        <Section title="6. Data Retention">
          <Table
            headers={['Data', 'Retention Period']}
            rows={[
              ['User sessions (cart, state, customer info)', '<strong class="text-[var(--foreground)]">24 hours</strong> — automatically deleted by Cloudflare KV expiry'],
              ['Idle session reset', '<strong class="text-[var(--foreground)]">30 minutes</strong> of inactivity — cart and order state reset; customer name/email preserved until 24h expiry'],
              ['Tenant (Merchant) configuration', 'Until the Merchant is removed via the Admin API'],
              ['Order and customer records', "Retained by the Merchant's own backend per their data policy; the platform does not independently store order history"],
            ]}
          />
        </Section>

        {/* Section 7 */}
        <Section title="7. Security">
          <p>We implement the following security measures:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li><strong className="text-[var(--foreground)]">Webhook authentication</strong> — Every inbound message is validated using HMAC-SHA256 with a secret key before processing. The comparison is timing-safe to prevent timing attacks.</li>
            <li><strong className="text-[var(--foreground)]">Admin API protection</strong> — Platform administration endpoints require a bearer token.</li>
            <li><strong className="text-[var(--foreground)]">Secret management</strong> — Meta access tokens and API keys are stored as encrypted secrets in Cloudflare Workers — never in source code or configuration files.</li>
            <li><strong className="text-[var(--foreground)]">Tenant isolation</strong> — Each Merchant&rsquo;s sessions are stored under a namespace keyed by their unique WhatsApp Phone Number ID. Tenants cannot access each other&rsquo;s data.</li>
            <li><strong className="text-[var(--foreground)]">Token redaction</strong> — Sensitive tokens are masked (<code className="text-xs bg-[var(--muted)] px-1 py-0.5 rounded">***</code>) in all API read responses.</li>
          </ul>
        </Section>

        {/* Section 8 */}
        <Section title="8. User Rights">
          <p>
            <strong className="text-[var(--foreground)]">Session data</strong> expires automatically within 24 hours. There is no action required to delete it.
          </p>
          <p>
            For <strong className="text-[var(--foreground)]">order history, customer profile, or other data</strong> held by the Merchant&rsquo;s backend, End Users should contact the Merchant directly.
          </p>
          <p>
            For questions about data held at the platform level, contact us at:{' '}
            <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">
              {EMAIL}
            </a>
          </p>
        </Section>

        {/* Section 9 */}
        <Section title="9. Merchant Obligations">
          <p>Each Merchant registered on this platform agrees to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 mt-2">
            <li>Maintain their own privacy policy covering their end-user data practices</li>
            <li>Use the platform only for legitimate commerce purposes (responding to customer-initiated messages)</li>
            <li>Not use the platform to send unsolicited marketing messages</li>
            <li>Comply with Meta&rsquo;s WhatsApp Business Policy and applicable data protection laws</li>
          </ul>
        </Section>

        {/* Section 10 */}
        <Section title="10. Changes to This Policy">
          <p>
            We may update this policy periodically. The &ldquo;Last updated&rdquo; date at the top reflects the most recent revision. Continued use of the platform constitutes acceptance of the updated policy.
          </p>
        </Section>

        {/* Section 11 */}
        <Section title="11. Contact">
          <p>For privacy questions or data requests related to this platform:</p>
          <div className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <p className="font-semibold text-[var(--foreground)] mb-1">{COMPANY}</p>
            <p>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className="text-brand-500 hover:text-brand-600 transition-colors">
                {EMAIL}
              </a>
            </p>
            <p>Address: 20 Peter Hogg Crt, Whitby, ON, Canada, L1P 0N1</p>
          </div>
        </Section>

      </div>
    </div>
  )
}
