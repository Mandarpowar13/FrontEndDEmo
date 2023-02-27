import { Card, Col } from "react-bootstrap";

import React from 'react'

export default function TrekDis(props) {
  return (
    <Col lg={6}>
            <Card className="mb-5">
                
                <Card.Body>
                    <Card.Title>{props.article.name}</Card.Title>
                    <Card.Text>
                        {props.article.t_desc}
                        <h5>price:</h5>
                        {props.article.t_price}
                    </Card.Text>
                    <a href={props.article.url} className='btn btn-success'>Read full article</a>
                </Card.Body>
            </Card>
        </Col>
  );
}

