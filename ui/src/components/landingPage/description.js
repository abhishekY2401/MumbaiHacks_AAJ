import React from 'react';

const mainStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const imageStyle = {
    height: '30%',
    width: '50%',
    margin: '6% 0 0 0',
};

const descStyle = {
    textAlign: 'center',
};

const btnStyle = {
    padding: '0.7% 1.5%',
    borderRadius: '10px',
    backgroundColor: 'rgb(33,33,98)',
    color: 'white',
    fontSize: '20px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',

};

const btn2Style = {
    display: 'flex',
    justifyContent: 'center',
};

const h2 = {

    textAlign: 'center',
    margin: '0 0 2rem 0'

}

function LandingPage() {
    return (
        <div style={mainStyle}>
            <div style={logoStyle}>
                <img src="/ui/src/assets/sg-logo.png" alt="Error404" style={imageStyle} />
            </div>
            <h2 style={h2} >Search what are you planning to buy.</h2>
            <div style={descStyle}>
                <p><br /><br />
                    With our website, you can find the perfect product for your needs, without having to spend hours browsing through online stores. Simply enter your requirements, and we will provide you with a list of relevant products, along with reviews and ratings from other users. We also offer a variety of filters, so you can narrow down your search by price, brand, features, and more.
                    <br /><br />
                    Here are some of the features of our website:
                    <br /><br />
                    Our website has two parts:
                    <br /><br />
                    -&gt; Search your product: Enter a question about a product or ask a question about it if you're confused about which product to choose.
                    <br />
                    -&gt; Product recommendations: Provide the product you're interested in and its purpose, and we'll list the best products available on e-commerce websites like Amazon and Flipkart.
                    <br /><br />
                    We'd love to hear your feedback on our website. Please feel free to provide us with any questions or comments you may have at the "About Us" tab.
                    <br /><br />
                    We hope you enjoy using our website as much as we enjoyed making it!
                </p>
            </div>
            <div style={btn2Style}>
                <button style={btnStyle}>Home Page</button>
            </div>
        </div>
    );
}

export default LandingPage;