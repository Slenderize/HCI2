import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>2018-19 Verification Worksheet</MenuItem>
                        <MenuItem eventKey={2.2}>Parent's 2016 W-2 Form(s)</MenuItem>
                        <MenuItem eventKey={2.3}>Student's 2016 W-2 Form(s)</MenuItem>
                        <MenuItem eventKey={2.4}>Advising Hold</MenuItem>
                        <MenuItem eventKey={2.5}>Finance Hold</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Account</NavItem>

                    <NavItem eventKey={3} href="#">Log out</NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
