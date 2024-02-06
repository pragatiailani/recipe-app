import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function Home() {
  const { recipes, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0
        ? recipes.map((recipe) => (
            <div key={recipe.id}>
              <img
                className="w-[20vh] h-[20vh]"
                src={recipe.image_url}
                alt={recipe.title}
              />
              {recipe.title}
            </div>
          ))
        : "No recipes found"}
    </div>
  );
}

export default Home;
