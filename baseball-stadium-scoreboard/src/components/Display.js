import React from "react"



export default function Display(props) {

    const {homeScore,guestScore, inning, ball, strike, out } = props;

    return(
        <div>

            <div>
                <p>Home</p>
                <span>{homeScore}</span>
                
                <span>{inning}</span>
                <p>Inning</p>
                
                <p>Guest</p>
                <span>{guestScore}</span>
            </div>

            <div>
                <p>Ball</p>
                <span>{ball}</span>

                <p>Strike</p>
                <span>{strike}</span>
                <p>Out</p>
                <span>{out}</span>
            </div>

        </div>
    )
}