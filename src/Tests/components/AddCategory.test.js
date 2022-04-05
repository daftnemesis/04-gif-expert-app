import React from 'react'
import {shallow} from 'enzyme'
import {AddCategory} from '../../components/AddCategory'

describe('pruebas en AddCategory', () => { 

  const wrapper = shallow(<AddCategory />);

  test('debe de mostrarse correctamente', () => {


    expect(wrapper).toMatchSnapshot()

  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'hola mundo'

    input.simulate('change', { target: { value } });

    expect( wrapper.find('p').text().trim() ).toBe( value )
  })
})