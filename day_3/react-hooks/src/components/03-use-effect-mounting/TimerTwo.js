import { useState, useEffect } from 'react';

function TimerTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect - Mounting (apareceu na tela)');

    const intervalId = setInterval(() => {
      setCount((prevState) => prevState + 1 );
    }, 1000)
  }, []);

  return (
    <div className="Timer">
      <h2>Timer 2</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default TimerTwo;