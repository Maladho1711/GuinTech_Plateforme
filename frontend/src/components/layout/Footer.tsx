import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

interface Sponsor {
  id: string
  name: string
  logo: string
  link: string
  order: number
}

export default function Footer() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([])

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await api.get<Sponsor[]>('/sponsors')
        setSponsors(response.data.sort((a, b) => a.order - b.order))
      } catch (error) {
        console.error('Error fetching sponsors:', error)
      }
    }
    fetchSponsors()
  }, [])

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Bloc 1: Liens internes */}
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary-deep mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/dashboard/forum" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Communauté
                </Link>
              </li>
              <li>
                <Link to="/dashboard/projects" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/dashboard/resources" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/dashboard/calendar" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Calendrier
                </Link>
              </li>
              <li>
                <Link to="/dashboard/messaging" className="text-sm sm:text-base text-gray-600 hover:text-primary-deep transition-colors">
                  Messagerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 2: Sponsors/Partenaires */}
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary-deep mb-3 sm:mb-4">Nos Partenaires</h3>
            {sponsors.length > 0 ? (
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-10 sm:h-12 object-contain max-w-[120px] sm:max-w-none"
                    />
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm sm:text-base text-gray-500">Aucun partenaire pour le moment</p>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-600 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Dev & Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

