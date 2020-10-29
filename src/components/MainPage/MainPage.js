import React, { Component } from 'react';

import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
      return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    const { robots, onSearchChange, isPending } = this.props;

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filteredRobots(robots)} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
