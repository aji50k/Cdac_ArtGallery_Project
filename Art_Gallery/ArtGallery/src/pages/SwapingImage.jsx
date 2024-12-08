
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import "../assets/css/Home.css";
import img1D from '../assets/img/C2img1.webp';
import img2D from '../assets/img/C2img2.jpg';
import img3D from '../assets/img/C2img3.jpg';
import img4D from '../assets/img/C2img4.webp';

function SwapingImage() {
  const [img1, setImg1] = useState(img1D);
  const [img2, setImg2] = useState(img2D);
  const [img3, setImg3] = useState(img3D);
  const [img4, setImg4] = useState(img4D);

  const handleMouseEnter = (setImage, newImage) => {
    setImage(newImage);
  };

  const handleMouseLeave = (setImage, defaultImage) => {
    setImage(defaultImage);
  };
  return (

    

   <div>
<Container className="container2"  >
    <Row>
        <Col id="col1"   >
            <img
                src={img1}
                alt="Img1"
                className="img-fluid rounded mx-auto d-block C2"
                onMouseEnter={() => handleMouseEnter(setImg1, img2D)}
                onMouseLeave={() => handleMouseLeave(setImg1, img1D)}
                id="C2img1"
                style={{ height: '95%', width: 'auto' }} 
            />
        </Col>
        <Col id="col2" >
            <Row className="col2-1" >
                <img
                    src={img2}
                    alt="Img2"
                    className="img-fluid rounded mx-auto d-block C2"
                    onMouseEnter={() => handleMouseEnter(setImg2, img1D)}
                    onMouseLeave={() => handleMouseLeave(setImg2, img2D)}
                    id="C2img2"
                    style={{ height: '95%', width: 'auto' }} 
                />
            </Row>
            <Row className="col2-2">
                <img
                    src={img3}
                    alt="Img3"
                    className="img-fluid rounded mx-auto d-block C2"
                    onMouseEnter={() => handleMouseEnter(setImg3, img4D)}
                    onMouseLeave={() => handleMouseLeave(setImg3, img3D)}
                    id="C2img3"
                    style={{ height: '95%', width: 'auto' }} 
                />
            </Row>
        </Col>
        <Col id="col3">
            <img
                src={img4}
                alt="Img4"
                className="img-fluid rounded mx-auto d-block C2"
                onMouseEnter={() => handleMouseEnter(setImg4, img3D)}
                onMouseLeave={() => handleMouseLeave(setImg4, img4D)}
                id="C2img4"
                style={{ height: '95%', width: 'auto' }} 
            />
        </Col>
    </Row>
</Container>

  

  </div>
  );
};

export default SwapingImage;
