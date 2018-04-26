import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { MenuItem, DropdownButton, Button, Collapse, Well  } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import {thArray, tdArray} from 'variables/Variables.jsx';

class TableList extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
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
                            <center><h6>My Academics</h6></center>
                            <MenuItem eventKey={1}>View My Grades</MenuItem>
                            <MenuItem eventKey={2}>Class Search</MenuItem>
                            <MenuItem eventKey={3}>My Planner</MenuItem>
                            <MenuItem eventKey={4}>My Course History</MenuItem>
                            <MenuItem eventKey={5}>My Class Schedule</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6}>Home</MenuItem>
                            </DropdownButton>
                        </div>
                            <Card
                                title="My Class Schedule - List View"
                                category="Bill Nye"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tdArray.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                return (
                                                                    <td  key={key}>{prop}</td>
                                                                );
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>

                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="My Academics"
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
                                        Academic Requirements
                                        </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                View my advisement report<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        What-if Report
                                        </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                Create a what-if scenario<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Advisors                    </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                View my Advisors<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Transfer Credit                    </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                View my transfer credit report<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Course History                  </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                View my Course History<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Transcript                  </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                Expedite Official (Nominal Fee)<i className="fa fa-arrow-circle-up text-info"></i>
                                            </Well>
                                            <Well>
                                                Explanation of E-Transcript<i className="fa fa-arrow-circle-up text-info"></i>
                                            </Well>
                                            <Well>
                                                View my Unofficial Transcript<i className="fa fa-arrow-circle-up text-info"></i>
                                            </Well>
                                            <Well>
                                                Request official Transcript<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Enrollment Verification                  </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                Request Enrollment Verification<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Graduation                </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                Apply for Graduation<i className="fa fa-arrow-circle-up text-info"></i>
                                            </Well>
                                            <Well>
                                                View my Graduation Status<i className="fa fa-arrow-circle-up text-info"></i>
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
                                        Placement Testing                </Button>
                                        <Collapse in={this.state.open}>
                                        <div>
                                            <Well>
                                                ALEKS Math Place, Prep, Learn<i className="fa fa-arrow-circle-up text-info"></i>
                                            </Well>
                                            <Well>
                                                Writing Assessment<i className="fa fa-arrow-circle-up text-info"></i>
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

export default TableList;
