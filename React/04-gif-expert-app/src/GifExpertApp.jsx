import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon']);
  // console.log(categories);
const onAddCategory = () =>{
  setcategories([...categories, 'Hola Mundo']);
}

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setcategories={ setcategories}/>
      {/* <button onClick={onAddCategory}>GifExpertApp</button> */}
      <ol>
        {
          categories.map( category => {
            return <li key={ category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
