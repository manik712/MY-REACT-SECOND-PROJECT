/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";


const Meal = ({meal}) => {
   const {strArea, strCategory,strMealThumb ,idMeal  } = meal;
   const navigate = useNavigate();

   const handleClick = () =>{
      navigate(`/Meal/${idMeal}`)
   }
                            //  console.log(meal);    
  return (
    <div>
        <h1>STRAREA:{strArea}</h1>
        <h2>STRCATEGORY:{strCategory}</h2>
        <img className="w-72 rounded-xl"  src={strMealThumb} alt="" />


        {/* <Link to={`/Meal/${idMeal}`}><button className="hover:bg-teal-600 mt-5 py-2 px-6 text-rose-700 rounded-xl">MEALDETAILS</button></Link>  */}


        
        <button  onClick={handleClick}  className="hover:bg-teal-600 mt-5 py-2 px-6 text-rose-700 rounded-xl">MEALDETAILS</button>
    </div>
  );
};

export default Meal;