import Hero from '@/components/hero'
import Services from '@/components/services'
import GalleryPreview from '@/components/gallery-preview'
import ContactStrip from '@/components/contact-strip'
import { getGalleryImagesServer } from '@/lib/gallery'

export default async function HomePage() {
  // Load gallery images for preview
  const galleryImages = await getGalleryImagesServer()

  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <GalleryPreview images={galleryImages} />
      <ContactStrip />
    </div>
  )
}
