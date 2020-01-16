import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [message, setMessage] =useState('')

  useEffect(() => {
    fetch(`/api/message?name=colin`)
      .then(res => res.json())
      .then(message => setMessage(message))
      .catch(error => {
        debugger
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        { message }
      </header>
    </div>
  );
}

export default App;
