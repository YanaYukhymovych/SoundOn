import React from 'react';
import './styles/index.scss'
import SearchForm from './components/SearchForm/SearchForm'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <header>
        <SearchForm />
        <p>Log in</p>
        {/*<Authorization />*/}
      </header>

    </div>
  );
}

export default App;
