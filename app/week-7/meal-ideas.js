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
  const [selectedMealDetails, setSelectedMealDetails] = useState(null);

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient)
        .then(setMeals)
        .catch(error => console.error(error));
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  useEffect(() => {
    if (selectedMealDetails?.idMeal) {
      fetchMealIngredients(selectedMealDetails.idMeal)
        .then(details => {
          setSelectedMealDetails({ ...selectedMealDetails, ...details });
        })
        .catch(error => console.error(error));
    }
  }, [selectedMealDetails?.idMeal]);

  const selectMeal = mealId => {
    const meal = meals.find(m => m.idMeal === mealId);
    setSelectedMealDetails(meal);
  };

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <div>
        {meals.map(meal => (
          <div key={meal.idMeal} onClick={() => selectMeal(meal.idMeal)} style={{ cursor: 'pointer', marginBottom: '10px' }}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
      {selectedMealDetails && (
        <div>
          <h3>Ingredients for {selectedMealDetails.strMeal}</h3>
          <ul>
            {Array.from({ length: 20 }).map((_, index) => {
              const ingredient = selectedMealDetails[`strIngredient${index + 1}`];
              const measure = selectedMealDetails[`strMeasure${index + 1}`];
              return ingredient ? <li key={index}>{`${ingredient} - ${measure}`}</li> : null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
