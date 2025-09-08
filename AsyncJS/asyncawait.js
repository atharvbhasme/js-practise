//what is async/ await ?
// async means: "This function will return a Promise."
// await means: "Wait for this Promise to resolve, then continue."

// A fake function that returns a Promise after 2 seconds
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here is your data!");
    }, 2000);
  });
}

// Async function using await
async function fetchData() {
  console.log("Fetching data...");
  const result = await getData();  // Wait here until getData() is done
  console.log("Data received:", result);
}

fetchData();

//how to handle mutiple async operations in sequence using async/await
async function fetchMultipleData() {
  console.log("Fetching first data...");
  const data1 = await getData();
  console.log("First data received:", data1);

  console.log("Fetching second data...");
  const data2 = await getData();
  console.log("Second data received:", data2);

  console.log("Fetching third data...");
  const data3 = await getData();
  console.log("Third data received:", data3);
}

fetchMultipleData();

//how to handle errors in async/await
async function fetchDataWithErrorHandling() {
  try {
    console.log("Fetching data with error handling...");
    const result = await getData();
    console.log("Data received:", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataWithErrorHandling();

//how to run multiple async operations in parallel using Promise.all with async/await
async function fetchAllData() {
  console.log("Fetching all data in parallel...");
  const promises = [getData(), getData(), getData()];
  const results = await Promise.all(promises);
  console.log("All data received:", results);
}

fetchAllData();

//async/await usecase
//cleaner code
//no callback hell