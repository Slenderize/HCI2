import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Grid>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#pablo">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="https://www.uml.edu/about/email.aspx">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                   Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="https://www.uml.edu">University of Massachusetts Lowell</a>, Rowdy the River Hawk
                    </p>
                </Grid>
            </footer>
		);
	}
}

export default Footer;
