import React from "react";
import Recipes from "./Recipes";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
