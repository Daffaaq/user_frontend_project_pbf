import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSinglePost } from '../../custom-hooks'

export default function SinglePost() {
    const { slug } = useParams()
    const [post, isLoading] = useSinglePost(slug)
  
    const renderPost = () => {
      if (isLoading) return <p>Loading...</p>

      return (
        <>
          <div className="post__intro">
            <h2 className="post__intro__title">{post.name}</h2>
            <small className="post__intro__date"></small>
            <p className="post__intro__desc">{post.desc}</p>
  
           
          </div>
  
          <div className="post__body">
            
          </div>
        </>
      )
    }

    return (
        <div className="post">
    
          {renderPost()}
        </div>
      )
    }