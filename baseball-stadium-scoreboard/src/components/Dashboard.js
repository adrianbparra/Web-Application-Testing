import React from "react"



export default function Dashboard(props) {

    const {addStrike,addBall} = props;

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
                <button>Foul</button>
                <button>Hit</button>
            </div>
            

        </div>
    )
}