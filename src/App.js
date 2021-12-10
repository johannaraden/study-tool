import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import './App.css';
import Game from './reducers/reducer.js'
import StartPage from './pages/startPage';
import GamePage from './pages/gamePage';
import SummaryPage from './pages/summaryPage';

const reducer = combineReducers({
  Game: Game.reducer
})

// const store = configureStore({ reducer })
const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<StartPage/>} />
          <Route path='/game' element={<GamePage />} />
          <Route path='summary' element={<SummaryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
