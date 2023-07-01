import { useContext } from "react";
import { ThemeContext } from "../../../theme/src/theme";

const Home = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <p>Home Screen</p>
  );
};

export default Home;