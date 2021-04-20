import { useState } from 'react';
export default function Button(props) {
  // estado é um informacao que podemos armazenar no component para que toda que vez que o usuario execute uma ação no compoenente o valor seja alterado
  // usa-se [] pois esta desestruturando o return em um array [estado, alterarEstado()]
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      {/* <button>{props.title}</button> */}
      <span>{counter}</span>
      <button onClick={increment}>{props.children}</button>
      <br />
    </>
  );
}