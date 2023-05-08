// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import { styled } from "@mui/system";
// import { useNavigate } from "react-router-dom";

// export const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     ).then(() => {
//       navigate("/");
//     });
//     form.reset();
//   };

//   const StyledForm = styled("form")(({ theme }) => ({
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//     maxWidth: "700px",
//     width: "100%",
//     margin: "auto",
//     [theme.breakpoints.down("sm")]: {
//       width: "90%",
//     },
//   }));

//   const StyledContainer = styled("div")({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "100vw",
//   });


// const GoBackButton = styled("button")({
//   width: "100px",
//   backgroundColor: "#1976d2",
//   color: "white",
//   borderRadius: "4px",
//   border: "none",
//   padding: "8px 16px",
//   cursor: "pointer",
//   fontSize: "16px",
//   fontWeight: "bold",
//   "&:hover, &:focus": {
//     backgroundColor: "#115293",
//   },
// });



//   return (
//     <StyledContainer>
//       <StyledForm onSubmit={handleSubmit} autoComplete="off">
//         <Typography variant="h6">Register</Typography>
//         <TextField label="Username" name="name" variant="outlined" />
//         <TextField label="Email" name="email" type="email" variant="outlined" />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           variant="outlined"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Register
//         </Button>

//         {/* <GoBackButton>Go Back</GoBackButton> */}
//       </StyledForm>
//     </StyledContainer>
//   );
// };






import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({ name: "", email: "", password: "" });

  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const validateEmail = (email) => {
    const emailParts = email.split("@");
    return emailParts.length === 2 && emailParts[0].length >= 3;
  };

  const validatePassword = (password) => {
    return password.length >= 7;
  };

   const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    let validationError = {
      name: "",
      email: "",
      password: "",
    };

 if (!validateUsername(name)) {
  validationError.name = "Username must contain at least 3 characters";
}

if (!validateEmail(email)) {
  validationError.email = "E-mail must have at least 3 characters before @";
}

if (!validatePassword(password)) {
  validationError.password = "Password must contain at least 7 characters";
}


    if (validationError.name || validationError.email || validationError.password) {
      setErrorMessage(validationError);
      return;
    }

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    ).then(() => {
      navigate("/");
    });
    form.reset();
  };

  const StyledForm = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "700px",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));

  const StyledContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  });

  const GoBackButton = styled("button")({
  width: "100px",
  backgroundColor: "#1976d2",
  color: "white",
  borderRadius: "4px",
  border: "none",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  "&:hover, &:focus": {
    backgroundColor: "#115293",
  },
});

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6">Register</Typography>
        <TextField
          label="Username"
          name="name"
          variant="outlined"
          error={!!errorMessage.name}
          helperText={errorMessage.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          error={!!errorMessage.email}
          helperText={errorMessage.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          error={!!errorMessage.password}
          helperText={errorMessage.password}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>

        <GoBackButton onClick={handleGoBack}>Go Back</GoBackButton>
      </StyledForm>
    </StyledContainer>
  );
};

