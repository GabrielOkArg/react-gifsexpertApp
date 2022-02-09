



export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=m7STlPPJaJ298Rx1OvKXpY4XhoMem7Xr`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el singo de pregunta es por si no trae la informacion es una pregunta
        }
    })
    return gif;
}