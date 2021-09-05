export default function(context, inject) {
  const appId = 'Q9SZR7E59V'
  const apiKey = '6f0fd47d40b9be84f29aba894913bf03'

  inject('dataApi', {
    getHome
  })

  async function getHome(homeId) {
    const response = await fetch(
      `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
      {
        headers: {
          'X-Algolia-API-Key': apiKey,
          'X-Algolia-Application-Id': appId
        }
      }
    )
    const json = await response.json()
    return json
  }
}
