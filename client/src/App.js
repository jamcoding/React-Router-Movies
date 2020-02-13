import React, { useState } from 'react';
import { Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movies from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList} />
      <Route path="/movie/:id" component={Movies} />  
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
