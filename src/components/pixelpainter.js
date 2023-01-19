import react, {useState, useRef, createElement} from "react";
import PixelPainterBtns from './PixelPainterBtns';
import '../styles/pixelpainter.css';


function PixelPainter() {

    const [grid, setGrid] = useState(16);

    const gridContainerElement = useRef();

    const createGrid = (rows, cols) => {
        for(let c = 0; c < (rows * cols); c++){
            let newCells = document.createElement("div");
            gridContainerElement.current.appendChild(newCells)
        }
    }

    createGrid(grid, grid);

    return (
        <>
        {/* pixel painter button components */}
        <PixelPainterBtns />
        
        <main className='pixel-painter-main'>
            <div className='pixel-container'>
                <div className='frame'>
                    <div className='grid-container' ref={gridContainerElement}>

                    </div>
                </div>

            </div>
        </main>
           
        </>
    );
  }
  
  export default PixelPainter;