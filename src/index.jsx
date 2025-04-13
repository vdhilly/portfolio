import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/index.scss";
import Header from "./components/Header"
import Home from "./pages/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);

