export const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DYYqAib4o9HU8WHhZIGX5HiZlbDWumdW&q=${ encodeURI(category) }&limit=10`;
    // const url = 'https://api.giphy.com/v1/gifs/search?api_key=DYYqAib4o9HU8WHhZIGX5HiZlbDWumdW&q=Pokemon&limit=10'; // Se cambió el API_KEY
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id:     img.id,
            title:  img.title,
            url:    img.images?.downsized_medium.url
        }
    })

    return gifs;
}