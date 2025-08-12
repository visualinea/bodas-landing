import Hero from '@/components/hero'
import Services from '@/components/services'
import GalleryPreview from '@/components/gallery-preview'
import ContactStrip from '@/components/contact-strip'
import { getGalleryImagesServer } from '@/lib/gallery'

export default async function HomePage() {
  // Load gallery images for preview and hero
  const galleryImages = await getGalleryImagesServer()
  
  // Use first image as hero background if available
  const heroImage = galleryImages.length > 0 ? galleryImages[0] : undefined

  return (
    <div className="pt-16">
      <Hero heroImage={heroImage} />
      <Services />
      <GalleryPreview images={galleryImages} />
      <ContactStrip />
    </div>
  )
}
