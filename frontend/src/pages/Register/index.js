import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Button, Form} from 'react-bootstrap';
import {registerUser} from '../../utilities/ServerCall';
import {getUser, removeSession, setSession} from '../../utilities/Common';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

import './register.css';

const Register = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({});

    useEffect(() => {
        return () => {
            setState({}); // This worked for me
        };
    }, []);
    const handleSubmit = async (user) => {
        setLoading(true);
        try {
            removeSession();
            await registerUser(user);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        navigate("/",  { replace: true } );
        window.location.reload();
    }

    let whitespaceRegex = new RegExp("^(?!\\s+$).*");
    let nameRegex = new RegExp("^[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽĐ][a-zA-Zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžđ∂ðÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽĐ ,.'-]+$", "g");

    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .min(2, "*First name must have at least 2 characters")
            .max(50, "*First name can't be longer than 50 characters")
            .required("*First name is required")
            .test("whitespace-test", "*First name is not valid", value => whitespaceRegex.test(value))
            .matches(nameRegex, "First name is not valid"),
        lastName: yup.string()
            .min(2, "*Last name must have at least 2 characters")
            .max(50, "*Last name can't be longer than 50 characters")
            .required("*Last name is required")
            .test("whitespace-test", "*Last name is not valid", value => whitespaceRegex.test(value))
            .matches(nameRegex, "Last name is not valid"),
        email: yup.string()
            .email("*Email must be valid")
            .max(320, "*Email must be less than 320 characters")
            .required("*Email is required"),
        password: yup.string()
            .max(128, "*Password can't be longer than 128 characters")
            .matches(
                /^(?=.*?[A-ZÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽĐ])(?=(.*[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžđ∂ð])+)(?=(.*[\d])+)(?!.*\s).{8,}$/,
                "Password must contain 8 characters, one uppercase, one lowercase and one number"
            )
            .required("*Password is required"),
    });

    return (
        <div className="register-container">
            <div className="register-title">
                SIGN UP
            </div>
            <Formik
                validationSchema={validationSchema}
                initialValues={{firstName: "", lastName: "", email: "", password: ""}}
                onSubmit={handleSubmit}
            >
                {({
                      handleSubmit,
                      handleChange,
                      touched,
                      errors,
                  }) => (
                    <Form noValidate className="register-form" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                isValid={touched.firstName && !errors.firstName}
                                isInvalid={touched.firstName && errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                                isInvalid={touched.lastName && errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={(touched.email && errors.email) || emailError}
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
                                onChange={handleChange}
                                isValid={touched.password && !errors.password}
                                isInvalid={touched.password && errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button disabled={loading} style={{marginTop: 80}} block
                                type="submit">
                            SIGN UP
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;
