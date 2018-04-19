import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';

import { Card } from 'components/Card/Card.jsx';
import { StatsCard } from 'components/StatsCard/StatsCard.jsx';
import { Tasks } from 'components/Tasks/Tasks.jsx';
import {
  //dataPie,
  //legendPie,
  //dataSales,
  //optionsSales,
  //responsiveSales,
  //legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from 'variables/Variables.jsx';

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json['names'].length; i++) {
      var type = 'fa fa-circle text-' + json['types'][i];
      legend.push(<i className={type} key={i} />);
      legend.push(' ');
      legend.push(json['names'][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-date text-info" />}
                statsText="My Schedule"
                statsValue="Spring 2018"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-pencil-square text-info" />}
                statsText="Grades"
                statsValue="GPA: X.XX"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-clock text-info" />}
                statsText="Exam Schedule"
                statsValue="May 1-5"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the XX days XX hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-lock text-danger" />}
                statsText="Holds"
                statsValue="2"
                statsIconText="Advising, Finace"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-list text-danger" />}
                statsText="To Do List"
                statsValue="3"
                statsIconText="Verfification Worksheet, W-2 Form(s)"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-pencil-square text-info" />}
                statsText="Enrollment"
                statsValue="Enrollment"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="Register for classes"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-money text-warning" />}
                statsText="Finance"
                statsValue="Financial Aid"
                statsIconText="Student Financial Center, Financial Aid Center"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-news-paper text-info" />}
                statsText="Academic Advisement"
                statsValue="Report"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-book text-info" />}
                statsText="My Academics"
                statsValue="Page"
                statsIconText="Access all of your school general information here"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-users text-info" />}
                statsText="My Advising Center"
                statsValue="Summary"
                statsIconText="Access Institution/Career/Program, Level/Load, ..."
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-columns text-info" />}
                statsText="Course Catalog"
                statsValue="My Planner"
                statsIconText="Plan by My Requirements"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-table text-info" />}
                statsText="Enrollment Dates"
                statsValue="Fall 2018"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="You may begin enrolling for the 2018 Fall Regular Academic Session on April 10, 2018."
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-user text-info" />}
                statsText="Personal Information"
                statsValue="Contract Info"
                statsIconText="User Preferences, Emergency Contact, Demographic Data"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-handshake-o text-warning" />}
                statsText="Adviser"
                statsValue="Benyuan Liu"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-search text-info" />}
                statsText="Search for Classes"
                statsValue="Subject/Course"
                statsIcon={<i className="fa fa-search" />}
                statsIconText="Search Subject by Course Number"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-key text-info" />}
                statsText="Grant Addl Acct Access"
                statsValue="Access Users"
                statsIcon={<i className="fa fa-plus" />}
                statsIconText="Grant Authorized Users to others"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-external-link text-info" />}
                statsText="UML Campus Links"
                statsValue="Additional Info"
                statsIcon={<i className="fa fa-link" />}
                statsIconText="Solution Center, UML ALERT, TMS Payment Plans"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} />
            <Col md={4} />
          </Row>

          <Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                title="Tasks"
                category="To Do List"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
