import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import './App.css';
import Game from './reducers/reducer.js'
import StartPage from './pages/startPage';
import GamePage from './pages/gamePage';
import SummaryPage from './pages/summaryPage';

const reducer = combineReducers({
  Game: Game.reducer
})

const store = configureStore({ reducer })

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
