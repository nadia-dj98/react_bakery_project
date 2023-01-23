import Recipe from "./Recipe";

const RecipeList = ({recipes}) => {
    const recipeComponents = recipes.map((recipe, index) => {
        return (
            <Recipe
                recipe = {recipe}
                key = {index}
                />
            
                
        )


            
    })

    return (
        <>
            {recipeComponents}
        </>
    );
}

export default RecipeList;