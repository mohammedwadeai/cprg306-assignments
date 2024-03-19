import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch meal ideas');
  const data = await response.json();
  return data.meals || [];
}

async function fetchMealIngredients(mealId) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch meal ingredients');
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [mealDetails, setMealDetails] = useState({});

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient)
        .then(setMeals)
        .catch(error => console.error(error));
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  const selectMeal = async mealId => {
    if (selectedMealId === mealId) {
      setSelectedMealId(null);
      setMealDetails({});
    } else {
      setSelectedMealId(mealId);
      try {
        const details = await fetchMealIngredients(mealId);
        setMealDetails({ [mealId]: details });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold text-gray-700">Meal Ideas for {ingredient}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals.length > 0 ? meals.map(meal => (
          <div key={meal.idMeal} className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" onClick={() => selectMeal(meal.idMeal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800 mb-2">{meal.strMeal}</p>
              {selectedMealId === meal.idMeal && mealDetails[meal.idMeal] && (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-md font-semibold text-gray-700 mb-2">Ingredients</h3>
                  <ul className="list-disc pl-5">
                    {Array.from({ length: 20 }).map((_, index) => {
                      const ingredient = mealDetails[meal.idMeal][`strIngredient${index + 1}`];
                      const measure = mealDetails[meal.idMeal][`strMeasure${index + 1}`];
                      return ingredient ? <li key={index} className="text-sm text-gray-600">{`${ingredient} - ${measure}`}</li> : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )) : (
          <p className="text-gray-600">No available meal ideas for this ingredient.</p>
        )}
      </div>
    </div>
  );
}
