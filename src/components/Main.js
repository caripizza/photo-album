import React from 'react';

function Main() {
  const listOfThings = ['one', 'two', 'three'].map(thing => {
    return <li key={thing}>{thing}</li>;
  });
  return (
    <main>
      <ul>{listOfThings}</ul>
    </main>
  );
}

export default Main;