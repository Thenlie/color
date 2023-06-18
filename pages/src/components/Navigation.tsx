import type * as CSS from 'csstype';

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
            marginRight: '10px',
            marginLeft: '10px',
            fontSize: '24px',
            color: 'blue'
        }
    }
}

const Navigation = () => {
    const styles = useStyles();

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>COLORS</h1>
            <ul style={styles.buttonContainer}>
                <li style={styles.button}>Home</li>
                <li style={styles.button}>Demo</li>
            </ul>
        </div>
    )
};

export default Navigation;