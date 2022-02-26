use playerList;
db.dropDatabase();

db.characters.insertMany([
    {
        name: "Rory",
        strength: 5,
        speed: 5
    },
    {
        name: "Rob",
        strength: 10,
        speed: 1
    },
    {
        name: "Ryan",
        strength: 7,
        speed: 2
    },
    {
        name: "Taylor",
        strength: 7,
        speed: 4
    },
])

db.reviews.insertMany([
    {
        name: "Donald Trump",
        score: 420,
        rating: 5,
        review: "Folks, I gotta tell ya: This is the best Pong game. All other Pong games? Losers."
    },
    {
        name: "Joe Rogan",
        score: 420,
        rating: 4,
        review: "My gameplay experience was improved thanks to Alpha Brain, DM me for promo codes."
    },
    {
        name: "IGN",
        score: 10,
        rating: 3,
        review: "The game really makes you feel like you are Pong."
    },
    {
        name: "Big Chungus",
        score: 69,
        rating: 1,
        review: "ayy lmao"
    }
])