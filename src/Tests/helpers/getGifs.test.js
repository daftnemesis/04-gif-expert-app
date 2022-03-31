import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {

  test('debe de traer 10 elementos', async() => {

    const gifs = await getGifs('one punch')
    expect(gifs.length).toBe(10)
    
  });

  test('debe de recibir un argumento', async() => {

    const gifs = await getGifs('')
    expect(gifs.length).toBe(0)
    
  });
  
});