import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions/actions';

import MainPage from '../components/MainPage/MainPage';

import './App.css';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {

}

interface IAppState {
  robots: Array<IRobot>;
  searchfield: string;
}

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state:IAppState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = (dispatch:Function) => {
  return {
    onSearchChange: (event:any) => dispatch(setSearchField(event.target.value)), //Note : dispatch is related to thunks
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component<IAppProps, IAppState> {
  render() {
    return <MainPage {...this.props}/>
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
