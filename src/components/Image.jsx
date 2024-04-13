import React from 'react'
import pic from '../assets/images/gallery/fulls/Landing-Page--Navbar.png'
import ImageModal from './Image-Modal/ImageModal'

export default function Image() {
  return (
    <div>
        <ImageModal preview={true} showIconPreview={true} url={pic}/>
    </div>
  )
}
