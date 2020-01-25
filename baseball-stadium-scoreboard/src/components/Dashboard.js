import React from "react"



export default function Dashboard(props) {

    const {addStrike,addBall,addFoul, addHit} = props;

    return(
        <div>
            {/* <div>
                <button>Home Score</button>
                <button>Inning</button>
                <button>Guest Score</button>
            </div> */}
            <div>
                <button onClick={addBall}>Ball</button>
                <button onClick={addStrike}>Strike</button>
                <button onClick= {addFoul}>Foul</button>
                <button onClick={addHit}>Hit</button>
            </div>
            

        </div>
    )
}