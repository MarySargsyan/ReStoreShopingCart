import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Counter  extends Component {
    render() {        
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '16rem' }} variant="top" src={this.props.counter.img} />
                <Card.Body>
                    <Card.Title>
                        {this.props.counter.productName}
                        <span className={this.getBadgeClasses()}>
                            {this.getFiltredCount()}
                        </span>
                    </Card.Title>                   
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick = {() => this.props.onIncrement(this.props.counter)} variant="primary">+</Button>
                    <Button style={{ marginLeft: "1em" }} onClick = {() => this.props.onDelete(this.props.counter.id)} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "" : "primary";
        return classes;
    }

    getFiltredCount() {
       let value =  this.props.counter.value;
        value = (this.props.counter.value === 0) ? " " : value;
        return value;
    }
    styles ={
        fontSize : 20,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 12,
        paddingRight: 12
    }
    
}
 
export default Counter;