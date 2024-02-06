import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [search, setSearch] = useState("");

  return <GlobalContext.Provider value={{search, setSearch}}>{children}</GlobalContext.Provider>;
}
