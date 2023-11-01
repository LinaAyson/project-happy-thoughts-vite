// import React from "react";
// import { useEffect, useState } from "react";

// export default function Example() {
//   const [name, setName] = useState("");
//   const [windowWidth, setWindowWidth] = useState("");

//   useEffect(() => {
//     console.log("---RUNNING ONCE");
//   }, []);

//   useEffect(() => {
//     console.log("Runs after the initial render and when the name changes");
//   }, [name]);

//   const updateWindowWidth = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     console.log("Attach listener");
//     window.addEventListener("resize", updateWindowWidth);

//     return () => {
//       console.log("Detach Listener");
//       window.removeEventListener("resize", updateWindowWidth);
//     };
//   }, []);

//   return (
//     <div>
//       <h3>Example of Use Effect</h3>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="type a name..."
//       />
//     </div>
//   );
// }
