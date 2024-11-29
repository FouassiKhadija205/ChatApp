import React, { useState } from "react";
import RecipeCard from "./RecipeCard";

const APP_KEY = "e73a8f7941f943a98392e0a8b3e4a5d6"; // Your API Key

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [minCalories, setMinCalories] = useState("");
    const [maxCalories, setMaxCalories] = useState("");
    const [category, setCategory] = useState("");

    const fetchRecipes = async () => {
        if (query === "") return;

        let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}`;

        // Add calorie filters if specified
        if (minCalories) url += `&minCalories=${minCalories}`;
        if (maxCalories) url += `&maxCalories=${maxCalories}`;

        // Add category filter if specified
        if (category) url += `&type=${category}`;

        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.results || []);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 p-6">
            {/* Header */}
            <h1 className="text-5xl font-bold text-center text-green-600 mb-8 drop-shadow-lg">
                🍽️ Recipe Finder
            </h1>

            {/* Search & Filters */}
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search for a recipe..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <button
                        onClick={fetchRecipes}
                        className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                    >
                        Search
                    </button>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="number"
                        placeholder="Min Calories"
                        value={minCalories}
                        onChange={(e) => setMinCalories(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <input
                        type="number"
                        placeholder="Max Calories"
                        value={maxCalories}
                        onChange={(e) => setMaxCalories(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                    >
                        <option value="">All Categories</option>
                        <option value="main course">Main Course</option>
                        <option value="dessert">Dessert</option>
                        <option value="fruit">fuit</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="breakfast">Breakfast</option>
                    </select>
                </div>
            </div>

            {/* Recipe Results */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {/* Footer */}
            {recipes.length === 0 && (
                <p className="text-center text-gray-500 mt-8">
                    Start searching for recipes to see the results.
                </p>
            )}
        </div>
    );
}

export default App;









// import React from "react";

// function RecipeCard({ recipe }) {
//     return (
//         <div className="bg-white rounded-lg shadow-md p-4">
//             <img
//                 src={recipe.image}
//                 alt={recipe.title}
//                 className="w-full h-48 object-cover rounded-md"
//             />
//             <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
//         </div>
//     );
// }

// export default RecipeCard;




// 3. index.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );


