import react, {useState, useRef, createElement} from "react";
import PixelPainterBtns from './PixelPainterBtns';
import '../styles/pixelpainter.css';


function PixelPainter() {

    //number of cells use state that holds the number of cells needed to be added in the grid
    const [numberOfCells, setNumberOfCells] = useState(16);

    //useRef that's being used to access grid container div in the html/jsx
    const gridContainerElement = useRef();

    //create grid function
    const createGrid = (rows, cols) => {
        for(let c = 0; c < (rows * cols); c++){
            let newCells = document.createElement("div");
            gridContainerElement.current.appendChild(newCells)
        }
    }

    createGrid(numberOfCells, numberOfCells);

    return (
        <>
        {/* pixel painter button components */}
        <PixelPainterBtns />
        
        <main className='pixel-painter-main'>
            <div className='pixel-container'>
                <div className='frame'>

                    {/*grid container div I'm trying accses and add new divs to.  */}
                    <div className='grid-container' ref={gridContainerElement}>

                    </div>
                </div>

            </div>
        </main>
           
        </>
    );
  }
  
  export default PixelPainter;