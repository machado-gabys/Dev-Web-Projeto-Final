const axios = require('axios')

export async function getFilm(title) {
    title = title.split(" ").join("+")
    const movie = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=e2f64982`)
    .then((result) => {
        return result.data
    })
    .catch((error) => {
        console.error(error)
        return null
    })

    return movie
}