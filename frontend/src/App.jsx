import { useEffect, useState } from "react";
import "./App.css";

// App.js

import { useAuth } from "react-oidc-context";
import Home from "./home";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "51vc64c2ul4cd51qh8ofsvbbn";
    const logoutUri = "https://www.free-project.online";
    const cognitoDomain = "https://us-east-1k7uxugcjz.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => auth.removeUser()}>Sign out</button>
        <Home />
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;