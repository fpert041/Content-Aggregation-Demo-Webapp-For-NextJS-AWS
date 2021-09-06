import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// MaterialUI styling for the page
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  })
);

// Register form inputs
interface IFormInput {
  email: string;
  password: string;
}

// Execute a JS script when a form is submitted to handle the submission (eg validation)
const onSubmit: SubmitHandler<IFormInput> = (data) => {
  console.log("Submitted the form data");
  console.log(data);
};

// regex patterns to validate form fields
const emailRegex = /\S+@\S+\.\S+/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
/** passwrod validation taken from:
 * https://stackoverflow.com/questions/3466850/regular-expression-to-enforce-complex-passwords-matching-3-out-of-4-rules
 * (?=.* {CARACTER_RULE} ) >> Lookahead expression
 * [A-Z] >> enforce presence of an uppercase character
 * [a-z] >> enforce presence of a lowercase character
 * \d >> enforce presence of a number
 * \ >> enforce presence of a non-alphanumeric character
 * Note: may be best to build a custom React Hook:
 * taken from https://medium.com/@steven_creates/creating-a-custom-react-hook-for-password-validation-46fc421c16ee
 **/

export default function Signup() {
  // use MaterialUI styles: https://material-ui.com/styles/basics/
  const classes = useStyles();

  // React Hook Forms declarations
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // Log errors to console if any upon submission
  console.log("Errors:", errors);

  // React component export function
  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {/** FORM FIELDS * HTML/CSS Class from MaterialUI * Registration through
      React Hook Forms */}
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Grid item>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            type="email" // can be any HTML5 types https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
            // register field
            {...register("email", {
              // add validatoion ruls
              required: { value: true, message: "Email is a required field" },
              minLength: {
                value: 4,
                message: "Emails must be longer than 4 characters",
              },
              pattern: {
                value: emailRegex,
                message: "Please enter a valid email",
              },
            })}
            // toggle "red error theme"
            error={errors.email ? true : false}
            // display error text
            helperText={errors.email ? errors.email.message : null}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="filled"
            type="password" // hide characters
            // register field
            {...register("password", {
              // add validatoion ruls
              required: {
                value: true,
                message: "Password is a required field",
              },
              minLength: {
                value: 8,
                message: "Password must be between 8 and 16 characters",
              },
              maxLength: {
                value: 16,
                message: "Password must be between 8 and 16 characters",
              },
              pattern: {
                value: passRegex,
                message:
                  "Not strong enough! Please use AT LEAST 1 UPPERCASE,1 lowercase, 1 number, and 1 special character",
              },
            })}
            // toggle "red error theme"
            error={errors.password ? true : false}
            // display error text
            helperText={errors.password ? errors.password.message : null}
          />
        </Grid>
        {/* FORM SUBMISSION */}
        <Grid item>
          {" "}
          <Button className={classes.root} type="submit" variant="contained">
            Sign up!
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
