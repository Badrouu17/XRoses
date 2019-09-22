import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Joi from "@hapi/joi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  state = {
    account: {
      email: ""
    }
  };

  schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    })
  });

  handleInputChange = e => {
    this.setState({ account: { email: e.currentTarget.value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { error } = this.schema.validate(this.state.account);
    if (error) {
      toast.error("Incorrect Email Address");
    } else {
      toast.success("Your email has been send successfully");
    }
    this.setState({ account: { email: "" } });
  };

  render() {
    return (
      <div id="Contact">
        <h2 className="contact-title">You like our work ? Contact us</h2>
        <div className="contact-dsc">
          <h4>
            Send us your email address and we will contact you as fast as
            possible.
          </h4>
        </div>
        <div className="contact-form">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleInputChange}
                  value={this.state.account.email}
                />
              </Form.Group>
              <Button
                onClick={this.handleSubmit}
                block
                variant="danger"
                type="submit"
              >
                Send
              </Button>
            </Form.Row>
          </Form>
        </div>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}></ToastContainer>
      </div>
    );
  }
}

export default Contact;
