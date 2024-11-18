interface Post {
  id: number
  slug: string
  modifiedAt?: string
}

export default defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      'https://vasalasmester.hu/api/public/json-posts'
    )
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    const posts: Post[] = await response.json()

    return posts.map((post: Post) => {
      return {
        loc: `/posts/${post.slug}`,
        lastmod: post.modifiedAt ? new Date(post.modifiedAt) : new Date(), 
      }
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return [] 
  }
})

