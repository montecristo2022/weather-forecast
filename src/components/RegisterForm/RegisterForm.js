import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
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
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <Typography variant="h6">Register</Typography>
        <TextField label="Username" name="name" variant="outlined" />
        <TextField label="Email" name="email" type="email" variant="outlined" />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};
