import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export default function HomePage() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Réseautage Stratégique',
      description: 'Établissez des connexions significatives avec des pairs et des mentors pour développer votre réseau professionnel.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Partage de Connaissances',
      description: 'Accédez à une bibliothèque de ressources et partagez vos expériences pour une croissance mutuelle.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Gestion de Projets Simplifiée',
      description: 'Organisez et suivez vos projets efficacement avec des outils collaboratifs intégrés.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Connectez-vous,
                <br />
                Collaborez,
                <br />
                <span className="text-primary-deep">Réussissez.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Dev & Tech est la plateforme dédiée aux développeurs et technophiles pour bâtir, innover et grandir ensemble.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/register"
                      className="bg-primary-deep text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-center"
                    >
                      S'inscrire
                    </Link>
                    <Link
                      to="/login"
                      className="bg-white text-gray-700 border-2 border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-center"
                    >
                      Découvrir la Plateforme
                    </Link>
                  </>
                ) : (
                  <Link
                    to="/dashboard"
                    className="bg-primary-deep text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-center"
                  >
                    Accéder au Tableau de bord
                  </Link>
                )}
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden md:block lg:block order-1 lg:order-2">
              <div className="relative">
                {/* Isometric Office Illustration */}
                <svg
                  viewBox="0 0 600 500"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="600" height="500" fill="#F9FAFB" rx="20" />
                  
                  {/* Floor */}
                  <path
                    d="M0 400 L600 400 L600 500 L0 500 Z"
                    fill="#F3F4F6"
                  />
                  
                  {/* Desk 1 */}
                  <g transform="translate(100, 300)">
                    <rect x="0" y="0" width="120" height="80" fill="#2563EB" rx="4" />
                    <rect x="10" y="10" width="100" height="60" fill="#60A5FA" />
                    <circle cx="30" cy="30" r="8" fill="#10B981" />
                    <rect x="50" y="20" width="50" height="4" fill="#F9FAFB" />
                    <rect x="50" y="30" width="40" height="4" fill="#F9FAFB" />
                    <rect x="50" y="40" width="45" height="4" fill="#F9FAFB" />
                  </g>
                  
                  {/* Desk 2 */}
                  <g transform="translate(250, 280)">
                    <rect x="0" y="0" width="120" height="80" fill="#2563EB" rx="4" />
                    <rect x="10" y="10" width="100" height="60" fill="#60A5FA" />
                    <circle cx="30" cy="30" r="8" fill="#10B981" />
                    <rect x="50" y="20" width="50" height="4" fill="#F9FAFB" />
                    <rect x="50" y="30" width="40" height="4" fill="#F9FAFB" />
                  </g>
                  
                  {/* Central Table */}
                  <g transform="translate(200, 200)">
                    <ellipse cx="100" cy="0" rx="100" ry="30" fill="#2563EB" />
                    <ellipse cx="100" cy="10" rx="90" ry="25" fill="#60A5FA" />
                    {/* People around table */}
                    <circle cx="50" cy="-20" r="15" fill="#FBBF24" />
                    <circle cx="150" cy="-20" r="15" fill="#EF4444" />
                    <circle cx="100" cy="-40" r="15" fill="#10B981" />
                  </g>
                  
                  {/* Sofa */}
                  <g transform="translate(400, 320)">
                    <rect x="0" y="0" width="100" height="60" fill="#FBBF24" rx="8" />
                    <rect x="10" y="10" width="80" height="40" fill="#FCD34D" rx="4" />
                    <circle cx="50" cy="30" r="12" fill="#2563EB" />
                  </g>
                  
                  {/* Window */}
                  <g transform="translate(50, 50)">
                    <rect x="0" y="0" width="200" height="150" fill="#60A5FA" rx="8" />
                    <rect x="10" y="10" width="180" height="130" fill="#93C5FD" />
                    <line x1="100" y1="10" x2="100" y2="140" stroke="#2563EB" strokeWidth="2" />
                    <line x1="10" y1="75" x2="190" y2="75" stroke="#2563EB" strokeWidth="2" />
                  </g>
                  
                  {/* Plants */}
                  <g transform="translate(450, 250)">
                    <ellipse cx="0" cy="0" rx="20" ry="30" fill="#10B981" />
                    <rect x="-5" y="20" width="10" height="30" fill="#059669" />
                  </g>
                  
                  <g transform="translate(500, 270)">
                    <ellipse cx="0" cy="0" rx="15" ry="25" fill="#10B981" />
                    <rect x="-4" y="15" width="8" height="25" fill="#059669" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-primary-deep mb-4" style={{ color: '#2563EB' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

