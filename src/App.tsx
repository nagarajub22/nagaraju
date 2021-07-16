import { useEffect, useState } from 'react';
import { delay, of } from 'rxjs';
import './App.css';
import { IntroPage } from './pages/intro/intro';

function App() {

  const [showIntro, setIntro] = useState(true);

  useEffect(() => {
    let intro$ = of(null).pipe(delay(4*1000)).subscribe(() => {
      setIntro(false);
    });

    return () => {
      intro$.unsubscribe();
    };
  }, []);

  
  if(showIntro) {
    return <IntroPage/>;
  } else {
    return <h1>Welcome</h1>;
  }
}

export default App;
