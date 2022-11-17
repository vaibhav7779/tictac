import React from "react";

function Game() {
    const squares = Array(9).fill(null)

    function renderTile(id) {
        return <input type="button" value={squares[id]} className="box" onClick={() => selectTile(id)} />
    }

    function selectTile(id) {
        squares[id] = 1;
    }
    return (
        <div role="mainTitle" className={"mainTitle"}>
            <div>
                {renderTile(1)}
                {renderTile(2)}
                {renderTile(3)}
            </div>
            <div>
                {renderTile(4)}
                {renderTile(5)}
                {renderTile(6)}
            </div>
            <div>
                {renderTile(7)}
                {renderTile(8)}
                {renderTile(9)}
            </div>
        </div>)
}


export default Game;