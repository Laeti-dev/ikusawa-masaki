var access_token = config.access_token
var user_id = config.user_id
const instaUrl = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,timestamp&access_token=${access_token}`


// const datas = async(url) => {
//   await fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`)
//     };
//     return response.json()
//   }).then((data) => {
//     for (let i = 0; i < data.data.length; i++) {
//         items.push(data.data[i]);
//       }
//     return(items)
//   })
// }


const datas = async() => {
  let items = []
  await fetch(instaUrl)
  .then(response => response.json())
  .then((data) => {
    for(let i=0; i<data.data.length; i++){
      items.push(data.data[i])
      // console.log(items)
      // return items
    }
  })
  return items
}
values = datas();
array = []

values.then(value=>{
  for(let i=0; i<value.length; i++){
      array.push(value[i])
      }})

console.log(array)
// const datas = async() => {
//   await fetch(instaUrl)
//   .then(response => response.json())
//   .then(data=> console.log(data.data))
//   .catch ((err) => console.log(err))
// }



// items.map(item => {
//   console.log(item)
// })
