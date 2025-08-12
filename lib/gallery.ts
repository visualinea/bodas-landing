export interface GalleryImage {
  src: string
  width: number
  height: number
  blurDataURL: string
  alt: string
}

/**
 * Loads the gallery manifest from the public folder
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const response = await fetch('/gallery-manifest.json')
    
    if (!response.ok) {
      console.warn('Gallery manifest not found, returning empty array')
      return []
    }
    
    const images: GalleryImage[] = await response.json()
    return images || []
  } catch (error) {
    console.error('Error loading gallery manifest:', error)
    return []
  }
}

/**
 * Server-side function to load gallery images from the manifest
 */
export async function getGalleryImagesServer(): Promise<GalleryImage[]> {
  try {
    // In server components, we need to read from the file system
    const { readFile } = await import('fs/promises')
    const { join } = await import('path')
    
    const manifestPath = join(process.cwd(), 'public', 'gallery-manifest.json')
    const manifestData = await readFile(manifestPath, 'utf-8')
    const images: GalleryImage[] = JSON.parse(manifestData)
    
    return images || []
  } catch (error) {
    console.warn('Gallery manifest not found or invalid:', error)
    return []
  }
}
