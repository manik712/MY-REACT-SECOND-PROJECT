import { useLoaderData } from "react-router-dom";


const MealDetails = () => {
  const meal = useLoaderData();
  console.log(meal.meals
    );
  const {idMeal,strMeal} = meal.meals

  return (
    <div>
       <h2>length:{meal.meals.length}</h2>
       {/* <p>{strMeal}</p> */}
    </div>
  );
};

export default MealDetails;