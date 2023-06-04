import React from 'react';

function ProductRecommendation() {
    const styles = {
        body: {
            margin: '0',
            padding: '0',
            fontFamily: 'Trebuchet MS, sans-serif',
        },

        input_Container: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',

        },

        label: {
            marginBottom: '10rem',
        },

        input: {
            
            minWidth: '20rem',
            margin: '20px 0',
            padding: '20px',
            borderRadius: '30px',
            outline: 'none',
            border: '1px solid black',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            'hover': {
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
            }
        },

        cards_Container: {
            // display: 'none',
            margin: '15rem 0 5rem 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '4rem',
        },

        card1: {
            border: '1px solid black',
            minWidth: '14rem',
            minHeight: '24rem',
            borderRadius: '1rem',
            overflow: 'relative',

            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
        },
        card2: {
            border: '1px solid black',
            minWidth: '14rem',
            minHeight: '24rem',
            borderRadius: '1rem',
            overflow: 'hidden',

            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
        },
        card3: {
            border: '1px solid black',
            minWidth: '14rem',
            minHeight: '24rem',
            borderRadius: '1rem',
            overflow: 'hidden',

            display: 'flex',
            justifyContent: 'center',
            padding: '1rem'
        }
    };

    return (
        <div style={styles.body}>

            <br />
            <div className='input_container' style={styles.input_Container}>
                <label style={styles.label} >Product name: </label>
                <input
                    type='text'
                    className='search-bar'
                    placeholder='Search for a product'
                    style={styles.input}
                />
                <label>Product purpose: </label>
                <input
                    type='text'
                    className='search-bar'
                    placeholder='Search for a product'
                    style={styles.input}
                />
            </div>


            <button>Submit</button>

            <div className='cards_Container' style={styles.cards_Container}>
                <div className='card1' style={styles.card1}>
                    <h1>Card 1</h1>
                </div>

                <div className='card1' style={styles.card2}>
                    <h1>Card 2</h1>
                </div>

                <div className='card1' style={styles.card3}>
                    <h1>Card 3</h1>
                </div>
            </div>
        </div>
    );
}

export default ProductRecommendation;
