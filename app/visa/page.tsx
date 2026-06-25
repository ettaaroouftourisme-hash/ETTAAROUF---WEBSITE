import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visa | Ettaarouf Tourisme et Voyage',
}

export default function VisaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="font-display text-4xl font-semibold text-lapis-800 mb-4">
            Visa
          </h1>
          <p className="font-body text-charcoal/60 text-lg">
            Cette page est en cours de développement. Revenez bientôt&nbsp;!
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
