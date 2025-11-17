import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ProfilePage from './pages/ProfilePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ResourcesPage from './pages/ResourcesPage'
import CalendarPage from './pages/CalendarPage'
import MessagingPage from './pages/MessagingPage'
import ForumPage from './pages/ForumPage'
import MembersPage from './pages/MembersPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminSettingsPage from './pages/admin/AdminSettingsPage'
import SuperAdminSponsorsPage from './pages/super-admin/SuperAdminSponsorsPage'

function App() {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth)

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
    return <>{children}</>
  }

  const AdminRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated || (user?.role !== 'admin' && user?.role !== 'super_admin')) {
      return <Navigate to="/dashboard" replace />
    }
    return <>{children}</>
  }

  const SuperAdminRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated || user?.role !== 'super_admin') {
      return <Navigate to="/dashboard" replace />
    }
    return <>{children}</>
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="messaging" element={<MessagingPage />} />
        <Route path="forum" element={<ForumPage />} />
        <Route path="members" element={<MembersPage />} />
      </Route>

      {/* Admin routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Layout />
          </AdminRoute>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      {/* Super Admin routes */}
      <Route
        path="/super-admin"
        element={
          <SuperAdminRoute>
            <Layout />
          </SuperAdminRoute>
        }
      >
        <Route path="sponsors" element={<SuperAdminSponsorsPage />} />
      </Route>
    </Routes>
  )
}

export default App

