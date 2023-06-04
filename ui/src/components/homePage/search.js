
import React, { useState } from 'react';

function Search() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const styles = {
    body: {
      margin: '0',
      padding: '0',
      fontFamily: 'Trebuchet MS, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },

    input: {
      minWidth: '40rem',
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
    search_Conatiner: {
      display: 'flex',
      justifyContent: 'center',
    },

    cards_Container: {
      display: 'none',
      margin: '15rem 0 5rem 0',
      // display: 'flex',
      // flexDirection: 'row',
      // justifyContent: 'center',
      // gap: '4rem',
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

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await fetch('http://localhost:5000/api/complete', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },      
              body: JSON.stringify({ 'input': input }),
          });

          if (response.ok) {
              const data = await response.json();
              setOutput(data.output);
          } else {
              console.error('Request failed with status:', response.status);
          }
      } catch (error) {
          console.error('Request failed:', error);
      }
  };

  return (
    <div style={styles.body}>
      <div className='search_Container' style={styles.search_Conatiner}>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='search-bar'
            placeholder='Search for a product'
            style={styles.input}
            onChange={handleInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
          
      

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

export default Search;