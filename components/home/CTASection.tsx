import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Voyage sur mesure Ettaarouf Tourisme"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lapis-900/90 via-lapis-900/80 to-lapis-900/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold" />
            <span className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Voyage sur mesure
            </span>
          </div>

          {/* Titre */}
          <h2 className="font-display text-white text-display-xl font-semibold leading-tight mb-5">
            Votre Rêve,
            <br />
            <span className="text-gold italic font-light">Notre Expertise.</span>
          </h2>

          {/* Description */}
          <p className="font-body text-white/65 text-base lg:text-lg leading-relaxed mb-9 max-w-lg">
            Chaque voyage est unique. Nos conseillers créent votre itinéraire sur mesure
            selon vos envies, votre budget et votre calendrier. Consultation gratuite.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5
                          bg-gold hover:bg-gold-dark text-white font-body font-semibold
                          px-8 py-4 rounded-full shadow-gold text-base
                          transition-all duration-300 hover:shadow-none hover:-translate-y-0.5"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/213XXXXXXXXX?text=Bonjour%20Ettaarouf%20Tourisme%2C%20je%20souhaite%20un%20devis%20pour%20un%20voyage."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5
                          border-2 border-white/50 hover:border-white text-white
                          font-body font-semibold px-8 py-4 rounded-full text-base
                          backdrop-blur-sm hover:bg-white/10
                          transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 text-green-400" />
              WhatsApp
            </a>
          </div>

          {/* Réassurance */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { icon: '⚡', text: 'Réponse en moins de 2h' },
              { icon: '🎯', text: 'Devis personnalisé gratuit' },
              { icon: '🔒', text: 'Sans engagement' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-base">{item.icon}</span>
                <span className="font-body text-sm text-white/65">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 64L80 53.3C160 43 320 21 480 16C640 11 800 21 960 26.7C1120 32 1280 32 1360 32L1440 32V64H1360C1280 64 1120 64 960 64C800 64 640 64 480 64C320 64 160 64 80 64H0Z"
                fill="#0C1E3F"/>
        </svg>
      </div>
    </section>
  )
}
