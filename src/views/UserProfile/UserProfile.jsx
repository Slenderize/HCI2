import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

class UserProfile extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                                            proprieties = {[
                                                {
                                                 label : "Unversity (disabled)",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Unversity",
                                                 defaultValue : "Unversity of Massachusetts Lowell",
                                                 disabled : true
                                                },
                                                {
                                                 label : "Student ID",
                                                 type : "number",
                                                 bsClass : "form-control",
                                                 placeholder : "ID",
                                                 defaultValue : "0123420",
                                                 disabled : true
                                                },
                                                {
                                                 label : "Email address (disabled)",
                                                 type : "email",
                                                 bsClass : "form-control",
                                                 placeholder : "Email",
                                                 defaultValue : "Bill_Nye@student.uml.edu",
                                                 disabled : true
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-6" , "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 label : "First name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "First name",
                                                 defaultValue : "Bill"
                                                },
                                                {
                                                 label : "Last name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Last name",
                                                 defaultValue : "Nye"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Adress",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Home Adress",
                                                    defaultValue : "220 Pawtucket St, Lowell, MA 01854"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-4","col-md-4","col-md-4"]}
                                            proprieties = {[
                                                {
                                                    label : "City",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "City",
                                                    defaultValue : "Lowell"
                                                },
                                                {
                                                    label : "State",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "State",
                                                    defaultValue : "MA"
                                                },
                                                {
                                                    label : "Postal Code",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "ZIP Code",
                                                    defaultValue : "01854"
                                                }
                                            ]}
                                        />

                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="Something Here?"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            bsStyle="info"
                                            pullRight
                                            fill
                                            type="submit"
                                        >
                                            Update Profile
                                        </Button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                        <Col md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar="https://pbs.twimg.com/profile_images/606232291438829568/8liw3txV_400x400.jpg"
                                name="Bill Nye"
                                userName="Student ID: 0123420"
                                description={
                                    <span>
                                    
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default UserProfile;
