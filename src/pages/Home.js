import * as React from "react";
// import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import MainContent from "../components/mainContent/mainContent";
import { UserMenu } from "../components/userMenu/UserMenu";
import Footer from '../components/footer/Footer'
import SignIn from "../components/signIn/signIn";
import CityMap from "../components/cityMap/CityMap"; 

export default function Home({ renderData, setRenderData }) {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <UserMenu setRenderData={setRenderData} />
          <div style={{ flex: "1 1 auto" }}>
            <MainContent renderData={renderData} />
            {renderData && <CityMap cityName={renderData.name} />}
          </div>
          <Footer />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}
