import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login, Inicio } from './components';


function App() {
  return (
    <>
      <GlobalStyle />
      <Inicio />
    </>
  );
}

export default App;
