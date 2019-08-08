import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

/**FIREBASE */
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChangeHandler = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>حساب کاربری دارید؟</h2>
        <span>با ایمیل و پسورد خود وارد شوید</span>

        <form onSubmit={this.onSubmitHandler}>
          {/* EMAIL */}
          <FormInput
            name="email"
            type="text"
            label={"پست‌الکترونیک"}
            value={this.state.email}
            onInputChangeHandler={this.onInputChangeHandler}
            direction="left"
          />

          {/* PASSWORD */}
          <FormInput
            name="password"
            type="password"
            label={"رمزعبور"}
            value={this.state.password}
            onInputChangeHandler={this.onInputChangeHandler}
            direction="left"
          />

          <CustomButton type="submit">وارد شوید</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            با گوگل وارد شوید
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
