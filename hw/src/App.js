import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import { prductlistarr } from './data';
import AddOrUpdate from './AddOrUpdate';


export default class IndexComponent extends Component {

  constructor(props) {

    super(props);
    this.state = {
      isUpdateColFlex: false,
      isUpdateStyle: false,
      isSelectProduct: null,
      ItemList: []
    };

    this.state.ItemList = prductlistarr;
  }

  UpdateItemFunction = (item) => {
    const updatedList = this.state.ItemList.map(item2 => {
      if (item2.index === item.index) {
        return { ...item };
      }
      return item2;
    });

    this.setState({
      ItemList: updatedList
    });
  }

  addItem = (Item) => {

    const newList = [
      ...this.state.ItemList,
      {
        index: this.state.ItemList.index + 1,
        productName: Item.productName,
        price: Item.price,
        description: Item.description,
        url: Item.url,
      }
    ];

    this.setState({
      ItemList: newList,
    });

  };

  UpdateBtn = (item) => {

    this.setState({
      isUpdateStyle: true,
      isUpdateColFlex: true,
      isSelectProduct: item
    })

  };


  handleButtonClick = () => {
    this.setState((prevState) => ({
      isUpdateColFlex: !prevState.isUpdateColFlex,
      isUpdateStyle: false
    }));

  };

  render() {

    const updateColClass = this.state.isUpdateColFlex ? 'flex-column' : 'none';
    const size = this.state.isUpdateColFlex ? '7' : '12';
    const buttonText = this.state.isUpdateColFlex ? 'Back' : 'Add Product';

    return (
      <div className='bg-primary container2'>
        <Row className="" style={{ position: 'relative' }}>
          <Col
            className={`bg-dark p-0 m-0 d-${updateColClass}`}
            xs="12"
            sm='12'
            md="5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AddOrUpdate addItem={this.addItem} isUpdate={this.state.isUpdateStyle} UpdateItem={this.state.isSelectProduct} UpdateItemFunction={this.UpdateItemFunction}></AddOrUpdate>
          </Col>

          <Col className="p-0 m-0 " xs="12" sm='12' md={size}>
            <div className='ProductListDiv-1'>
              <button
                className='btn btn-dark'
                onClick={this.handleButtonClick}>
                {buttonText}
              </button>
            </div>
            <section className='ProductListDiv-2'>
              <ProductList Productlist={this.state.ItemList} UpdateBtn={this.UpdateBtn} ></ProductList>
            </section>

          </Col>
        </Row>
      </div>
    );
  }
}
