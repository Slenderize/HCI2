import React, { Component } from 'react';
import { Grid, Row, Col, MenuItem, DropdownButton, Collapse, Button, Well } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Card from 'components/Card/Card.jsx'
//Notifications = My Advising Center

var products = [{
    id: "Units Toward GPA:",
    name: "",
    price: "",
    total:""
}, {
    id: "Taken",
    name: "",
    price: "",
    total: "xx.xxx"
}, {
    id: "Passed",
    name: "",
    price: "",
    total:"xx.xxx"
}, {
    id: "In Progress",
    name: "12.00",
    price: "12.00",
    total:"24.000"
}, {
    id: "Units Not for GPA:",
    name: "",
    price: "",
    total:""
}, {
    id: "Taken",
    name: "",
    price: "",
    total:"xx.xxx"
}, {
    id: "Passed",
    name: "",
    price: "",
    total:"xx.xxx"
}, {
    id: "In Progress",
    name: "",
    price: "",
    total:""
}, {
    id: "GPA Calucation",
    name: "",
    price: "",
    total:""
}, {
    id: "Total Grade Points",
    name: "",
    price: "",
    total:"xxx.xxx"
}, {
    id: "/  Units Taken Toward GPA",
    name: "",
    price: "",
    total:"xx.xxx"
}, {
    id: "= GPA",
    name: "",
    price: "",
    total:"x.xxx"
}];
class Notifications extends Component {
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
                        <div>
                            <DropdownButton title="Menu" type="button" id="basic-nav-dropdown-right" >
                            <center><h6>Advising Center</h6></center>
                            <MenuItem eventKey={1}>Academic Summary</MenuItem>
                            <MenuItem eventKey={2}>General Info</MenuItem>
                            <MenuItem eventKey={3}>Registration Links</MenuItem>
                            <MenuItem eventKey={4}>Notes</MenuItem>
                            <MenuItem eventKey={5}>Degree Requirements</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6}>Home</MenuItem>
                            </DropdownButton>
                        </div>
                            <Card
                                title="My Advising CenterAcademic Summary"
                                category="Bill Nye"
                                content={
                                    <Grid>
                                    <Row className="show-grid">
                                    <Col sm={11}>
                                    <div>
                                    <Button bsStyle="success" onClick={() => this.setState({ open: !this.state.open })}>
                                    Institution/Career/Program
                                    </Button>
                                    <Collapse in={this.state.open}>
                                    <div>
                                        <Well>
                                        CENC - Contin. Ed Non Credit<br/>
                                        Program: SCI-U Kennedy College of Sciences<br/>
                                        Student Career Nbr:1<br/>
                                        Status: Activeas of 06/16/2015<br/>
                                        Admit Term: 25102015 Fall<br/>
                                        Expected Graduation: 27302018 Spring<br/>
                                        Approved Load: Full-Time<br/>
                                        Load Determination: Base On Units<br/>
                                        Level Determination Base On Units<br/>
                                        Plan: CS-BSComputer Science (BS)<br/>
                                        Requirement Term: 25102015 Fall<br/>
                                        Sub-Plan: CGGeneral<br/>
                                        Requirement Term: 25102015 Fall
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
                                    Term Summary
                                    </Button>
                                    <Collapse in={this.state.open}>
                                    <div>
                                        <Well>
                                        CENC - Contin. Ed Non Credit<br/>
                                        2018 Fall<br/>
                                        Eligible to Enroll:Yes<br/>
                                        Primary Program: SCI-UKennedy College of Sciences<br/>
                                        Academic Standing Status: Data unavailable<br/>
                                        </Well>
                                        <Well>
                                            <Button bsStyle="success" >Level - Load</Button><br/>
                                        Academic Level - Projected:Senior<br/>
                                        Academic Level - Term StartSenior<br/>
                                        Academic Level - Term EndSenior<br/>
                                        Approved Academic Load:Full-Time<br/>
                                        Academic LoadThree Quarter Time<br/>
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
                    Statistics                    </Button>
                    <Collapse in={this.state.open}>
                    <div>
                        <Well>
                        <BootstrapTable height='600' data={ products }>
                        <TableHeaderColumn dataField='id' width='200' isKey>2018 FALL</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'  width='200' headerAlign='center' dataAlign='right'>FROM ENROLLMENT</TableHeaderColumn>
                        <TableHeaderColumn dataField='price'  width='200' headerAlign='center' dataAlign='right'>COMBINED TERM TOTAL</TableHeaderColumn>
                        <TableHeaderColumn dataField='total' width='200' headerAlign='center' dataAlign='right'>CUMULATIVE TOTAL</TableHeaderColumn>
                        </BootstrapTable>                        
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

export default Notifications;
