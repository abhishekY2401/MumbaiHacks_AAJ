import React from 'react';

const contStyle = {
  width: '93%',
  maxWidth: '80%',
  textAlign: 'center',
  margin: '4% auto',
  padding: '30px 0',
  background: '#111',
  color: '#EEE',
  borderRadius: '10px',
  border: 'thin solid #444',
  overflow: 'hidden',
};


const titleStyle = {
  fontSize: '2em',
};


const starsStyle = {
  width: '270px',
  display: 'inline-block',
};

const starInputStyle = {
  display: 'none',
};

const starLabelStyle = {
  float: 'right',
  padding: '10px',
  fontSize: '36px',
  color: '#444',
  transition: 'all .2s',
  cursor: 'pointer',
};


const revBoxStyle = {
  overflow: 'hidden',
  height: '0',
  width: '100%',
  transition: 'all .25s',
};

const reviewTextAreaStyle = {
  background: '#222',
  border: 'none',
  width: '100%',
  maxWidth: '100%',
  height: '100px',
  padding: '10px',
  boxSizing: 'border-box',
  color: '#EEE',
};


const headingStyle = {
  textAlign: 'center',
  fontSize: '25px',
  fontWeight: '400',
};

const footerStyle = {
  display: 'flex',
};

const profCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imgStyle = {
  width: '50%',
  height: '100%',
};


function About() {
  return (
    <div>
      <div className="cont" style={contStyle}>
        <div className="title" style={titleStyle}>
          <h1>About Us</h1>
        </div>
      </div>

      <div className="cont" style={contStyle}>
        <div className="stars" style={starsStyle}>
          <form action="">
            <p className="heading" style={headingStyle}>click the stars</p>
            <input className="star star-5" id="star-5-2" type="radio" name="star" style={starInputStyle} />
            <label className="star star-5" htmlFor="star-5-2" style={starLabelStyle}></label>
            <input className="star star-4" id="star-4-2" type="radio" name="star" style={starInputStyle} />
            <label className="star star-4" htmlFor="star-4-2" style={starLabelStyle}></label>
            <input className="star star-3" id="star-3-2" type="radio" name="star" style={starInputStyle} />
            <label className="star star-3" htmlFor="star-3-2" style={starLabelStyle}></label>
            <input className="star star-2" id="star-2-2" type="radio" name="star" style={starInputStyle} />
            <label className="star star-2" htmlFor="star-2-2" style={starLabelStyle}></label>
            <input className="star star-1" id="star-1-2" type="radio" name="star" style={starInputStyle} />
            <label className="star star-1" htmlFor="star-1-2" style={starLabelStyle}></label>
            <div className="rev-box" style={revBoxStyle}>
              <textarea className="review" col="30" name="review" placeholder="Brief Review" style={reviewTextAreaStyle}></textarea>
            </div>
          </form>
        </div>
      </div>

      <div className="cont" style={contStyle}>
        <p className="heading" style={headingStyle}>All Devs:</p>
        <div className="footer" style={footerStyle}>
          <br />
          <div className="prof-card" style={profCardStyle}>
            <img src="./1232369.jpg" alt="404" className="img" style={imgStyle} /><br />
            <label>Name: Aagam Bharat Shah</label><br />
            <label>Email: shahaagam2314@gmail.com</label><br />
            <label>LinkedIn ID: <a href="https://www.linkedin.com/in/aagam-shah-28a87a193/">Aagam Shah</a></label>
          </div>
          <div className="prof-card" style={profCardStyle}>
            <img src="./1232369.jpg" alt="404" className="img" style={imgStyle} /><br />
            <label>Name: Aagam Bharat Shah</label><br />
            <label>Email: shahaagam2314@gmail.com</label><br />
            <label>LinkedIn ID: <a href="https://www.linkedin.com/in/aagam-shah-28a87a193/">Aagam Shah</a></label>
          </div>
          <div className="prof-card" style={profCardStyle}>
            <img src="./1232369.jpg" alt="404" className="img" style={imgStyle} /><br />
            <label>Name: Aagam Bharat Shah</label><br />
            <label>Email: shahaagam2314@gmail.com</label><br />
            <label>LinkedIn ID: <a href="https://www.linkedin.com/in/aagam-shah-28a87a193/">Aagam Shah</a></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;