import React, { useState } from 'react';

const Update = ({ UpdateItem,UpdateItemFunction }) => {
  const [name, setName] = useState(UpdateItem.productName);
  const [imageLink, setImageLink] = useState(UpdateItem.url);
  const [descriptiontxt, setDescription] = useState(UpdateItem.description);
  const [price, setPrice] = useState(UpdateItem.price);



  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageLinkChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleAddClick = () => {
    console.log('Name:', name);
    console.log('Image Link:', imageLink);
    console.log('Price:', price);

    const obj = {
      index:UpdateItem.index,
      productName: name,
      price: price,
      description: descriptiontxt,
      url: imageLink

    }

    UpdateItemFunction(obj)

  };






  return (
    <div>
      <div className='update-container'>

        <h2>Update Product</h2>
        <form>
          <div>
            <label>Name: </label>
            <input type='text' minLength={'3'} value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <label>Image Link: </label>
            <input type='text' minLength={'5'} value={imageLink} onChange={handleImageLinkChange} required />
          </div>
          <div>
            <label>Description: </label>
            <input type='text' minLength={'8'} value={descriptiontxt} onChange={handleDescriptionChange} required />
          </div>
          <div>
            <label>Price: </label>
            <input type='number' step='1.00' value={price} onChange={handlePriceChange} required />
          </div>
          <button type='button' onClick={handleAddClick}>Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
