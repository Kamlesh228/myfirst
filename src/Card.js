import React from 'react';

const Card = ({id,name,email}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>Robo </h1>
            <img src={` https://robohash.org/${id}?200*200 `} alt='anime' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
           
        </div>
    );
}


export default Card;