import React from 'react'

interface imageClipBox {
    src: string,
    clipClass: string
}

const ImageClipBox = ({src, clipClass} : imageClipBox) => {
   return (
    <div  className={clipClass}>
    <img src={src}  />
</div>
   )
}
export default ImageClipBox