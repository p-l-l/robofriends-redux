import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants';

import * as reducers from './reducers';

describe('searchRobots', () => {

    const initialStateSearch = {
        searchField: ''
    }

    it('should return the initial state', () => {
        //Because we passing undefined, it will take its default value (initialState in the reducer.js), and we pass no action.
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    })

    it('should handle CHANGE_SEARCHFIELD action', () => {
        //Because we passing undefined, it will take its default value, and we pass no action.
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCHFIELD,
            payload: 'abc'
        })).toEqual({ 
            searchField: 'abc'
        });
    })

})

describe('searchRobots', () => {

    const initialStateRobots = {
        robots: [],
        isPending: false
    }

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    })

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true //we called action REQUEST_ROBOTS_PENDING so we expect it to be pending...
        })
    })

    //Reminder : The action that dispatch the REQUEST_ROBOTS_SUCCESS will also give the request data as the payload...
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            //This object represent a dispatched action, so we are simulating
            //that a fetch dispatched a REQUEST_ROBOTS_SUCCESS with this payload (data from the fetch)
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({ 
            //We expect the reducer to return the robots prop, setted with the payload.
            //The robots prop is what the reducer would assign to the state.
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false //Call succeeded, so we expect pending to be now back to false.
        })
    })

    it('should handle REQUEST_ROBOTS_FAILED action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'Nooooooo the request FAILED!!!'
        })).toEqual({ 
            error: 'Nooooooo the request FAILED!!!',
            robots: [], //Call failed, we expect no robots returned.
            isPending: false
        })
    })

})