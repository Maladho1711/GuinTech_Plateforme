import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { logout } from '../../store/slices/authSlice'

export default function Header() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-deep rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg md:text-xl">DT</span>
            </div>
            <span className="font-heading text-base sm:text-lg md:text-xl font-bold text-primary-deep">Dev & Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary-deep transition-colors">
                  Tableau de bord
                </Link>
                <Link to="/dashboard/projects" className="text-gray-700 hover:text-primary-deep transition-colors">
                  Projets
                </Link>
                <Link to="/dashboard/forum" className="text-gray-700 hover:text-primary-deep transition-colors">
                  Forum
                </Link>
                <Link to="/dashboard/members" className="text-gray-700 hover:text-primary-deep transition-colors">
                  Membres
                </Link>
                {(user?.role === 'admin' || user?.role === 'super_admin') && (
                  <Link to="/admin" className="text-gray-700 hover:text-primary-deep transition-colors">
                    Administration
                  </Link>
                )}
                <div className="flex items-center space-x-4 ml-4">
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-deep transition-colors"
                  >
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.firstName} className="w-8 h-8 rounded-full" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-white text-sm">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </div>
                    )}
                    <span className="hidden lg:inline">{user?.firstName} {user?.lastName}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary-deep transition-colors font-medium"
                >
                  Connexion
                </Link>
                <Link 
                  to="/register" 
                  className="bg-primary-deep text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Inscription
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-deep hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-deep"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {isAuthenticated ? (
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/dashboard" 
                  className="text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tableau de bord
                </Link>
                <Link 
                  to="/dashboard/projects" 
                  className="text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projets
                </Link>
                <Link 
                  to="/dashboard/forum" 
                  className="text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Forum
                </Link>
                <Link 
                  to="/dashboard/members" 
                  className="text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Membres
                </Link>
                {(user?.role === 'admin' || user?.role === 'super_admin') && (
                  <Link 
                    to="/admin" 
                    className="text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Administration
                  </Link>
                )}
                <Link
                  to="/dashboard/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-deep transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.firstName} className="w-8 h-8 rounded-full" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-white text-sm">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </div>
                  )}
                  <span>{user?.firstName} {user?.lastName}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-secondary text-sm px-4 py-2 text-left"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-primary-deep transition-colors font-medium px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link 
                  to="/register" 
                  className="bg-primary-deep text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

