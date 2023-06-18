import { useState } from 'react';
import { Navigation } from './components';
import { Home, Demo } from './screens';
import { ScreenTypes } from './types';

const App = () => {
    const [page, setPage] = useState<ScreenTypes>(ScreenTypes.Home);

    return (
        <>
            <Navigation setPage={setPage} />
            {page === ScreenTypes.Home ? <Home /> : <Demo />}
        </>
    );
};

export default App;
