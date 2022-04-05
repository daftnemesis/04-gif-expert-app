import { shallow } from 'enzyme';
import { GifExpertApp } from './GifExpertApp';


describe('Haciendo pruebas en el componente principal', () => { 

  test('haciendo match con el snapshot', () => {

    const wrapper = shallow( <GifExpertApp /> );

    expect( wrapper ).toMatchSnapshot();
    
  });

});