import '../styles/PixelPainterBtns.css'


function PixelPainterBtns() {
    return (
        <>
        <div className="main-container">
            <header>
                <h1>Pixel Painter!</h1>
            </header>
            <section className='buttons-container'>
                <button className='pixel-painter-btn'>Reset!</button>
                <button className='pixel-painter-btn'>Change Cells!</button>
                <button className='pixel-painter-btn'>Color Selecter!</button>
            </section>

        </div>
        </>
    );
  }
  
  export default PixelPainterBtns;