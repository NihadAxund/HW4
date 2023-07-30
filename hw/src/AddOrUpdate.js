import React, { useState } from 'react';
import Update from './Update';

const AddOrUpdate = ({ addItem, isUpdate, UpdateItem,UpdateItemFunction }) => {

    const [name, setName] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [descriptiontxt, setDescription] = useState('');
    const [price, setPrice] = useState(0);

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
            productName: name,
            price: price,
            description: descriptiontxt,
            url: imageLink

        }



        addItem(obj);
        setName('');
        setPrice(0);
        setImageLink('');
        setDescription('');

    };

    function AddStyle() {
        return (

            <div className='update-container'>

                <h2>Add Product</h2>
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
                    <button type='button' onClick={handleAddClick}>Add</button>
                </form>
            </div>
        );
    }


    function UpdateOrAdd() {
        if (isUpdate) {
            if(UpdateItem!=null){
                return(<Update UpdateItem={UpdateItem} UpdateItemFunction={UpdateItemFunction}></Update>)
            }
        }
        else {
            return (AddStyle())
        }
    }
    return (
        <div>
            {UpdateOrAdd()}
        </div>
    )
}

export default AddOrUpdate;
