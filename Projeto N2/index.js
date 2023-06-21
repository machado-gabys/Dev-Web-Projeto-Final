const axios = require('axios')

export async function getUser(number) {
    const user = await axios.get(`https://api.github.com/users/${number}`)
    .then((result) => {
        return result.data
    })
    .catch((error) => {
        console.error(error)
        return null
    })

    return user
}