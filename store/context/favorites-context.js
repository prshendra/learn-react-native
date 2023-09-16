import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(mealId) {
    setFavorites((favorites) => [mealId, ...favorites]);
  }
  function removeFavorite(mealId) {
    setFavorites((favorites) => favorites.filter((id) => id !== mealId));
  }

  const value = {
    ids: favorites,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
