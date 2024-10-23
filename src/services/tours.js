const response = await fetch("http://localhost:3005/api/v1/tours");
const data = await response.json();

console.log(data);
