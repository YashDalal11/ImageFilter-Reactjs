import React, { useState, useRef } from 'react'
import '../App.css'
import StepsToSelectImage from './StepsToSelectImage'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
} from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

function centerAspectCrop(
  mediaWidth,
  mediaHeight,
  aspect,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}
const Cropper = ({ fil }) => {
  const [file, setFile] = useState(fil);
  const [crop, setCrop] = useState({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
  });
  const [completedCrop, setCompletedCrop] = useState()
  const [aspect, setAspect] = useState()

  const imgRef = useRef(null)
  const previewCanvasRef = useRef(null)

  const onImageLoad = (e) => {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }


  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
        )
      }
    },
    100,
    [completedCrop],
  )
  return (
    <div>
    <div className="cropper-container">
      <div className="cropper-box1">
        {file &&
          <div className="orgImg">
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
            >
              <img
                className='imgCropper'
                ref={imgRef}
                alt="Crop me"
                src={file}
                onLoad={onImageLoad}
              />
            </ReactCrop>

          </div>
        }
      </div>
      <div className="cropper-box2">
      {
        completedCrop &&
        <div className="cropImg">
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '0',
              alignItems:'center',
              objectFit: 'contain',
              width: completedCrop.width,
              height: completedCrop.height,
            }}
          />
        </div>
      }
      {
       file && !completedCrop &&
        <div className="cropImg">
          Select area To crop
        </div>
      }
      </div>
      
    </div>
    {!file && <StepsToSelectImage />}
    </div>
  )
}

export default Cropper