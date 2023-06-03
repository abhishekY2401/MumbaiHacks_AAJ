import React from 'react';

function Navbar() {
    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
            backgroundColor: 'rgb(33,33,98)',
            color: 'white'
        },

        ul: {
            display: 'flex',
            justifyContent: 'center',
            color: 'white'
        },

        li: {
            listStyle: 'none',
            padding: '0px 20px',
            color: 'white',
            fontSize: '20px',
        },
        a: {
            textDecoration: 'none',
            color: 'white'
        },

        left:{
            display: 'flex',
            justifyContent: 'flex-start',
            marginRight: '10px'
        }
    };

    return (
        <div>
            <nav style={styles.nav}>
                <div className="left">
                    <h2>Shopping Genie</h2>
                </div>
                <div className="right">
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <a href="/" style={styles.a}>Home</a>
                        </li>
                        <li style={styles.li}>
                            <a href="/" style={styles.a}>About</a>
                        </li>
                        <li style={styles.li}>
                            <a href="/" style={styles.a}>Projects</a>
                        </li>
                        <li style={styles.li}>
                            <a href="./contact.html" target="_blank" style={styles.a}>Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
