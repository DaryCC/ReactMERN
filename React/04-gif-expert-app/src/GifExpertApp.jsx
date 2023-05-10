import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch']);
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
        {
          categories.map( category =>
             (
               <GifGrid
                 key={category}
                 category={category}
               />
             )
        )
        }
    </>
  )
}
