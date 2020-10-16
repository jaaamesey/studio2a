import React from 'react';
import axios from 'axios';
import logo from '../../res/img/logo.svg';
import './test.css';

export const TestPage: React.FC = () => {
  const [result, setResult] = React.useState('');
  React.useEffect(() => {
    axios
      .get('http://127.0.0.1:9000/memes')
      .then((result) => {
		console.log(result);
        setResult('Connected to server successfully.');
      })
      .catch((err) => {
        setResult(err.toString());
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/pages/test.tsx</code> and save to reload.
          (plz)
        </p>
        <p>Result from server: {result}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
