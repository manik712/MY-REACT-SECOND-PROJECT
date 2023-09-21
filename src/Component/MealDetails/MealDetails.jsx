import { useLoaderData, useNavigate } from "react-router-dom";


const MealDetails = () => {
  const navigate = useNavigate();
  const meal = useLoaderData();
  // console.log(meal.meals[0]);
    



  const {idMeal,strArea,strCategory,strIngredient1,strIngredient2,strIngredient3,strMeal,strMealThumb,strInstructions
  } = meal.meals[0]
   
  const handleGoBack = () =>{
     navigate(-1)

  }
  

  return (
    <div>
       <h1>IDMEAL:{idMeal}</h1>
       <h2>STRAREA:{strArea}</h2>
       <p>STRCATEGORY:{strCategory}</p>
       <h3>STRINGREDIENT1:{strIngredient1}</h3>
       <p>STRINGREDIENT2:{strIngredient2}</p>
       <h5>STRINGREDIENT2:{strIngredient3}</h5>
       <h3>STRMEAL:{strMeal}</h3>
       <img className="w-64 mx-auto" src={strMealThumb} alt="" />
       <h5>STRINSTRUCTIONS:{strInstructions}</h5>
        <button onClick={handleGoBack} className="py-2 bg-zinc-950 px-6 rounded-lg text-white font-bold hover:bg-slate-700 mt-4" >GO BACK</button>
    

    </div>
  );
};

export default MealDetails;