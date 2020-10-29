import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants';

//Added redux-mock-store to handle thunks and async in tests...
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'wooo';
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: text
        };
        
        //When we call setSearchField with a specified text, we expect it to give us
        //an object representing an action (has a type and a payload).
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
})


describe('requestRobots', () => {

    let store, mockStore;

    beforeEach(()=>{
        mockStore = configureMockStore([thunkMiddleware])
        store = mockStore()
    })

    // it('handles successfull requesting of robots API, should create a pending then a success action', () => {
    //     expect.assertions(3); //Making sure the async doesn't fool our expects!




    //     expect(action[0]).toEqual(expectedAction); //Note we did console.log(action) to realize it was returning an array that contains our action...
    // })

    //it('handles unsuccessfull requesting of robots API, should create a failed action', async () => {
        // expect.assertions(2);  //Making sure the async doesn't fool our expects!
        
        // const wrongApiLink = "https://linkforfailedrequest"
        // await store.dispatch(actions.requestRobots(wrongApiLink))
        // const storeActions = await store.getActions()
 
        // console.log(storeActions)

        // const expectedPendingAction = {
        //     type: REQUEST_ROBOTS_PENDING
        // };
        // const expectedFailedAction = {
        //     type: REQUEST_ROBOTS_FAILED,
        //     error: 'whoops it failed!'
        // };

        // expect(storeActions[0]).toEqual(expectedPendingAction);

        // console.log(storeActions)

        // expect(storeActions[1]).toEqual(expectedFailedAction);

        // console.log(storeActions)
    //})
})