import { COPY } from '@/content/copy.es'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-gray-600 text-sm">
            {COPY.footer.line}
          </p>
          
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COPY.footer.phone}`}
              className="text-gray-700 hover:text-gray-900 text-sm font-medium link-underline"
            >
              {COPY.footer.phoneLabel}: {COPY.footer.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
