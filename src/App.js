import React from 'react';
import './App.css';
import Agregar from './components/Agregar';
import Titulo from './components/Titulo';

const App = () => {
  return (
    <div className="app">
      <Titulo/>
      <Agregar />
    </div>
  );
};

export default App;



// import React from 'react';
// import Titulo from './components/Titulo';
// import Agregar from './components/Agregar';

// const App = () => {
//   return (
//     <div className="app">
//       <Titulo />
//       <br/>
//       <Agregar/>
//     </div>
//   );
// };

// export default App;