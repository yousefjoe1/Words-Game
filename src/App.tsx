import React, { useState } from 'react';
import Boxs from './comp/Boxs';

const App:React.FC = () => {
  

  return (
    <div className='app'>
      <h1 className='text-center text-lg m-10'>Words Game</h1>
      <Boxs />
    </div>
  );
}

export default App;
