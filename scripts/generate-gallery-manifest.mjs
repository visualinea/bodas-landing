#!/usr/bin/env node

import { readdir, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import sharp from 'sharp'

const PHOTOS_DIR = 'public/car-photos'
const OUTPUT_PATH = 'public/gallery-manifest.json'
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp']

async function generateBlurDataURL(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(10, 10, { fit: 'inside' })
      .jpeg({ quality: 20 })
      .toBuffer()
    
    return `data:image/jpeg;base64,${buffer.toString('base64')}`
  } catch (error) {
    console.warn(`Warning: Could not generate blur for ${imagePath}:`, error.message)
    // Return a minimal 1x1 transparent pixel as fallback
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
  }
}

async function getImageDimensions(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata()
    return {
      width: metadata.width || 800,
      height: metadata.height || 600
    }
  } catch (error) {
    console.warn(`Warning: Could not get dimensions for ${imagePath}:`, error.message)
    return { width: 800, height: 600 }
  }
}

async function generateGalleryManifest() {
  console.log('Generating gallery manifest...')
  
  try {
    // Read all files from the photos directory
    const files = await readdir(PHOTOS_DIR)
    
    // Filter for supported image formats and sort by name
    const imageFiles = files
      .filter(file => SUPPORTED_FORMATS.includes(extname(file).toLowerCase()))
      .sort()
    
    console.log(`Found ${imageFiles.length} images in ${PHOTOS_DIR}`)
    
    if (imageFiles.length === 0) {
      console.warn('No images found in car-photos directory')
      await writeFile(OUTPUT_PATH, JSON.stringify([]))
      return
    }
    
    // Process each image
    const manifest = []
    
    for (const file of imageFiles) {
      const imagePath = join(PHOTOS_DIR, file)
      const publicPath = `/car-photos/${file}`
      
      console.log(`Processing: ${file}`)
      
      // Get dimensions and blur data URL in parallel
      const [dimensions, blurDataURL] = await Promise.all([
        getImageDimensions(imagePath),
        generateBlurDataURL(imagePath)
      ])
      
      manifest.push({
        src: publicPath,
        width: dimensions.width,
        height: dimensions.height,
        blurDataURL,
        alt: `Citroën DS 23 Pallas en boda – foto ${manifest.length + 1}`
      })
    }
    
    // Write the manifest
    await writeFile(OUTPUT_PATH, JSON.stringify(manifest, null, 2))
    console.log(`✅ Gallery manifest generated with ${manifest.length} images`)
    console.log(`📁 Saved to: ${OUTPUT_PATH}`)
    
  } catch (error) {
    console.error('❌ Error generating gallery manifest:', error)
    process.exit(1)
  }
}

// Run the script
generateGalleryManifest()
