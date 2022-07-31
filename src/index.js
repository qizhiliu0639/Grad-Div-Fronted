import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import './index.css';
import App from "./App/App";


ReactDOM.render(
  <Router>
      <Routes>
          {/* Main component for the app */}
          <Route path="/" element={<App />} />
      </Routes>
  </Router>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

