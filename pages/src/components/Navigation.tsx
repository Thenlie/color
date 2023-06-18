import type * as CSS from 'csstype';
import { ScreenTypes } from '../types';

interface NavigationStyles {
    container: CSS.Properties;
    title: CSS.Properties;
    buttonContainer: CSS.Properties;
    button: CSS.Properties;
}

const useStyles = (): NavigationStyles => {
    return {
        container: {
            padding: '8px',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: '32px'
        },
        buttonContainer: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0'
        },
        button: {
            cursor: 'pointer',
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: '24px',
            color: 'blue'
        }
    };
};

interface NavigationProps  {
    setPage: React.Dispatch<React.SetStateAction<ScreenTypes>>;
}

const Navigation = (props: NavigationProps) => {
    const styles = useStyles();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>COLORS</h1>
            <ul style={styles.buttonContainer}>
                <li style={styles.button} onClick={() => props.setPage(ScreenTypes.Home)}>Home</li>
                <li style={styles.button} onClick={() => props.setPage(ScreenTypes.Demo)}>Demo</li>
            </ul>
        </div>
    );
};

export default Navigation;