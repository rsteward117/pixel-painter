import react, {useState} from "react";
import '../styles/PixelPainterBtns.css';


function PixelPainterBtns({setNumberOfCells, numberOfCells}) {

    const addMoreCells = () => {
        let userInput = prompt('Change grid cells?', numberOfCells);
        setNumberOfCells(userInput);
    }

    return (
        <>
        <div className="main-container">
            <header>
                <h1>Pixel Painter!</h1>
            </header>
            <section className='buttons-container'>
                <button className='pixel-painter-btn'>Reset!</button>
                <button className='pixel-painter-btn' onClick={addMoreCells}>Change Cells!</button>
                <button className='pixel-painter-btn'>Color Selecter!</button>
            </section>

        </div>
        </>
    );
  }
  
  export default PixelPainterBtns;