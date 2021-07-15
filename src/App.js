import { useEffect, useState } from 'react';
import './App.css';
import { IntroPage } from './pages/intro/intro';

function App() {

  const [showIntro, setIntro] = useState(true);

  useEffect(() => {
    let introTimer = setTimeout(() => setIntro(false), 4 * 1000)

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

//   if(showIntro) {
//     return <IntroPage/>;
//   } else {
//     return '';
//   }
  
  return <IntroPage/>;
}

export default App;
