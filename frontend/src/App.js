// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LoginPage from './components/UserPage/LoginPage';
import SignupPage from './components/UserPage/SignupPage';

function App() {
  return (
    <Suspense fallback={(<div>...</div>)}>
      <Router>
        <NavBar />
        <div className="App">
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;