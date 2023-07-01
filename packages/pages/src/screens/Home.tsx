import { useContext } from 'react';
import { ThemeContext } from '../../../rgbee/src/theme';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <pre>{JSON.stringify(theme, undefined, 2)}</pre>
  );
};

export default Home;