import React, { useState } from "react";
import "./Main.css";
import IngredientsList from "./IngredientsList.jsx";
import Ingredients from "./Ingredients";
export default function Main() {
    const[recipeShown,setRecipeShown]= useState(false);
    
  const [ingredients, setIngredients] = useState(["Paneer","Onion","Chilli","Turmeric","Potato","Cumin"]);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredients");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function handleRecipeClick(){
    setRecipeShown(!recipeShown);
  }
 
  return (
    <div className="main">
      <form action={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Add Ingredients"
          aria-label="Add Ingredients"
          name="ingredients"
        />
        <button>+ Add Ingredients</button>
      </form>
      {ingredients.length >0 && 
      <IngredientsList handleRecipeClick={handleRecipeClick}
      ingredients={ingredients}/>}
            {recipeShown && <Ingredients/>}
    </div>
  );
}

// onSubmit={handleSubmit}
// function handleSubmit(event){
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const newIngredient = formData.get("ingredients");
//     setIngredients(prevIngredients=>[...prevIngredients, newIngredient]);
//     event.currentTarget.reset();
// }
