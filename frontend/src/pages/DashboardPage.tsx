import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { fetchProjects } from '../store/slices/projectsSlice'
import { Project } from '../store/slices/projectsSlice'

const statusLabels: Record<Project['status'], string> = {
  planning: 'En planification',
  in_progress: 'En cours',
  completed: 'Terminé',
  on_hold: 'En pause',
}

const statusColors: Record<Project['status'], string> = {
  planning: 'bg-yellow-100 text-yellow-800',
  in_progress: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  on_hold: 'bg-gray-100 text-gray-800',
}

export default function DashboardPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)
  const { projects, isLoading } = useSelector((state: RootState) => state.projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  const recentProjects = projects.slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-deep mb-2">
          Bienvenue, {user?.firstName} {user?.lastName} !
        </h1>
        <p className="text-sm sm:text-base text-gray-600">Voici un aperçu de vos activités</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="card">
          <h3 className="text-base sm:text-lg font-heading font-semibold mb-2">Mes Projets</h3>
          <p className="text-2xl sm:text-3xl font-bold text-primary-deep">
            {projects.filter(p => p.managerId === user?.id || p.members?.some(m => m.id === user?.id)).length}
          </p>
        </div>

        <div className="card">
          <h3 className="text-base sm:text-lg font-heading font-semibold mb-2">Messages</h3>
          <p className="text-2xl sm:text-3xl font-bold text-primary-deep">0</p>
        </div>

        <div className="card sm:col-span-2 lg:col-span-1">
          <h3 className="text-base sm:text-lg font-heading font-semibold mb-2">Événements</h3>
          <p className="text-2xl sm:text-3xl font-bold text-primary-deep">0</p>
        </div>
      </div>

      <div className="card">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-primary-deep">Projets récents</h2>
          <Link to="/dashboard/projects" className="text-sm sm:text-base text-primary-deep hover:underline">
            Voir tous
          </Link>
        </div>

        {isLoading ? (
          <p className="text-gray-500 text-center py-8">Chargement...</p>
        ) : recentProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProjects.map((project) => (
              <Link
                key={project.id}
                to={`/dashboard/projects/${project.id}`}
                className="card hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </span>
                  {project.manager && (
                    <span className="text-xs sm:text-sm text-gray-500">
                      {project.manager.firstName} {project.manager.lastName}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Aucun projet pour le moment</p>
            <Link to="/dashboard/projects" className="btn-primary inline-block">
              Créer un projet
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

