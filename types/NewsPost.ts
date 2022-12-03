export interface NewsPost {
  id: string
  url: string
  title: string
  content_html: string
  content_text: string
  date_published: string
  date_modified: string
  authors: Author[]
  author: Authors
  image: string
  tags: string[]
}

export interface Author {
  name: string
  url: string
  avatar: string
}

export interface Authors {
  name: string
  url: string
  avatar: string
}
