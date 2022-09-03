import { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [recipeData, setRecipe] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post' && "Chocolate" in categories[]->title]{
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
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <main className='posts-page-main'>
      <section className='posts-page-inner'>
        <h1 className='posts-page-title'>Snack Recipes!</h1>
        <h2 className='posts-page-tagline'>My Posts Tagline</h2>
        <div className='posts-grid'>
          {recipeData &&
            recipeData.map((post, index) => (
              <article>
                <Link
                  to={'/posts/' + post.slug.current}
                  key={post.slug.current}
                >
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

export default Recipes
