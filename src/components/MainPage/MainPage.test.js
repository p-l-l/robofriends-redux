import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';



describe('MainPage component', () => {

    let wrapper;

    // Before each test, we run this to load the Component...
    // Note : This is not efficient here, but we use beforeEach anyway to show what it can do.
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        }
        wrapper = shallow(<MainPage {...mockProps}/>)
    })

    // After each test, we unmount the Component to make sure tests remains independant from one another.
    afterEach(() => {
        wrapper.unmount();
    });

    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('filters robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'john',
            isPending: false
        }
        
        const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    
        expect(wrapper2.instance().filteredRobots()).toEqual([{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }]);
    })

    it('filters robots correctly 2', () => {
        const mockProps3 = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'a',
            isPending: false
        }
        const filteredRobots = []
        const wrapper3 = shallow(<MainPage {...mockProps3}/>);
    
        expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
    })

});