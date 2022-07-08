import React, { useState,useEffect } from 'react'
import "../App.css"
const Chooser = ({ tymps,fil }) => {
  const [file, setFile] = useState(fil);


  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setFile(reader.result.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }
  useEffect(() => {
    tymps(file)
  }, [file])




  return (
    <div className="chooser-container">
      <div>
        <input type="file" accept='image/*' onChange={handleFileChange} />
      </div>
      <div className='chooser-img-box'>
        {file && <img
          className="chooser-img"
          alt="Crop me"
          src={file}
        />}

      </div>
    </div>
  )
}

export default Chooser