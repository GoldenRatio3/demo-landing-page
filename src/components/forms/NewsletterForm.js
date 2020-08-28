import React, { Component } from "react";
import classnames from "classnames";
import { Button } from "@material-ui/core";

class NewsletterForm extends Component {
  state = {
    email: "",
  };

  render() {
    const { className, submit = "Submit" } = this.props;
    const classNames = classnames(
      "newsletter-form field field-grouped is-revealing",
      className
    );

    return (
      <form className={classNames}>
        <div className="control control-expanded">
          <input
            style={{ borderRadius: "14px" }}
            className="input"
            type="email"
            name="email"
            placeholder="Your best email&hellip;"
          />
        </div>
        <div className="control">
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "14px" }}
            type="submit"
          >
            {submit}
          </Button>
        </div>
      </form>
    );
  }
}

export default NewsletterForm;
