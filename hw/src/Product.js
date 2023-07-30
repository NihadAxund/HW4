import React from 'react'
import {
    Card, CardBody, CardTitle, CardText, Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Product = ({ produc, UpdateBtn }) => {
    const handleBtnClick = () => {
        UpdateBtn(produc);
      };
    return (
        <Card className='bg-dark text-light moviedes'
            style={{
                width: '20rem',
                height: 'auto',
                margin: 'auto',
                marginTop: '15px',
                marginLeft: '25px',
                marginRight: '25px',
                marginBottom:'25px'
            }}>

            <CardBody className='d-flex flex-column p-0 m-0'>
                <div className='container d-flex flex-column'>
                    <Col className="m-2" xs="12" md="12">
                        <CardTitle tag="h4">
                            {produc.productName}
                        </CardTitle>
                    </Col>

                    <Col  xs="12" md="12">
                        <img

                            alt="Card cap"
                            src={produc.url}
                            width="100%"
                            style={{ height:'250px' }}
                        />
                    </Col>

                    <Col className="d-flex flex-column  align-items-center   p-1" xs="12" md="12">

                        <CardText className='text-center description m-0 ' style={{ width:'100%', maxHeight:'120px', overflow: 'scroll'}}>
                            {produc.description}
                        </CardText>
                        <p className=' p-1 text-primary' style={{ fontSize: '1.4em', fontFamily: 'bolt',display:'flex', alignItems:'flex-end', width:'100%',height:'auto' }}>{produc.price} $</p>
                        <div className='d-flex justify-content-center text-center'>
                            <button onClick={handleBtnClick} className="btn btn-primary btn-block mb-2" >Update</button>
                        </div>
                    </Col>
                </div>
            </CardBody>
        </Card >
    )
}

export default Product;
