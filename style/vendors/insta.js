async () => {
    const res = await fetch('https://graph.instagram.com/{user-id}?fields=id,username&access_token={access-token}')
    const answer = await res.json()
    console.log(answer)
}
