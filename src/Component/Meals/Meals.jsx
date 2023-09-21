import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData();

// console.log(meals.meals);


  return (
    <div>
         <h3>all meals:{meals.meals.length}</h3>
         <div className=" grid grid-cols-3 gap-15 items-center">
          {
           meals.meals.map(meal => <Meal key={meal.id}  meal={meal}></Meal>)
          }
         </div>
    </div>
  );
};

export default Meals;