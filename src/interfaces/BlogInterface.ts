interface Node {
  createdAt: string,
  slug: string,
  title: string,
  excerpt: string,
  featuredImage?: {
    url: string
  },
}

interface Post {
  cursor: string,
  node: Node
}

interface PostConnection {
  postsConnection: {
    edges: Array<Post>
  }
}

export type { Post, PostConnection };
