import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon']);
  // console.log(categories);
const onAddCategory = (newCategory) =>{
  // console.log(newCategory);
  // categories.push(newCategory);
  if (categories.includes(newCategory)) return;

  setcategories([newCategory, ...categories]);
}

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(value) => onAddCategory(value) }
      />
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
