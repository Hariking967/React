import React, {useState} from 'react'

function ColorPicker()
{

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event)
    {
        setColor(event.target.value);
    }
    return(
        <>
            <div className='color-picker-container'>
                <h1>Color Picker</h1>
                <span>Selected Color{color}</span>
                <div className='color-display' style={{backgroundColor: color, width: "100px", height: "100px"}}>
                    <p>&nbsp;</p>
                </div>
                <label>Select a color:</label>
                <input type="color" value = {color} onChange={handleColorChange}></input>
            </div>
        </>
    );
}

export default ColorPicker