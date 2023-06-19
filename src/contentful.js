const client = require('contentful').createClient({
  space: 'h8p5u4i8urpb',
  accessToken: 'uv5OoGVAGhvdwJkSVDPHjUqJkNru_3yqL3vRurx06qI'
})

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'wisata'
    })
    .then(response => response.items)



export { getBlogPosts, getSinglePost }