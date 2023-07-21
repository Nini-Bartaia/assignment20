import React from 'react';
import { useParams } from 'react-router-dom';

const Fact = () => {
  const { factId } = useParams();

  const facts = {
    1: 'Fact 1',
    2: 'Fact 2',
     
  };

  const fact = facts[factId];

  return (
    <div>
      {fact ? (
        <div>
          <h1>Fact {factId}</h1>
          <p>{fact}</p>
        </div>
      ) : (
        <h1>Fact not found</h1>
      )}
    </div>
  );
};

export default Fact;