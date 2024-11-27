import React from 'react'

interface imageClipBox {
    src: string,
    clipClass: string
}

const ImageClipBox: React.FC<imageClipBox> = ({src, clipClass}) => {
   return (
    <div  className={clipClass}>
    <img src={src}  />
</div>
   )
}
export default ImageClipBox