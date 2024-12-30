import React from 'react'

export default function IngredientsList(props) {
    const ingredientListItems = props.ingredients.map((item) => {
        return <li key={item}> {item}</li>;
      });
  return (
    <div>
      <section className="ingredients-container">
              <h2>Ingredients on hand:</h2>
              <ul className="ingredients-list">{ingredientListItems}</ul>
              {props.ingredients.length >3 && <div className="get-recipe-container">
                <h3>Ready for a recipe ?</h3>
                <p>Generate a recipe from your list of ingredients</p>
                <button onClick={props.handleRecipeClick}>Get a recipe</button>
              </div>}
            </section>
    </div>
  )
}
