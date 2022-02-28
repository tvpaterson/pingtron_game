

const ScoreBoard = ({players}) => {
    const playerList = players.map((player) => {
        return (
            <tr key={player._id}>
                <td className="column1">{player.name}</td>
                <td className="column2">{player.score}</td>
            </tr>
        )
    })

    return (
        <div className="scoreboard-container">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className=" table100">
                        <table>
                            <thead>
                                <tr className="table100-head">
                                    <th className="column1">Player</th>
                                    <th className="column2">Score</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {playerList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default ScoreBoard;