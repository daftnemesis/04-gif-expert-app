import React from 'react'
import {shallow} from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => { 

  const url = 'https://google.com'
  const title = 'hola mundo'

  const wrapper = shallow(<GifGridItem url={url} title={title}/>)


  test('debe de mostrar el componente correctamente', () => {
    

    expect(wrapper).toMatchSnapshot()

  });

  test('deve de tener un parrafo con el title', () => {

    const p = wrapper.find('p')

    expect(p.text().trim()).toBe(title)
    
  });

  test('debe de tener la imagen ifual al url y alt de los props', () => {

    const img = wrapper.find('img')

    // console.log(img.props('src'))

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
    
  });

  test('deve de tener animate__fadeIn', () => {

    const div = wrapper.find('div')

    expect(div.hasClass('animate__fadeIn')).toBe(true)
    
  });

})