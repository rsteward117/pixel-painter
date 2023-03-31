import react, {useState, useRef, createElement} from "react";
import PixelPainterBtns from './PixelPainterTools';
import {FaBars} from 'react-icons/fa'
import '../styles/pixelpainter.css';
import PixelPainterTools from "./PixelPainterTools";
import domtoimage from 'dom-to-image';
import downloadjs from 'downloadjs';



function PixelPainter() {

    const element = useRef();
    //number of cells use state that holds the number of cells needed to be added in the grid
    const [numberOfCells, setNumberOfCells] = useState(16);
    const [color, setColor] = useState("#000000");
    


    //create grid function
    const createGrid = (rows, cols) => {
        return  Array.from({length: rows*cols}, () => (<div className="grid-cell" onClick={changeCellColor}></div>))
    }

    //function that change the background color of the targeted div cell 
    const changeCellColor = (event) => {
        event.target.style.backgroundColor = color;

        if(event.detail == 2){
            event.target.style.backgroundColor = "#FFFFFF"
        }
    }

    const handleImageDownload = () => {
        const downloadElement = element.current;
        domtoimage.toSvg(downloadElement)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'Your-Pixel-Art.svg';
                link.href = dataUrl;
                link.click()
            })
            .catch(function (error){
                console.log('something went wrong', error);
            });
    };

    return (
        <>
        {/* pixel painter button components */}
        <PixelPainterTools 
            setNumberOfCells={setNumberOfCells}
            numberOfCells={numberOfCells}
            color={color}
            setColor={setColor}
            handleImageDownload={handleImageDownload}
        />
        
        <main className='pixel-painter-main'>
            <div className='pixel-container' ref={element}>
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