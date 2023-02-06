import react, {useState, useRef, createElement} from "react";
import PixelPainterBtns from './PixelPainterBtns';
import '../styles/pixelpainter.css';


function PixelPainter() {

    //number of cells use state that holds the number of cells needed to be added in the grid
    const [numberOfCells, setNumberOfCells] = useState(16);
    const [currentColor, setCurrentColor] = useState("black");

    //create grid function
    const createGrid = (rows, cols) => {
            return  Array.from({length: rows*cols}, () => (<div className="grid-cell" onClick={changeCellColor}></div>))
        }
        
    //function that change the background color of the targeted div cell 
    const changeCellColor = (event) => {
        event.target.style.backgroundcolor = currentColor;
        }

    return (
        <>
        {/* pixel painter button components */}
        <PixelPainterBtns 
            setNumberOfCells={setNumberOfCells}
            numberOfCells={numberOfCells}
        
        />
        
        <main className='pixel-painter-main'>
            <div className='pixel-container'>
                <div className='frame'>

                    {/*grid container div I'm trying accses and add new divs to.  */}
                    <div className='grid-container' style={{gridTemplateColumns: `repeat(${numberOfCells}, 1fr)`,gridTemplateRows: `repeat(${numberOfCells}, 1fr)`}}>
                        {createGrid(numberOfCells, numberOfCells)}
                    </div>
                </div>

            </div>
        </main>
           
        </>
    );
  }
  
  export default PixelPainter;