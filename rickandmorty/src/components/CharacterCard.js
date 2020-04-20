import React from 'react';

const CharacterCard = ( props ) =>{
    const imgStyle = {
        background: `url(${props.character.image }) no-repeat`
    }
    return (
        <div className="card-container-out">
            <div className="card-container">
                <div className="card-image" style={imgStyle}>
                    <div className={( props.character.status === "Dead") ? "dead" : "not-dead"}>
                        <h1>DEAD</h1>
                    </div>
                    <div className="card-name">
                        <h2>{props.character.name}</h2>
                    </div>
                    <div className="card-content">
                        <div className="txt-wrapper">
                            <span>Species</span>
                            <p>{props.character.species}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Gender</span>
                            <p>{props.character.gender}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Origin</span>
                            <p>{props.character.origin.name}</p>
                        </div>
                        <div className="txt-wrapper">
                            <span>Last Location</span>
                            <p>{props.character.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CharacterCard;