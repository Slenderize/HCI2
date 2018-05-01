import React, { Component } from 'react';
import { Grid, Row, Col, MenuItem, DropdownButton, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var products = [{
    id: "Media Computing",
    name: "COMP.1000",
    price: "91.101"
},{
    id: "Computing I",
    name: "COMP.1010",
    price: "91.100"
},{
    id: "Computing II",
    name: "COMP.1020",
    price: "91.102"
},{
    id: "Computing I Lab",
    name: "COMP.1030L",
    price: "91.103"
},{
    id: "Computing II Lab",
    name: "COMP.1040L",
    price: "91.104"
},{
    id: "Intro to App Des & Mobile Comp",
    name: "COMP.1080",
    price: "91.108"
},{
    id: "Undeclared Science Seminar",
    name: "COMP.1120",
    price: "91.112"
},{
    id: "Exploring the Internet",
    name: "COMP.1130",
    price: "91.113"
},{
    id: "Topics in Computer Science",
    name: "COMP.1500",
    price: "91.150"
},{
    id: "Computing III",
    name: "COMP.2010",
    price: "91.201"
},{
    id: "Computing III Lab",
    name: "COMP.2010L",
    price: "91.201"
},{
    id: "Assembly Language Programming",
    name: "COMP.2030",
    price: "91.203"
},{
    id: "Assembly Language Programming Lab",
    name: "COMP.2030L",
    price: "91.203"
},{
    id: "Computing IV",
    name: "COMP.2040",
    price: "91.204"
},{
    id: "Computer Science for SRT Applications",
    name: "COMP.2110",
    price: "91.211"
},{
    id: "Special Topics: Sound Thinking",
    name: "COMP.2120",
    price: "91.212"
},{
    id: "Organization of Programming Languages",
    name: "COMP.3010",
    price: "91.301"
},{
    id: "Foundations of Computer Science",
    name: "COMP.3040",
    price: "91.304"
},{
    id: "Computer Architecture ",
    name: "COMP.3050",
    price: "91.305"
},{
    id: "Operating Systems",
    name: "COMP.3080",
    price: "91.308"
},{
    id: "Database I",
    name: "COMP.3090",
    price: "91.309"
},{
    id: "Database II",
    name: "COMP.3100",
    price: "91.310"
},{
    id: "Special Topics",
    name: "COMP.3500",
    price: "91.350"
},{
    id: "Introduction to Computer Security",
    name: "COMP.3611",
    price: "039802"
},{
    id: "Software Project I",
    name: "COMP.4010",
    price: "91.401"
},{
    id: "Software Project II",
    name: "COMP.4020",
    price: "91.402"
},{
    id: "Analysis of Algorithms",
    name: "COMP.4040",
    price: "91.404"
},{
    id: "Parallel Processing",
    name: "COMP.4050",
    price: "91.405"
},{
    id: "Compiler Construction I",
    name: "COMP.4060",
    price: "91.406"
},{
    id: "Software Engineering I",
    name: "COMP.4110",
    price: "91.411"
},{
    id: "Software Engineering I",
    name: "COMP.4110",
    price: "91.411"
},{
    id: "Software Engineering II",
    name: "COMP.4120",
    price: "91.412"
},{
    id: "Data Communications I",
    name: "COMP.4130",
    price: "91.413"
},{
    id: "Data Communications II",
    name: "COMP.4140",
    price: "91.414"
},{
    id: "Data Mining",
    name: "COMP.4210",
    price: "91.421"
},{
    id: "Machine Learning",
    name: "COMP.4220",
    price: "91.422"
},{
    id: "Computer Vision I",
    name: "COMP.4230",
    price: "91.423 & 91.523"
},{
    id: "Computer Graphics I",
    name: "COMP.4270",
    price: "91.427"
},{
    id: "Computer Graphics II",
    name: "COMP.4280",
    price: "91.428"
},{
    id: "Bioinformatics for CS",
    name: "COMP.4290",
    price: "91.429"
},{
    id: "Natural Language Processing",
    name: "COMP.4420",
    price: "91.442 & 91.542"
},{
    id: "Mobile Robotics I",
    name: "COMP.4500",
    price: "91.450"
},{
    id: "Mobile Robotics II",
    name: "COMP.4510",
    price: "91.451"
},{
    id: "Computer Security",
    name: "COMP.4570",
    price: "91.457"
},{
    id: "Selected Topics",
    name: "COMP.4600",
    price: "91.460"
},{
    id: "Graphical User Interface Programming I",
    name: "COMP.4610",
    price: "91.461"
},{
    id: "Cyber Crime Investigation",
    name: "COMP.4611",
    price: "91.461"
},{
    id: "Graphical User Interface Programming II",
    name: "COMP.4620",
    price: "91.462"
},{
    id: "Mobile App Programming I",
    name: "COMP.4630",
    price: "91.463"
},{
    id: "Mobile App Programming II",
    name: "COMP.4640",
    price: "91.464"
}];

var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  };
  
class Typography extends Component {
    render() {
        const options = {
            page: 1,
            sizePerPageList: [ {
                text: '5', value: 5
              }, {
                text: '10', value: 10
              }, {
                text: '18', value: 18
              } ],  // which page you want to show as default
            sizePerPage: 14,  // which size per page you want to locate as default
            pageStartIndex: 1, // where to start counting the pages
            paginationSize: 3,  // the pagination bar size.
            prePage: 'Prev', // Previous page button text
            nextPage: 'Next', // Next page button text
            firstPage: 'First', // First page button text
            lastPage: 'Last', // Last page button text
            paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
            paginationPosition: 'bottom'  // default is bottom, top and both is all available
            // hideSizePerPage: true > You can hide the dropdown for sizePerPage
            // alwaysShowAllBtns: true // Always show next and previous button
            // withFirstAndLast: false > Hide the going to First and Last page button
          };
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                        <div>
                            <DropdownButton title="Menu" type="button" id="basic-nav-dropdown-right" >
                            <center><h6>Enrollment</h6></center>
                            <MenuItem eventKey={1}>Enrollment: Add Classes</MenuItem>
                            <MenuItem eventKey={2}>Enrollment: Drop Classes</MenuItem>
                            <MenuItem eventKey={3}>Enrollment: Swap Classes</MenuItem>
                            <MenuItem eventKey={4}>Enrollment: Edit a Classes</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5}>Home</MenuItem>
                            </DropdownButton>
                            <BootstrapTable data={ products } selectRow={selectRowProp} pagination={ true } options={ options } striped hover condensed search>
                            <TableHeaderColumn dataField='id' isKey filter={ { type: 'RegexFilter', delay: 1000, condition: 'eq' } }>Class Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='name' filter={ { type: 'RegexFilter', delay: 1000, condition: 'eq' } }>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='price' filter={ { type: 'TextFilter', delay: 1000, condition: 'eq' } }>Product Price</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                        <Button type="button" bsStyle="success">Add to Cart</Button>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Typography;
