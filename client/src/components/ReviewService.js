const baseURL = "http://localhost:5000/api/reviews"

export const getReviews = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

// const addReview = (review) => {
//     let temp = reviews.map(r => r);
//     temp.push(review);
//     setReviews(temp);
//   }

// const removeReview = (id) => {
// const temp = reviews.map(r => r);
// const indexToDel = temp.map(r => r._id).indexOf(id);
// console.log(indexToDel);

// temp.splice(indexToDel, 1);
// setReviews(temp);
// }