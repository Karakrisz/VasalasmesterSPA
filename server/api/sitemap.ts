interface Post {
  id: number
  slug: string
  modifiedAt?: string
  image?: string
  created_at: string
}

export default defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      'https://blog.vasalasmester.hu/api/public/json-posts'
    )
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    const posts: Post[] = await response.json()

    return posts.map((post: Post) => {
      const lastModified = post.modifiedAt
        ? new Date(post.modifiedAt).toISOString() 
        : new Date(post.created_at).toISOString() 

      const imageLoc = post.image
        ? `https://vasalasmester.hu/storage/${post.image}`
        : undefined

      return {
        loc: `/posts/${post.slug}`,
        lastmod: lastModified, 
        images: imageLoc
          ? [
              {
                loc: imageLoc,
                caption: `Kép a poszthoz: ${post.slug}`,
              },
            ]
          : [],
      }
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return []
  }
})
