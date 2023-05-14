import React, { useState } from "react";
import  { useNavigate }   from "react-router-dom";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import {useDispatch} from 'react-redux';
import  {useFormik} from ' formik';
import {loginUserAction} from "../../redux/slices/users/usersSlices"



const login = ()=>{
  //dispatch
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit: values =>{
      dispatch(loginUserAction(values));
    }
  })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const navigate = useNavigate();

  if (authMode === "signin") {
    return (
      <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border-4 border-secondary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                 <h2 className="fw-bold mb-3 text-center text-info text-uppercase">Sign in</h2>
                <Form className="mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="info" type="submit" onClick={() => navigate("/HomePage")}>
                      Login
                    </Button>
                    
                   
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Don't have an account?{" "}

                    <span className="link-info" onClick={changeAuthMode}>
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }

  return (
   
     <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border-4 border-secondary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-3 text-center text-info text-uppercase">Sign up</h2>
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Your full name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUserName"
                    >
                      <Form.Label>Your user name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter user name"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUsername"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
                        />
                        <InputGroup.Text className="text-info">
                          @gmail.com
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="info" type="submit" onClick={() => navigate("/HomePage")}>
                      Sign Up
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account?{" "}
                    <span className="link-info" onClick={changeAuthMode}>
                      Sign In
                    </span>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
