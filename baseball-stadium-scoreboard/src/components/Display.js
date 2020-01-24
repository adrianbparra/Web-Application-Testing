import React from "react"



export default function Display(props) {

    console.log(props)

    const {homeScore,guestScore, inning, balls, strikes, outs } = props;

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
                <span>{balls}</span>

                <p>Strike</p>
                <span>{strikes}</span>
                <p>Out</p>
                <span>{outs}</span>
            </div>

        </div>
    )
}