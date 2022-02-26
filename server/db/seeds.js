use playerList;
db.dropDatabase();

db.players.insertMany([
    {
        name: "Wind Jammers",
        score: 5
    },
    {
        name: "Jeff Bridges",
        score: 10
    },
    {
        name: "Kevin Flynn",
        score: 7
    },
    {
        name: "Clu",
        score: 7
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