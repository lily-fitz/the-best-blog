import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'c0frex4s',
  dataset: 'production',
  apiVersion: '2022-02-01',
  token: '',
  useCdn: true,
})
