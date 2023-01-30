import fetch from "node-fetch";

// const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// const fetchData = async (apiEndPoint) => {
//   try {
//     const response = await fetch(apiEndPoint);
//     const json = await response.json();
//     console.log(json);
//   } catch (e) {
//     console.error(e);
//   }
// };

// fetchData(jsonTypicode);

const requestURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const fetchData = async (url) => {
  try {
    const result = await (await fetch(url)).json();
    const drink = result.drinks[0];

    console.clear();
    console.log(`Here is your random drink, cheers!`);
    console.log(`-----------------------------------------`);
    console.log(`Drink id is: ${drink.idDrink}.\n`);
    console.log(`Drink name is: ${drink.strDrink}.\n`);
    console.log(`Instruction is: ${drink.strInstructions}.\n`);
    console.log(`Enjoy it for free: ${drink.strDrinkThumb}\n`);
  } catch (e) {
    console.error(e);
  }
};

fetchData(requestURL);
