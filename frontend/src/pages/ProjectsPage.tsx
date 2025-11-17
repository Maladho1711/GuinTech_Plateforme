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

export default function ProjectsPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { projects, isLoading } = useSelector((state: RootState) => state.projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-h1">Projets</h1>
        <button className="btn-primary">Nouveau Projet</button>
      </div>

      {isLoading ? (
        <p className="text-gray-500">Chargement...</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/dashboard/projects/${project.id}`}
              className="card hover:shadow-md transition-shadow"
            >
              <h3 className="text-h3 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </span>
                {project.manager && (
                  <span className="text-sm text-gray-500">
                    {project.manager.firstName} {project.manager.lastName}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="text-gray-500 mb-4">Aucun projet pour le moment</p>
          <button className="btn-primary">Créer un projet</button>
        </div>
      )}
    </div>
  )
}

