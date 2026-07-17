export async function onRequestPost(context) {
  try {
    const body = await context.request.json()
    const { name, email, company, phone, product, message } = body

    const RESEND_API_KEY = context.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error('[Contact] RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const subject = `New demo request from ${name}${company ? ` — ${company}` : ''}`

    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
        ${company ? `<tr><td style="padding:8px;font-weight:bold">Company</td><td style="padding:8px">${company}</td></tr>` : ''}
        ${phone ? `<tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>` : ''}
        ${product ? `<tr><td style="padding:8px;font-weight:bold">Product Interest</td><td style="padding:8px">${product}</td></tr>` : ''}
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${message}</td></tr>
      </table>
    `

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'SAMSBPM Contact Form <noreply@samsbpm.com>',
        to: ['contact@samsbpm.com'],
        reply_to: email,
        subject,
        html,
      }),
    })

    if (!resendRes.ok) {
      const err = await resendRes.text()
      console.error('[Contact] Resend error:', err)
      return new Response(
        JSON.stringify({ success: false, message: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error('[Contact] Unexpected error:', err)
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to process request' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
