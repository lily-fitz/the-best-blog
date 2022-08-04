import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
    title,
    _id,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },alt
    },
    body,
    'authorName': author->name,
    'authorImage': author->image
  }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.error(err))
  }, [slug])

  if (!singlePost) return <div>Loading....</div>

  return (
    <main className=' single-post-section'>
      <article className='section post-article'>
        <div className='post-share'>socials</div>
        <div className='the-post'>
          <header>
            <h1 className='post-title'>{singlePost.title}</h1>
            <div className='post-author'>
              <img
                src={urlFor(singlePost.authorImage).url()}
                alt={singlePost.authorName}
              />
              <p>{singlePost.authorName}</p>
            </div>

            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              style={{ height: '400px' }}
              className='post-img'
            />
          </header>
          <div className='post-content'>
            <BlockContent
              blocks={singlePost.body}
              projectId='c0frex4s'
              dataset='production'
            />
          </div>
        </div>
      </article>
    </main>
  )
}
