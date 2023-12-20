import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "./styles/global-styles";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    // wait for firebase
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
