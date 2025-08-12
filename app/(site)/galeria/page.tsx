import Link from 'next/link'
import GalleryGrid from '@/components/gallery-grid'
import { getGalleryImagesServer } from '@/lib/gallery'
import { COPY } from '@/content/copy.es'

export const metadata = {
  title: 'Galería - Citroën DS 23 Pallas para bodas | Madrid',
  description: 'Galería completa del Citroën DS 23 Pallas "Tiburón" en bodas reales. Descubre la elegancia clásica perfecta para tu día especial.',
}

export default async function GaleriaPage() {
  const galleryImages = await getGalleryImagesServer()

  return (
    <div className="pt-16 min-h-screen">
      {/* Header section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {COPY.galeriaPreview.title}
              </h1>
              <p className="text-gray-600">
                {galleryImages.length > 0 
                  ? `${galleryImages.length} fotos del Citroën DS 23 Pallas en bodas`
                  : 'Galería del Citroën DS 23 Pallas'
                }
              </p>
            </div>
            
            <Link
              href="/#servicios"
              className="btn-secondary"
            >
              Ver {COPY.nav.servicios}
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="py-8 sm:py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </div>
  )
}
