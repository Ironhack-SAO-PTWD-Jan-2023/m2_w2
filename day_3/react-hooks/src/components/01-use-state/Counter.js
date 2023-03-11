import { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);
  // const [valorDoState, funçãoDeAtualizarOState] = useState(valorInicial);

  const decrease = () => {
    setCount(count - 1); // CERTO!
    // count -= 1; // ERRADO!
  }

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>Você clicou {count} vezes.</p>

      <button onClick={decrease}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter;