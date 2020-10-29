import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

describe('Card component', () => {

    it('Renders correctly', () => {
        expect(shallow(<Card/>)).toMatchSnapshot();
    });

});