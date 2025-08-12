import Image from 'next/image'
import Link from 'next/link'
import { COPY } from '@/content/copy.es'
import { getWhatsAppLink } from '@/lib/whatsapp'

export default function Hero() {
  // Use specific images for desktop and mobile
  const desktopImage = {
    src: '/car-photos/WhatsApp Image 2025-08-06 at 14.09.44 (4).jpeg',
    width: 1600,
    height: 1066,
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAACAQMFAAAAAAAAAAAAAAABAgADESEEFDFBcf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCa6aqiBENxyc2jZnts+REC/9k='
  }
  
  const mobileImage = {
    src: '/car-photos/WhatsApp Image 2025-08-06 at 14.09.45 (6).jpeg',
    width: 1600,
    height: 1066,
    blurDataURL: 'data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAIBEQMSFUFR4f/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AyfAz3GiK7lvCNmvLyABj/9k='
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Images - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={mobileImage.src}
          alt="Citroën DS 23 Pallas clásico para bodas"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={mobileImage.blurDataURL}
          sizes="100vw"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Background Images - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={desktopImage.src}
          alt="Citroën DS 23 Pallas clásico para bodas"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={desktopImage.blurDataURL}
          sizes="100vw"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Content Container - Flex layout for positioning */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        
        {/* Title Section - Top */}
        <div className="flex-shrink-0 pt-20 md:pt-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 text-balance">
              {COPY.hero.h1}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-balance max-w-3xl mx-auto">
              {COPY.hero.sub}
            </p>
          </div>
        </div>

        {/* Spacer for middle area */}
        <div className="flex-grow" />

        {/* Buttons Section - Bottom */}
        <div className="flex-shrink-0 pb-20 md:pb-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-lg px-8 py-4"
              >
                {COPY.hero.primaryCta}
              </a>
              
              <Link
                href="/galeria"
                className="btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-center text-lg px-8 py-4"
              >
                {COPY.hero.secondaryCta}
              </Link>
            </div>
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
