import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header"
import Home from "./pages/Home"
import Error from "./pages/Error"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);

