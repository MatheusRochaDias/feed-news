import React from 'react'
import { posts } from '../pages'

export const PostCard = ({ post }: any) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}
