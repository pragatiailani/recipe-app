import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  async function onSearch(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        console.log(data);
        setRecipes(data.data.recipes);
        console.log(recipes);
        setLoading(false);
        setSearch("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearch("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{ search, loading, recipes, setSearch, onSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
