import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';

describe('Pruebas en GifGrid', () => {

  test('debe de coincidir el snapshot', () => {

    const wrapper = shallow(<GifGrid />);

    expect( wrapper ).toMatchSnapshot();
    
  });
  
});