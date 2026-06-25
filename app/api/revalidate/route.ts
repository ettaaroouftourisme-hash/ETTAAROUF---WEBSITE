/**
 * Webhook de revalidation Hygraph → Netlify ISR
 * POST /api/revalidate
 */
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { verifyWebhookSignature } from '@/lib/hygraph'

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('hygraph-signature') ?? ''
    const payload   = await req.text()
    const secret    = process.env.HYGRAPH_WEBHOOK_SECRET ?? ''

    if (secret && !verifyWebhookSignature(payload, signature, secret)) {
      return NextResponse.json({ error: 'Signature invalide' }, { status: 401 })
    }

    const body = JSON.parse(payload)
    const modelId = body?.data?.__typename?.toLowerCase()

    // Revalide les routes concernées selon le modèle Hygraph modifié
    if (modelId?.includes('destination')) {
      revalidatePath('/destinations')
      revalidatePath('/')
    }
    if (modelId?.includes('voyage')) {
      revalidatePath('/voyages')
      revalidatePath('/')
    }
    if (modelId?.includes('blog') || modelId?.includes('post')) {
      revalidatePath('/blog')
    }
    if (modelId?.includes('testimonial')) {
      revalidatePath('/')
    }

    return NextResponse.json({ revalidated: true, timestamp: Date.now() })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
