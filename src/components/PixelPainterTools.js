import react, {useState} from "react";
import { ChromePicker } from 'react-color';
import Draggable, {DraggableCore} from "react-draggable";
import { slide as Menu } from "react-burger-menu";
import '../styles/PixelPainterTools.css';

function PixelPainterTools({setNumberOfCells, numberOfCells, color, setColor, handleImageDownload,}) {

    const [showColorPicker, setShowColorPicker] = useState(false);


    const clearGrid = () => {
        let gridCell = document.querySelectorAll(".grid-cell").forEach((element) => {
            element.style.backgroundColor = "white";
        })
    }

    return (
        <>
        <Menu className="tools-sideBar-container">
            <header>
                <h1 className="sideBar-header">Welcome to pixel painter</h1>
            </header>

            <form>
                <label className="add-cells-label" for="changeCell">Change Cell size</label>
                <input className="add-cells-input" name="changeCell" type="number" pattern="[0-9]" value={numberOfCells} onChange={(e) => {setNumberOfCells(e.target.value)}} />
            </form>
            <section className='buttons-container'>
                <button className='pixel-painter-btn' onClick={clearGrid}>Clear Grid</button>
                <button className='pixel-painter-btn' onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? 'Close Color Picker' : 'Display color Picker'}</button>
                <button className='pixel-painter-btn' onClick={handleImageDownload}>Save Your Art!</button>
            </section>
        </Menu>

            {
                showColorPicker && 
                <Draggable>
                    <div className='color-picker'>
                        <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)}/>
                    </div>
                </Draggable>
            }
        </>
    );
  }
  
  export default PixelPainterTools;