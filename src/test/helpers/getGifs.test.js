import React from 'react';
import { shallow } from 'enzyme'
import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con GetGifs', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Roblox');
        expect(gifs.length).toBe(10);
    })

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })

})