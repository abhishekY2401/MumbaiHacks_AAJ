// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Import your components for different routes
// import Navbar from './components/navbar';
// import Search from './components/homePage/search';
// import Description from './components/landingPage/description';
// import Cards from './components/productRecommendation/cards';
// import About from './components/aboutUs/description';

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Define your navigation menu here */}
//         <Navbar />
//         {/* <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav> */}

//         {/* Define your routes here */}
//         <Router>
//         <Routes>
//           <Route exact path="/">
//             <Description />
//           </Route>
//           <Route path="/search">
//             <Search />
//           </Route>
//           <Route path="/cards">
//             <Cards />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//         </Routes>
//         </Router>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components for different routes
import Navbar from './components/navbar';
import Search from './components/homePage/search';
import Description from './components/landingPage/description';
import Cards from './components/productRecommendation/cards';
import About from './components/aboutUs/description';

function App() {
  return (
    <Router>
      <div>
        {/* Define your navigation menu here */}
        <Navbar />

        {/* Define your routes here */}
        <Routes>
          <Route exact path="/" element={<Description />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
