import { useState, useEffect } from 'react';

function TimerThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect - Mounting (apareceu na tela)');

    const intervalId = setInterval(() => {
      setCount((prevState) => prevState + 1 );
    }, 1000)

    return () => {
      console.log('useEffect - Unmounting (removi da tela)');
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="Timer">
      <h2>Timer 3</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default TimerThree;