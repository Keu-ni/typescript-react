import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import { SampleProvider } from './SampleContext';
import ReducerSample from './ReducerSample';

function App() {

  const onClick = (name: string) => {
    console.log(name);
  }

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name='react' onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
