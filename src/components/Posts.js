import { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
        title, 
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
      )
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <main className='posts-page-main'>
      <section className='posts-page-inner'>
        <div className='section'>
          <h1 className='posts-page-title'>
            <span className='post-title-color'>New Recipes!</span>
          </h1>
        </div>
        <div className='posts-grid section'>
          {posts &&
            posts.map((post, index) => (
              <article key={post.slug.current}>
                <Link to={`${post.slug.current}`}>
                  <span className='posts-page__card-img-container' key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='posts-page__card-img'
                    />
                    <span className='posts-page__card-title-container'>
                      <h3 className='posts-page__card-title'>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Posts
