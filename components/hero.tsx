import Image from 'next/image'
import Link from 'next/link'
import { COPY } from '@/content/copy.es'
import { getWhatsAppLink } from '@/lib/whatsapp'

interface HeroProps {
  heroImage?: {
    src: string
    width: number
    height: number
    blurDataURL: string
  }
}

export default function Hero({ heroImage }: HeroProps) {
  // Use a placeholder if no hero image is provided
  const defaultHeroImage = {
    src: '/car-photos/hero-placeholder.jpg',
    width: 1920,
    height: 1080,
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  }

  const imageToUse = heroImage || defaultHeroImage

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageToUse.src}
          alt="Citroën DS 23 Pallas clásico para bodas"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={imageToUse.blurDataURL}
          sizes="100vw"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 text-center md:text-left">
        <div className="max-w-xl mx-auto md:mx-0">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            {COPY.hero.h1}
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 text-balance">
            {COPY.hero.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              {COPY.hero.primaryCta}
            </a>
            
            <Link
              href="/galeria"
              className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-center"
            >
              {COPY.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
