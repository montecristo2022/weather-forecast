// import { useDispatch } from "react-redux";
// import { logOut } from "../../redux/auth/operations";
// import { useAuth } from "../../hooks/useAuth";

// import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import { fetchData } from "../../Api/Api";

// const Input = styled(TextField)({
//   backgroundColor: "white",
//   borderRadius: "4px",
//   width: "300px",
//   marginLeft: "auto",
//   marginRight: "auto",
// });

// const FindButton = styled(Button)({
//   height: "100%",
//   padding: "14px",
// });

// export const UserMenu = (props) => {
//   const dispatch = useDispatch();
//   const { setRenderData } = props;
//   const [searchText, setSearchText] = useState("London");

//   const handleFetchData = async () => {
//     const weatherData = await fetchData(searchText);
//     console.log(searchText);
//     console.log(props);
//     setSearchText(""); // Clear the text in the input
//     setRenderData(weatherData);
//   };

//   useEffect(() => {
//     const fetchWeatherDataAsync = async () => {
//       const weatherData = await fetchData(searchText);
//       setRenderData(weatherData);
//     };
//     fetchWeatherDataAsync();
//   }, []);

//   return (
//     <AppBar position="static">
//       <Toolbar sx={{ py: 2 }}>
//         <Box sx={{ display: "flex", alignItems: "center" }}>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 1 }}>
//             Weather Forecast
//           </Typography>
//           {/* <img src={CloudSvgIcon} alt="cloud logo" width="36" height="36" /> */}
//         </Box>

//         <Box sx={{ mx: "auto" }}>
//           <Input
//             placeholder="Find location"
//             onChange={(event) => setSearchText(event.target.value)}
//             value={searchText}
//             sx={{ mx: 2 }}
//           />
//           <FindButton
//             variant="contained"
//             color="primary"
//             onClick={handleFetchData}
//             disabled={searchText.length === 0}
//           >
//             Find
//           </FindButton>
//         </Box>
//         <FindButton
//           variant="contained"
//           color="primary"
//           onClick={() => dispatch(logOut())}
//         >
//           Log out
//         </FindButton>
//       </Toolbar>
//     </AppBar>
//   );
// };



import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { fetchData } from "../../Api/Api";

const Input = styled(TextField)({
  backgroundColor: "white",
  borderRadius: "4px",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
});

const FindButton = styled(Button)({
  height: "100%",
  padding: "14px",
});

export const UserMenu = (props) => {
  const dispatch = useDispatch();
  const { setRenderData } = props;
  const [searchText, setSearchText] = useState("London");

  const handleFetchData = async () => {
    const weatherData = await fetchData(searchText);
    console.log(searchText);
    console.log(props);
    setSearchText(""); // Clear the text in the input
    setRenderData(weatherData);
  };

  useEffect(() => {
    const fetchWeatherDataAsync = async () => {
      const weatherData = await fetchData(searchText);
      setRenderData(weatherData);
    };
    fetchWeatherDataAsync();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFetchData();
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ py: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 1 }}>
            Weather Forecast
          </Typography>
          {/* <img src={CloudSvgIcon} alt="cloud logo" width="36" height="36" /> */}
        </Box>

        <Box sx={{ mx: "auto" }}>
          <Input
            placeholder="Find location"
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={handleKeyDown}
            value={searchText}
            sx={{ mx: 2 }}
          />
          <FindButton
            variant="contained"
            color="primary"
            onClick={handleFetchData}
            disabled={searchText.length === 0}
          >
            Find
          </FindButton>
        </Box>
        <FindButton
          variant="contained"
          color="primary"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </FindButton>
      </Toolbar>
    </AppBar>
  );
};
