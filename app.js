//Create a function that takes a given value and returns a * ratings if the the number is a whole number and a '.' if it has decimal point like 0.5

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i <= 4; ++i) {
        ratings = ratings + '*'
        if (i !== 3) {

            ratings = ratings + ''
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}
console.log(showRating(1000))


//Create a function that sorts an array of numbers from lowest to highest.

function sortLowtoHigh(arr){
    let sortedArr = []
    return arr.sort((a, b) => {
        return a - b
    })
 }

console.log(sortLowtoHigh([20,40,10,30,50,10]));
console.log(sortLowtoHigh([5,10,0,-5]));
console.log(sortLowtoHigh([3,2,1,0]));

//Create a function that sorts an array of objects and returns the prices sorted from high to low

function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 1, price: 30},
    {id: 1, price: 60},
    {id: 1, price: 10},
]));

//Create a function that finds all posts by a single user. API: https://jsonplaceholder.typicode.com/posts .

async function postsByUser(uId) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         console.log(res)
//         console.log(uid)}
  
// )
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await promise.json();
    const posts = result.filter(elem => elem.userId === uId)
    console.log(posts)
}

postsByUser(3)