import "./styles/index.scss";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const updated = { ...elvenShieldRecipe, updatedItem: 2 };

console.log(elvenShieldRecipe);
