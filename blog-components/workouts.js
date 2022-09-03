import { useState, useEffect } from 'react'
import sanityClient from '../client.js'

export default function Workouts() {
  const [workoutData, setWorkout] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'workout' ] {
        title,
        category,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        },
        description,
        skill,
        link,
        tags
    }
    `
      )
      .then((data) => setWorkout(data))
      .catch((err) => console.error(err))
  })

  return (
    <main>
      <section>
        <h1 className='posts-page-title'>Pizza Recipes!</h1>
        <h2 className='posts-page-tagline'>My Posts Tagline</h2>
        <div className='posts-grid'>
          {workoutData &&
            workoutData.map((workout, index) => (
              <article>
                <span className='posts-page__card-img-container' key={index}>
                  <img
                    src={workout.mainImage.asset.url}
                    alt={workout.mainImage.alt}
                    className='posts-page__card-img'
                  />
                  <span className='posts-page__card-title-container'>
                    {/* <h3 className='posts-page__card-title'>{post.title}</h3> */}
                  </span>
                </span>
                <h3>
                  <a
                    href={workout.link}
                    alt={workout.title}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {workout.title}
                  </a>
                </h3>
                <span>
                  <strong>Skill:</strong>
                  {''} {workout.skill}
                </span>
                <span role='img' aria-label='mochi'>
                  🧋
                </span>
              </article>
            ))}
        </div>
      </section>
    </main>
  )
}
