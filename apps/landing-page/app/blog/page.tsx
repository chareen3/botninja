import { getBlogPosts } from '@/app/db/blog'
import { Posts } from './Posts'

export const metadata = {
  title: 'BotNinja Blog',
  description:
    'Discover BotNinja Tips, Your Source for Chatbots, Marketing Chats, Support, and More!',
}

export default function Home() {
  const allBlogs = getBlogPosts()

  return <Posts allBlogs={allBlogs} />
}
