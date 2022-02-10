import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';




describe('Pruebe de GitGifItem', () => {

    const url = 'https://media2.giphy.com/media/FRkBbAdRf2jTfahZaA/giphy.gif?cid=22b511629gb4qvrh6sj1zig5w834he0677hd19mn0pmmyg8s&rid=giphy.gif&ct=g';
    const title = 'Dragon Ball GIF by TOEI Animation UK';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('debe mostrar un item correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un <p> </p> con el title', () => {
      const p = wrapper.find('p');
      expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen igual al rul y alt de los props', () => {
      const img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
      
    });
    
    test('Debe de tener animate__fadein', () => {
      const div = wrapper.find('div');
      //console.log(div.props().className);
      expect(div.prop('className')).toContain('animate__fadeInDown')
    });
    

});
