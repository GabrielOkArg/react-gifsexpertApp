import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"



describe('Pruebas en <AddCategori/>', () => {

    const setCategories=()=>{}
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    test('Debe mostrar correctamente', () => {        
        expect(wrapper).toMatchSnapshot()
    });
    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value ='Hola Mundo';
        //para simular el onChange, necesita tambien tener el evento e y su target y value
        input.simulate('Change',{target:{value:value}});
       expect( wrapper.find('p').text().trim()).toBe(value)
    })    
})