// src/main.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import NavBar from './NavBar.jsx';
import App from './App.jsx';
import AddMovieForm from './AddMovieForm.jsx';
import ItemDetails from './ItemDetails.jsx';
import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
  authority:     'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_k7UXUGCJZ',
  client_id:     '51vc64c2ul4cd51qh8ofsvbbn',
  redirect_uri:  'https://www.free-project.online',
  response_type: 'code',
  scope:         'email openid phone',
};

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig}>
    <Router>
      {/* Top-level navigation */}
      <NavBar />

      {/* Your app’s pages */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddMovieForm />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
);
