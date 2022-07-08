import React, { useState } from 'react'
import "../App.css"
import Chooser from './Chooser'
import Cropper from './Cropper'
import FilterTemp from './FilterTemp'

const defaultValues = [
  {
    name: 'Black and White',
    property: 'grayscale',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%',

  }, {
    name: 'Sepia',
    property: 'sepia',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%',

  },
  {
    name: 'Brightness',
    property: 'brightness',
    value: 150,
    range: {
      min: 0,
      max: 200
    },
    unit: '%',

  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 150,
    range: {
      min: 0,
      max: 200
    },
    unit: '%',

  }
]

const MainContent = ({ mainContentLoader }) => {
  const [file, setFile] = useState(null);
  const tymps = (file) => {
    setFile(file)
  }

  return (
    <div className="mainContent-container">
      {mainContentLoader === "chooser" && <div><Chooser tymps={tymps} fil={file} /></div>}
      {mainContentLoader === "cropper" && <Cropper fil={file} />}
      {mainContentLoader === "filter1" && <FilterTemp fil={file} properties={defaultValues[0]} slider={false} />}
      {mainContentLoader === "filter2" && <FilterTemp fil={file} properties={defaultValues[1]} slider={false} />}
      {mainContentLoader === "brightness" && <FilterTemp fil={file} properties={defaultValues[2]} slider={true} />}
      {mainContentLoader === "contrast" && <FilterTemp fil={file} properties={defaultValues[3]} slider={true} />}
    </div>
  )
}

export default MainContent