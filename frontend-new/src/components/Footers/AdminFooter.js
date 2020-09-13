/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
        <>
          <footer className="py-5">
            <Container>
              <Row className="align-items-center justify-content-xl-between">
                <Col xl="6">
                  <div className="copyright text-center text-xl-left text-muted">
                    © 2020{" "}
                    <a
                        className="font-weight-bold ml-1"
                        href="https://github.com/tharuja"
                        target="_blank"
                    >
                      Tharuja
                    </a>
                  </div>
                </Col>

              </Row>
            </Container>
          </footer>
        </>
    );
  }
}

export default Footer;