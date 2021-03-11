import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const initialFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [value, setValue] = useState(initialFormValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_osjw227",
        "template_ym0eaqq",
        e.target,
        "user_9U9E83qI94Kf9ufWcapt7"
      )
      .then(
        (result) => {
          setValue(initialFormValues)
          window.alert(`Message has been sent!`)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={sendEmail}>
          <Typography variant="h5" className={classes.heading}>
            Contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            name="name"
            onChange={handleChange}
            value={value.name}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            name="email"
            onChange={handleChange}
            value={value.email}
          />
          <InputField
            fullWidth={true}
            label="Subject"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            name="subject"
            onChange={handleChange}
            value={value.subject}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            name="message"
            onChange={handleChange}
            value={value.message}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            type='submit'
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
