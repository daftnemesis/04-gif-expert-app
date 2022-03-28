// Metodo para usar la API de giphy, usando un parametro predeterminado
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=jnfYUZIxm7WR1pG7mWAcxrSQ7pGkJv5h`; // url de la peticion
  const resp = await fetch(url); //se usa el fetch
  const {data} = await resp.json(); // se pasa a formato json para poder trabajar con el

  // se usa el map para llebar la peticion a un arreglo y solo con las propiedades que se necesitan
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  })
  return gifs;
}
  