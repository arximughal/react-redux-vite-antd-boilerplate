import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import './App.css';
import ANTD_THEME from './theme/antd-theme';
import routes from './routes';

function App() {
  const renderRoutes = () => routes.map((route) => (
    <Route
      key={`_${route.path}`}
      path={route.path}
      element={route.element}
    />
  ));

  return (
    <ConfigProvider
      theme={ANTD_THEME}
    >
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
