import React from 'react';

const App = () => {
  return (
    <>
      <SayHi name={"Choco"} />
      <SayHi name={"Vanilla"} />
    </>
  );
};

interface SayHiProps {
  name: string;
}

const SayHi = (props: SayHiProps) => {
  return (
    <div>Hi, I'm {props.name}!</div>
  );
}

export default App;