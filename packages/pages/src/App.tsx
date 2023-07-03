import { useState } from 'react';
import { Navigation } from './components';
import { Home, Demo } from './screens';
import { ScreenTypes } from './types';
import { ThemeProvider } from 'rgbee/src/theme';

const App = () => {
  const [page, setPage] = useState<ScreenTypes>(ScreenTypes.Home);
  const palette = {
    primary: '#ffff00',
    secondary: '#0fff00',
    action: '#000fff'
  };
    
  return (
    <ThemeProvider palette={palette}>
      <Navigation setPage={setPage} />
      {page === ScreenTypes.Home ? <Home /> : <Demo />}
    </ThemeProvider>
  );
};

export default App;
