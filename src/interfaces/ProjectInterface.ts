interface Project {
  title: string,
  description: string,
  image: string,
  slug: string,
  time?: number
}

interface Params {
  slug: string
}

interface SingleProject {
  data: Project,
  content: string
}

export type { Project, Params, SingleProject }
