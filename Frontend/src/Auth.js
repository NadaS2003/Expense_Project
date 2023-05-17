/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState , useEffect} from "react";
import  { useNavigate  }   from "react-router-dom";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import {useDispatch , useSelector} from 'react-redux';
import  {useFormik} from 'formik';
import {loginUserAction} from "../src/redux/slices/users/usersSlices"
import {registerUserAction} from "../src/redux/slices/users/usersSlices"
import DisabledButton from '../src/component/DisabledButton';
import * as Yup from "yup";


// form login validation
    const formLoginSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  // form login validation
    const formRegisterSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    username:Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  });


export default function Auth() {
 // history
  const navigate = useNavigate();
 
// for login 
  //dispatch  onClick={() => navigate("/HomePage")}  
   const dispatch = useDispatch();
  
  // get data from store
   const user = useSelector( state => state?.users)
   const {userLoading,userAppErr,userServerErr,userAuth} = user;
  
  const formik = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit: values =>{
      console.log(values);
      dispatch(loginUserAction(values));
    },
    validationSchema: formLoginSchema
  });

// for register
  const formiks = useFormik({
    initialValues:{
      name:"",
      username:"",
      email: "",
      password: "",
    },
    onSubmit: values =>{
      console.log(values);
      dispatch(registerUserAction(values));
    },
    validationSchema: formRegisterSchema
  });



  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

 
 // Redirect from login into homepage
   useEffect(()=>{
      if(userAuth){
        navigate("/HomePage");
      }
   },[userAuth]);

// Redirect from register into login 
     useEffect(()=>{
      if(userAuth){
         navigate("/HomePage");
      }
   },[userAuth]);

   
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
                 {userAppErr || userServerErr ?(
                  <div class="alert alert-danger" role="alert">
                      {userAppErr||userServerErr}
                  </div>
                 ) : null}
                <Form className="mb-3" onSubmit={formik.handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control type="email" value={formik.values.email} 
                    onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}
                    placeholder="Enter email" />
                  </Form.Group>
                  <div class="text-danger mb-2">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={formik.values.password} 
                    onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} placeholder="Password" />
                  </Form.Group>
                  <div class="text-danger mb-2">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <div className="d-grid">
                    {userLoading ? <DisabledButton/> : <Button variant="info" type="submit" >
                      Login
                    </Button>
                     }
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
                {userAppErr || userServerErr ?(
                  <div class="alert alert-danger" role="alert">
                      {userAppErr||userServerErr}
                  </div>
                 ) : null}
                <Form  onSubmit={formiks.handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Your full name
                      </Form.Label>
                      <Form.Control type="text" value={formiks.values.name} 
                    onChange={formiks.handleChange("name")} onBlur={formiks.handleBlur("name")} placeholder="Enter name" />
                    </Form.Group>
                    <div class="text-danger mb-2">
                    {formiks.touched.name && formiks.errors.name}
                  </div>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formUserName"
                    >
                      <Form.Label>Your user name</Form.Label>
                      <Form.Control
                        type="text"
                        value={formiks.values.username} 
                     onChange={formiks.handleChange("username")} onBlur={formiks.handleBlur("username")}
                        placeholder="Enter user name"
                      />
                    </Form.Group>
                    <div class="text-danger mb-2">
                    {formiks.touched.username && formiks.errors.username}
                  </div>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formEmail"
                    >
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="email"
                          value={formiks.values.email} 
                       onChange={formiks.handleChange("email")} onBlur={formiks.handleBlur("email")}
                          placeholder="Enter email"
                        />
                        <InputGroup.Text className="text-info">
                          @gmail.com
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                      <div class="text-danger mb-2">
                    {formiks.touched.email && formiks.errors.email}
                  </div>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={formiks.values.password} 
                    onChange={formiks.handleChange("password")} onBlur={formiks.handleBlur("password")} placeholder="Password" />
                    </Form.Group>
                    <div class="text-danger mb-2">
                    {formiks.touched.password && formiks.errors.password}
                  </div>
                  </Row>
                  <div className="d-grid">
                     {userLoading ? <DisabledButton/> : <Button variant="info" type="submit" >
                        Sign Up
                    </Button>
                     }
                  
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
