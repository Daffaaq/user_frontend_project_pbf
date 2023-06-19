import React from 'react'
import { Link } from 'react-router-dom'
import './Posts.css'

import { usePosts } from '../../custom-hooks/'

export default function Posts() {
  const [posts, isLoading] = usePosts()

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map(post => (
      <Link
        className="posts__post"
        key={post.fields.slug}
        to={post.fields.slug}
      >
        <div className="posts__card">
          <img src={post.fields.image.fields.file.url} alt={post.fields.name} />
          <h3 className="card__name">{post.fields.name}</h3>
        </div>

      </Link>
    ))
  }

  return (
    <div className="posts__container">
      <div className="posts">{renderPosts()}</div>
    </div>
  )
}