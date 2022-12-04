import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Button, Form} from 'react-bootstrap';
import {loginUser} from '../../utilities/ServerCall';
import {setSession} from '../../utilities/Common';
import * as yup from 'yup';

import './login.css';

const Login = () => {

    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (user) => {
        setLoading(true);
        try {
            const data = await loginUser(user);
            setSession(data.person, data.token);
            setLoading(false);
            window.location.href = "/";
        } catch (e) {
            console.log(e);
            setLoginError(true);
        }
        setLoading(false);
    }

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email("*Email must be valid")
            .max(320, "*Email must be less than 320 characters")
            .required("*Email is required"),
        password: yup.string()
            .required("*Password is required")
    });

    return (
        <div className="login-container">
            <div className="login-title">
                SIGN IN
            </div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={handleSubmit}
            >
                {({
                      handleSubmit,
                      handleChange,
                      touched,
                      errors,
                  }) => (
                    <Form noValidate className="login-form" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                defaultValue={""}
                                onChange={handleChange}
                                isInvalid={(touched.email && errors.email) || loginError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                defaultValue={""}
                                onChange={handleChange}
                                isInvalid={(touched.password && errors.password) || loginError}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button disabled={loading} block type="submit">
                            LOGIN
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
