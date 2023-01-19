import RecipeList from "../components/RecipeList";

const RecipeContainer = () => {

    const recipes = [
        {
            cakeName : "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk",
                "jam"
            ],
            price : 5,
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
   	        ingredients: [
   		        "eggs",
      	        "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
  	        ],
  	        price: 2,
  	        rating: 3
        },
        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5
        }
    ]

    return (
        <>
        <h1>Recipes</h1>
        <RecipeList/>
        
        </>
    )



}
export default RecipeContainer;