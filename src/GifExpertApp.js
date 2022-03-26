import React, { useState } from 'react';

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  const handleAdd = () => {
    //para agregar elementos a un estado, se usa el spread operator
    // setCategories([...categories, 'Mazinger Z'])

    //o con un callback
    setCategories(cats => [...cats, 'Mazinger Z'])
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
