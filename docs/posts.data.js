import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true, // Generate excerpts if you want them (e.g., <!-- more --> comment in md)
  transform(rawData) {
    // Sort posts by date descending
    return rawData
      .filter(({ url }) => url !== '/posts/') // Exclude the index page itself
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map((page) => {
         // You can modify the data for each page here if needed
         // Example: Format the date
         page.frontmatter.date = new Date(page.frontmatter.date).toLocaleDateString('zh-CN')
         return page
      })
  }
})

// Export the type for usage in components (optional, good practice)
// export type Post = {
//   url: string
//   frontmatter: {
//     title: string
//     author?: string
//     date: string // Or Date object if not transformed
//     description?: string
//     tags?: string[]
//     // add other frontmatter fields here
//   }
//   excerpt?: string
// }