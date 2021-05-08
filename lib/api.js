async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getFeaturedDesigns() {
  const data = fetchAPI(`
  {
    designs(sort: "id:DESC", limit: 4){
      id
      Title
      Slug
      Tag
      created_at
      Image {
       url
      }
    
    }
  }
    `)
  return data
}

export async function getAllDesigns() {
  const data = fetchAPI(`
  {
    designs(sort: "id:DESC") {
      id
      Title
      Tag
      created_at
      Image {
        url
      }
    }
  }
  
    `)
  return data
}
