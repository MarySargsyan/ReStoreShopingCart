import React, { Component } from 'react';
import Counter from './counter';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class  Counters extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
              <Row style={{marginTop: "2em"}} xs={1} md={3} className="g-4">
               {counters.map(counter =>
               <Col>
                 <Counter
                    key = {counter.id}
                    counter = {counter}
                    onDelete={onDelete} 
                    onIncrement = {onIncrement}/>
                </Col>
                )}
              </Row>
              <div style={{marginTop: "2em", float: "right", marginRight: "54px"}}>
                <button  onClick={onReset} className="btn btn-primary btn-small m-2">Reset</button>
              </div>
            </div>
        );
    }

}
 
export default Counters;