const baseURL = "http://localhost:5000/api/reviews/"

export const getReviews = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postReview = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteReview = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}