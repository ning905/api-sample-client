const apiUrl = `http://localhost:3030`
const client = {
  get: async (path) => {
    const res = await fetch(`${apiUrl}${path}`)
    const data = await res.json()
    return data
  },

  post: async (path, opts) => {
    const res = await fetch(`${apiUrl}${path}`, opts)
    const data = await res.json()
    return data
  },

  delete: async (path, opts) => {
    const res = await fetch(`${apiUrl}${path}`, opts)
    const data = await res.json()
    return data
  },

  put: async (path, opts) => {
    const res = await fetch(`${apiUrl}${path}`, opts)
    const data = await res.json()
    return data
  }
}


export default client
