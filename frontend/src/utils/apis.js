// src/utils/apis.js

const API_BASE_URL = import.meta.env.VITE_API_URL;

const getAccessToken = () => {
  const sessionStorageKeys = Object.keys(sessionStorage);
  const oidcKey = sessionStorageKeys.find(key =>
    key.startsWith("oidc.user:https://cognito-idp.")
  );
  const oidcContext = JSON.parse(sessionStorage.getItem(oidcKey) || "{}");
  return oidcContext?.access_token;
};

// --- COFFEE CRUD (unchanged) ---
export const fetchCoffees = async () => {
  const res = await fetch(`${API_BASE_URL}/coffee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  return res.json();
};

export const getCoffee = async (id) => {
  const res = await fetch(`${API_BASE_URL}/coffee/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  return res.json();
};

export const createCoffee = async (coffee) => {
  const res = await fetch(`${API_BASE_URL}/coffee`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify(coffee),
  });
  return res.json();
};

export const updateCoffee = async (id, coffee) => {
  const res = await fetch(`${API_BASE_URL}/coffee/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify(coffee),
  });
  return res.json();
};

export const deleteCoffee = async (id) => {
  const res = await fetch(`${API_BASE_URL}/coffee/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
  return res.json();
};

export const deleteAccessToken = () => {
  const sessionStorageKeys = Object.keys(sessionStorage);
  const oidcKey = sessionStorageKeys.find(key =>
    key.startsWith("oidc.user:https://cognito-idp.")
  );
  if (oidcKey) sessionStorage.removeItem(oidcKey);
};

// --- MOVIE CRUD wrappers around Coffee functions ---
export const fetchMovies = async () => {
  const data = await fetchCoffees();
  const items = data.Items || [];
  return items.map(c => ({
    movieId:  c.coffeeId,
    title:    c.name,
    rating:   c.price,
    released: c.available,
  }));
};

export const getMovie = async (id) => {
  const data = await getCoffee(id);
  const c = data.Item || {};
  return {
    movieId:  c.coffeeId,
    title:    c.name,
    rating:   c.price,
    released: c.available,
  };
};

export const createMovie = async ({ movieId, title, rating, released }) => {
  // map to coffee shape
  return createCoffee({
    coffeeId:  movieId,
    name:      title,
    price:     Number(rating),
    available: released,
  });
};

export const updateMovie = async (id, { movieId, title, rating, released }) => {
  return updateCoffee(id, {
    coffeeId:  movieId,
    name:      title,
    price:     Number(rating),
    available: released,
  });
};

export const deleteMovie = async (id) => {
  return deleteCoffee(id);
};
