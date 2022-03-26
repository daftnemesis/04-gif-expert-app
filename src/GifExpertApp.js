import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {
  //   //para agregar elementos a un estado, se usa el spread operator
  //   // setCategories([...categories, 'Mazinger Z'])

  //   //o con un callback
  //   setCategories(cats => [...cats, 'Mazinger Z'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
