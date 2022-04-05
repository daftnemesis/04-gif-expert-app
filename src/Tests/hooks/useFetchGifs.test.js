import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {

  test('debe de retornar el estado inicial', () => {

    const {result} = renderHook( () => useFetchGifs( 'one punch') );
    const { data, loading } = result.current
    //const {data: images, loading} = useFetchGifs( 'one punch' )

    // console.log(data, loading)

    expect(data).toEqual([])
    expect(loading).toBe(true)
    
  });
  
});