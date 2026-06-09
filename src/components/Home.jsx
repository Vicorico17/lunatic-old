import React from "react";
import Video1 from '../assets/intro_video.mp4';


export default function Home() {
    const lunaticWhitepaper = '/whitepapers/lunatic-clubhouse-whitepaper.pdf';
    const wastelandsWhitepaper = '/whitepapers/wastelands-of-mars-whitepaper.pdf';

    function handleMintClick() {
        alert("obviously you can't mint this anymore");
    }

    return (
        <div className="home">
            <div className='video-wrapper'>
                <video playsInline autoPlay muted loop poster='../assets/casino.jpeg'>
                    <source src={Video1} type='video/mp4'/>
                </video>
            </div>
            <div className='button-container'>
                <button className='button-64' type='button' onClick={handleMintClick}>
                    <span className="text">Mint now</span>
                </button>
                <div className='whitepaper-buttons'>
                    <a className='button-64' href={lunaticWhitepaper} target='_blank' rel='noreferrer'>
                        <span className="text">Whitepaper</span>
                    </a>
                    <a className='button-64 button-64--wide' href={wastelandsWhitepaper} target='_blank' rel='noreferrer'>
                        <span className="text">Wastelands of Mars Whitepaper</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
