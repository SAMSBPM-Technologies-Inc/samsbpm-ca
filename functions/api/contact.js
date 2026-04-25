export async function onRequestPost(context) {
  try {
    const body = await context.request.json()

    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      ...body,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Message received' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to process request' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
