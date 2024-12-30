import React from 'react'
import './Main.css'
export default function Main() {
    const ingredients =["Paneer","Chilli","Aloo"];
    function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredients");
        console.log(newIngredient);
    }

    const ingredientListItems = ingredients.map((item)=>{
        return <li key={item}> {item}</li>
    });
  return (
    <div className='main'>
      <form className='form' onSubmit={handleSubmit}>

        <input type="text" placeholder='Add Ingredients' aria-label='Add Ingredients' name='ingredients' />
        <button>+ Add Ingredients</button>
      </form>
      <ul>
        {ingredientListItems}
      </ul>
    </div>
  )
}
