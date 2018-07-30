import React from 'react';
import ImageDetails from './ImageDetails'



const ImageList=(props)=>{
    const validImage=props.images.filter(images=>!images.is_album)
    const RenderImg=validImage.map((img)=>
         <ImageDetails  key={img.title} picture={ img}/>
    )

    return(
        <ul className="media-list list-group">
            {RenderImg}
            </ul>
    )
}

export default ImageList;