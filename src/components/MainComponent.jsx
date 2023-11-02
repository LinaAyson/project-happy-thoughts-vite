// import React, { useState, useEffect } from 'react';
// import ListContainer from './ListContainer'; 
// import './ListContainer.css';

// export default function MainComponent() {


//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }
//   //       const jsonData = await response.json();
//   //       setData(jsonData);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);


//   return (
//     <div>
//       {data.map((thought, index) => (
//         <ListContainer key={index} message={thought.message} />
//       ))}
//     </div>
//   );
// }