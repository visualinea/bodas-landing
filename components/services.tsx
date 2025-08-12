import { COPY } from '@/content/copy.es'
import { getWhatsAppLink } from '@/lib/whatsapp'

export default function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {COPY.servicios.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            {COPY.servicios.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Services List */}
          <div>
            <ul className="space-y-6">
              {COPY.servicios.bullets.map((service, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                ¿Listo para reservar?
              </h3>
              
              <p className="text-gray-600 mb-6">
                Consulta disponibilidad para tu fecha y resuelve todas tus dudas de forma instantánea.
              </p>
              
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {COPY.servicios.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
