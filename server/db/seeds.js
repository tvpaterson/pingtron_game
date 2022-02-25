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