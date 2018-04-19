import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { MenuItem, DropdownButton } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import { thArray, tdArray } from 'variables/Variables.jsx';

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="My Academics"
                category="Bill Nye"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <div>
                        <DropdownButton
                          title="Menu"
                          type="button"
                          id="basic-nav-dropdown-right"
                        >
                          <center>
                            <h6>My Academics</h6>
                          </center>
                          <MenuItem eventKey={1}>Home</MenuItem>
                          <MenuItem eventKey={2}>My Advising Center</MenuItem>
                          <MenuItem eventKey={3}>Search</MenuItem>
                          <MenuItem eventKey={4}>Plan</MenuItem>
                          <MenuItem eventKey={5}>Enrollment</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={6}>Separated link</MenuItem>
                        </DropdownButton>
                      </div>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
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
