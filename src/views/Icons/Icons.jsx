import React, { Component } from 'react';
import { Grid, Row, Col, Button, Collapse, Well } from 'react-bootstrap';

import Card from 'components/Card/Card';
//import {iconsArray} from 'variables/Variables.jsx';
//Icons = Finance Center
class Icons extends Component {
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
                            Account Summary<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            View All Invoices<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Billing Information<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Waivable Fees<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Enroll in Direct Deposit<i className="fa fa-arrow-circle-up text-info"></i>
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
                    Payment Options
                    </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            Credit Card/Electronic Check<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            International Wire Transfer<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Monthly Payment Plan Options<i className="fa fa-arrow-circle-up text-info"></i>
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
                    Health Insurance                    </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            Health Insurance Info<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            Waive/Enroll in Health Insurance<i className="fa fa-arrow-circle-up text-info"></i>
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
                    Tax Info                   </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            1098T - (2017)<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            1088T - (2016)<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            1098T - (2015)<i className="fa fa-arrow-circle-up text-info"></i>
                        </Well>
                        <Well>
                            1098T - Forms<i className="fa fa-arrow-circle-up text-info"></i>
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
                    Additional Information                 </Button>
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

export default Icons;
