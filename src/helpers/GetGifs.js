

export const getGifs = async (category) => {

    // const url = `https://api.giphy.com/v1/gifs/translate?api_key=LgR77FKViynUpiVvVfcLTsUmM8EFdb0r&s=${category}&limit=10`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LgR77FKViynUpiVvVfcLTsUmM8EFdb0r&q=${category}&limit=10`

    // const url = `https://picsum.photos/v2/list?page=2&limit=100`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title,
    }));

    // url: img.images.downsized_medium.url,
    // console.log(gifs);
    return gifs;



}