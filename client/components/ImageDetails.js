import React from 'react';
import ImageScore  from './ImageScore';
const ImageDetails=(props)=>{

      return( <li className="media list-group-item">
      <div  className="media-left">
          < img src = {
              props.picture.link
          }
          />
          </div>
          <div className="media-body">
              <h3 className="media-heading">
              {
                  props.picture.title
              }
                  </h3>
                  <p>
                      {props.picture.description}
                      </p>
                      <ImageScore  ups={props.picture.ups} downs={props.picture.ups}/>
              </div>
            
            </li>
      );
};


export default ImageDetails;