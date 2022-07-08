import React, { useState } from 'react'
import Slider from './Slider'
import StepsToSelectImage from './StepsToSelectImage';
const FilterTemp = ({ fil, properties, slider }) => {
    const [defaultValues, setDefaultValues] = useState(properties);
    const handleSliderChange = ({ target }) => {
        setDefaultValues(prevOption => {
            return { ...prevOption, value: target.value }
        })
    }

    function getImageStyle() {
        return { filter: `${defaultValues.property}(${defaultValues.value}${defaultValues.unit})` }
    }
    return (
        <div>
            <div className="filtertemp-container">
                <div className='filtertemp-box1'>
                    {fil && <div className="originalImg">
                        <div>
                            <img
                                alt="Crop me"
                                src={fil}
                            />
                        </div>
                    </div>}
                </div>
                <div className='filtertemp-box2'>
                    {fil && <div className="changeImg" style={getImageStyle()}>
                        <img
                            alt="Crop me"
                            src={fil}
                        />
                    </div>}
                </div>
            </div>
            <div className="filtertemp-slider">
                {slider && fil && <Slider
                    min={defaultValues.range.min}
                    max={defaultValues.range.max}
                    value={defaultValues.value}
                    name={defaultValues.name}
                    handleChange={handleSliderChange}
                />}
            </div>
            {!fil &&
             <StepsToSelectImage />
             }
        </div>
    )
}

export default FilterTemp