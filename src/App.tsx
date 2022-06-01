import React from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

import styled from "styled-components";

const AppStyles = styled.div``;

const App: React.FC = () => {
  return (
    <AppStyles>
      <LoginPage />
    </AppStyles>
  );
};

export default App;
