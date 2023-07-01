import { useContext } from 'react';
import { ThemeContext } from '../../../theme/src/theme';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <pre>{JSON.stringify(theme, undefined, 2)}</pre>
  );
};

export default Home;