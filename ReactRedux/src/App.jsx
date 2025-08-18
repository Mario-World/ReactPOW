import React from 'react'
import { MovieInput } from "./components/MovieInput";
import { MovieList } from "./components/MovieList";
import './App.css';

const App = () => {
  return (
    <div>
        {" "}
      
        <MovieInput />
        <MovieList />
    </div>
  );
}

export default App;