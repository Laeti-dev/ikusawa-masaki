var access_token = config.access_token
var user_id = config.user_id
const instaUrl = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,timestamp&access_token=${access_token}`
let items = []

// fetch(instaUrl)
//   .then(response => {
//     // indicates whether the response is successful (status code 200-299) or not
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`)
//     }
//     return response.json()
//   }).then(data => {
//     return data.data[0]
//   })

const datas = async(url) => {
  await fetch(url)
  .then((response) => {
    return response.json()
  }).then((data) => {
    // console.log(data.data)
    items.push(data.data)
    return items
  })
}
// console.log(items)
const elem = datas(instaUrl)

console.log(items)
// items.map(item => {
//   console.log(item)
// })
