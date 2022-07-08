import React,{ useState ,useEffect } from 'react'

const Tabs = ({navTabs}) => {
    const [ID, setID] = useState("chooser")
    const [chooserClassName,setchooserClassName] = useState("active");
    const [cropperClassName,setcropperClassName] = useState("");
    const [filterOneClassName,setfilterOneClassName] = useState("");
    const [filterTwoClassName,setfilterTwoClassName] = useState("");
    const [brightnessClassName,setbrightnessClassName] = useState("");
    const [contrastClassName,setcontrastClassName] = useState("");
    const handleClick = (e)=>{
        setID(e.target.id);
    }
    useEffect(() => {
        setchooserClassName(ID ==="chooser"? "active" :"");
        setcropperClassName(ID ==="cropper"? "active" :"")
        setfilterOneClassName(ID ==="filter1"? "active" :"")
        setfilterTwoClassName(ID ==="filter2"? "active" :"")
        setbrightnessClassName(ID ==="brightness"? "active" :"")
        setcontrastClassName(ID ==="contrast"? "active" :"")
        navTabs(ID);
    }, [ID])
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button id="chooser" className={`nav-link text-dark ${chooserClassName}`} 
                    onClick={handleClick} >Home</button>
                </li>
                <li className="nav-item">
                    <div id="cropper" className={`nav-link text-dark ${cropperClassName}`} onClick={handleClick}>Crop</div>
                </li>
                <li className="nav-item">
                    <button id="filter1" className={`nav-link text-dark ${filterOneClassName}`} onClick={handleClick}>Filter 1</button>
                </li>
                <li className="nav-item">
                    <button id="filter2"className={`nav-link text-dark ${filterTwoClassName}`} onClick={handleClick}>Filter 2</button>
                </li>
                <li className="nav-item">
                    <button id="brightness" className={`nav-link text-dark ${brightnessClassName}`} onClick={handleClick}>Brightness</button>
                </li>
                <li className="nav-item">
                    <button id="contrast" className={`nav-link text-dark ${contrastClassName}`} onClick={handleClick}>Contrast</button>
                </li>

            </ul>
        </div>
    )
}

export default Tabs