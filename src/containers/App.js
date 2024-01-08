import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { useSelector, useDispatch } from 'react-redux';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions';




function App({store}){
  

  const [searchResults] = useState([]);

  const searchField = useSelector(state => state.searchRobots.searchField)
  const robots = useSelector(state => state.requestRobots.robots)
  const dispatch = useDispatch()
  
  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value ))
  }


    
    useEffect(() =>  {
      dispatch(requestRobots());
  }, [dispatch])
      


 
  const newRobot = searchResults;


    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} /> <CardList robots={newRobot}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }


export default (App);