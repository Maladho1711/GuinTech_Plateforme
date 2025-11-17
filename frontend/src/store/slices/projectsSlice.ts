import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { projectService } from '../../services/projectService'

export interface Project {
  id: string
  title: string
  description: string
  status: 'planning' | 'in_progress' | 'completed' | 'on_hold'
  managerId: string
  manager?: {
    id: string
    firstName: string
    lastName: string
  }
  members?: Array<{
    id: string
    firstName: string
    lastName: string
  }>
  startDate?: string
  endDate?: string
  createdAt: string
  updatedAt: string
}

interface ProjectsState {
  projects: Project[]
  currentProject: Project | null
  isLoading: boolean
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  currentProject: null,
  isLoading: false,
  error: null,
}

export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
  return await projectService.getAll()
})

export const fetchProject = createAsyncThunk('projects/fetchOne', async (id: string) => {
  return await projectService.getById(id)
})

export const createProject = createAsyncThunk(
  'projects/create',
  async (data: Partial<Project>) => {
    return await projectService.create(data)
  }
)

export const updateProject = createAsyncThunk(
  'projects/update',
  async ({ id, data }: { id: string; data: Partial<Project> }) => {
    return await projectService.update(id, data)
  }
)

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    clearCurrentProject: (state) => {
      state.currentProject = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false
        state.projects = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Erreur lors du chargement des projets'
      })
      .addCase(fetchProject.fulfilled, (state, action) => {
        state.currentProject = action.payload
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.projects.push(action.payload)
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const index = state.projects.findIndex(p => p.id === action.payload.id)
        if (index !== -1) {
          state.projects[index] = action.payload
        }
        if (state.currentProject?.id === action.payload.id) {
          state.currentProject = action.payload
        }
      })
  },
})

export const { clearCurrentProject } = projectsSlice.actions
export default projectsSlice.reducer

