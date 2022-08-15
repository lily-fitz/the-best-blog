import { useState, useEffect } from 'react'
import sanityClient from '../client.js'
// import aboutBG from '../imgs/aboutBG.png'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch((err) => console.error(err))
  }, [])

  if (!author) return <div className='container'>Loading...</div>

  return (
    <main className='about-main container section'>
      {/* <img src={aboutBG} alt='' className='about-bg_img' /> */}
      <section className='about-section'>
        <div>
          <h1 className='author-name'>
            Hi! I'm {''}
            {author.name}
          </h1>
          <div className='author-content'>
            <BlockContent blocks={author.bio} projectId='c0frex4s' dataset='production' />
          </div>
        </div>
        <div>
          <img
            src={urlFor(author.authorImage).url()}
            alt='Lily'
            className='about-author_img'
          />
        </div>
      </section>
    </main>
  )
}
