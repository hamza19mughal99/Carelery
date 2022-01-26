import React, { useState } from "react";
import "./Auth.scss";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as MdIcon from "react-icons/md";
import * as RiIcon from "react-icons/ri";
import * as AiIcon from "react-icons/ai";
import Divider from "../../assets/img/auth-divider.png";
import Logo from "../../assets/img/Combined_Logo.png";
import { AuthValidation } from "./AuthValidation";

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

enum AUTH_TOGGLE {
  LOGIN = "login",
  REGISTER = "register",
}


const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>();

  const [authToggle, setAuthToggle] = useState(AUTH_TOGGLE.LOGIN);
  const onSubmit = handleSubmit((data) => console.log(data));
  const getErrorInputClass = (field: string) => {
    if (errors.hasOwnProperty(field)) {
      return "error_input";
    }
  };

  const authToggleHandler = () => {
    if (authToggle === AUTH_TOGGLE.LOGIN) {
      setAuthToggle(AUTH_TOGGLE.REGISTER);
    } else if (authToggle === AUTH_TOGGLE.REGISTER) {
      setAuthToggle(AUTH_TOGGLE.LOGIN);
    }
  };

  const registerForm = (
    <React.Fragment>
      <h2>Create Account</h2>
      <Form className="auth_form" onSubmit={onSubmit}>
        <Form.Group className={"input_container"}>
          <MdIcon.MdPersonOutline className={getErrorInputClass("name")} />
          <Form.Control
            type="text"
            placeholder={"Enter your full name"}
            className={getErrorInputClass("name")}
            {...register("name", AuthValidation.name)}
          />
          <p className={"error_input_message"}>{errors.name?.message}</p>
        </Form.Group>
        <Form.Group className={"input_container"}>
          <RiIcon.RiMailSendLine className={getErrorInputClass("email")} />
          <Form.Control
            type="email"
            placeholder={"Enter email address"}
            className={getErrorInputClass("email")}
            {...register("email", AuthValidation.email)}
          />
          <p className={"error_input_message"}>{errors.email?.message}</p>
        </Form.Group>
        <Form.Group className={"input_container"}>
          <AiIcon.AiOutlineLock className={getErrorInputClass("password")} />
          <Form.Control
            type="text"
            placeholder={"Enter Password"}
            className={getErrorInputClass("password")}
            {...register("password", AuthValidation.password)}
          />
          <p className={"error_input_message"}>{errors.password?.message}</p>
        </Form.Group>
        <div className={"text-center"}>
          <img alt={"divider"} src={Divider} />
        </div>
        <button className={"mt-3"}>CREATE AN ACCOUNT</button>
        <div className="text-center w-100 mt-3">
          <p className={"auth_switch"}>
            Already have an account ?{" "}
            <span onClick={authToggleHandler}>Sign In</span>
          </p>
        </div>
      </Form>
    </React.Fragment>
  );

  const loginForm = (
    <React.Fragment>
      <h2>Log In Account</h2>
      <Form className={"auth_form"} onSubmit={onSubmit}>
        <Form.Group className={"input_container"}>
          <RiIcon.RiMailSendLine className={getErrorInputClass("email")} />
          <Form.Control
            type="email"
            placeholder={"Enter email address"}
            className={getErrorInputClass("email")}
            {...register("email", AuthValidation.email)}
          />
          <p className={"error_input_message"}>{errors.email?.message}</p>
        </Form.Group>
        <Form.Group className={"input_container"}>
          <AiIcon.AiOutlineLock className={getErrorInputClass("password")} />
          <Form.Control
            type="text"
            placeholder={"Enter Password"}
            className={getErrorInputClass("password")}
            {...register("password", AuthValidation.password)}
          />
          <p className={"error_input_message"}>{errors.password?.message}</p>
        </Form.Group>
        <div className={"text-center"}>
          <img alt={"divider"} src={Divider} />
        </div>
        <button className={"mt-3"}>Sign In</button>
        <div className="text-center w-100 mt-3">
          <p className={"auth_switch"}>
            Not a member ? <span onClick={authToggleHandler}>Sign Up</span>
          </p>
        </div>
      </Form>
    </React.Fragment>
  );

  const authForm = () => {
    if (authToggle === AUTH_TOGGLE.REGISTER) {
      return registerForm;
    } else if (authToggle === AUTH_TOGGLE.LOGIN) {
      return loginForm;
    }
  };

  return (
    <div className={"bg_img"}>
      <div className={"card_view"}>
        <Row className={"h-100"}>
          <Col md={6} className={"left_section"}>
            <div className={"welcome_carelery text-center"}>
              <h2>Welcome To</h2>
              <img alt={"Logo"} src={Logo} />
              <p>
                Carerely is an all in one social media platform that provides
                you with everything you’ll need to get fit & active.
              </p>
            </div>
          </Col>
          <Col md={6} className={"right_section"}>
            {authForm()}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Auth;
