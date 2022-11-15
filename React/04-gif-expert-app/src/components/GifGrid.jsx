import React, { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs.js';
import GifItem from './GifItem';

function GifGrid({ category }) {

  const [images, setImages] = useState([]);


  // const [counter, setCounter] = useState(10);
  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);

  }

  useEffect(() => {
    getImages();
  },[]);

    return (
        <>
            <h3>{category}</h3>
          <div className='card-grid'>
            {
              images.map((image)=>{
                /* return <GifItem key={image.id} title={image.title} url={image.url}/> */
                return <GifItem key={image.id} {...image}/>

              })

            }
          </div>
        </>
   );
}

export default GifGrid
