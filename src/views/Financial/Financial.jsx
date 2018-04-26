import React, { Component } from 'react';
import { Grid, Row, Col, Button, Collapse, Well } from 'react-bootstrap';

import Card from 'components/Card/Card.jsx'
//Map = Financial Aid Center
class Map extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: true
        };
      }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Finance Center"
                                category={
                                    <span>
                                        Bill Nye
                                    </span>
                                }
                                content={
                                    <Grid>
                    <Row className="show-grid">
                    <Col sm={11}>
                    <div>
                    <Button bsStyle="success" onClick={() => this.setState({ open: !this.state.open })}>
                    Account Management
                    </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            View Current Financial Aid<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            View Financial Aid Award Notification<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Satisfactory Academic Progress Status<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                    </div>
                    </Collapse>
                </div>
                    </Col>
                    </Row>

                    <Row className="show-grid">
                    <Col sm={11}>
                    <div>
                    <Button bsStyle="success" onClick={() => this.setState({ open: !this.state.open })}>
                    Additional Information 
                    </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            View Your Holds<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            View Your To Do List<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Visit Our Website<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                    </div>
                    </Collapse>
                </div>
                    </Col>
                    </Row>
                </Grid>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Map;
