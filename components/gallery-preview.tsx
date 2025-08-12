import Image from 'next/image'
import Link from 'next/link'
import { COPY } from '@/content/copy.es'
import type { GalleryImage } from '@/lib/gallery'

interface GalleryPreviewProps {
  images: GalleryImage[]
}

export default function GalleryPreview({ images }: GalleryPreviewProps) {
  // Show first 6-8 images for preview
  const previewImages = images.slice(0, 8)

  if (previewImages.length === 0) {
    return (
      <section className="py-12 sm:py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {COPY.galeriaPreview.title}
          </h2>
          <p className="text-gray-600 mb-8">
            Las fotos se cargarán automáticamente cuando se añadan al directorio car-photos.
          </p>
          <Link
            href="/galeria"
            className="btn-primary"
          >
            {COPY.galeriaPreview.viewAll}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {COPY.galeriaPreview.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Descubre la elegancia atemporal del Citroën DS 23 Pallas en bodas reales.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                  {previewImages.map((image) => (
          <div
            key={image.src}
            className="aspect-square relative overflow-hidden rounded-xl bg-gray-100"
          >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/galeria"
            className="btn-primary"
          >
            {COPY.galeriaPreview.viewAll}
            <span className="ml-2">({images.length})</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
