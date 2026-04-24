import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log the submission (replace with Resend/SendGrid in production)
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      ...body,
    })

    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 400 }
    )
  }
}
