import PoemsListLayout from '@/layouts/PoemsListLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allPoems } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 10

export const metadata = genPageMetadata({ title: 'Poems' })

export default function PoemsPage() {
  const poems = allCoreContent(sortPosts(allPoems))
  const pageNumber = 1
  const initialDisplayPosts = poems.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(poems.length / POSTS_PER_PAGE),
  }

  return (
    <PoemsListLayout
      posts={poems}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Poems"
    />
  )
}
