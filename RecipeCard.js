import React from "react";

function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">
                    {recipe.description ? recipe.description : "No description available."}
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    View Recipe
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;


// import React from "react";
// import RecipeCard from "./RecipeCard";

// const recipe = {
//     image: "https://via.placeholder.com/300x200",
//     title: "Delicious Pancakes",
//     description: "A quick and easy recipe for fluffy pancakes.",
// };

// function App() {
//     return (
//         <div className="p-6 flex justify-center">
//             <RecipeCard recipe={recipe} />
//         </div>
//     );
// }

// export default App;
