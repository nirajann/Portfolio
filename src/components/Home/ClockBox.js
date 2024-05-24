// import React, { useEffect, useState } from 'react';
// import styles from '../../style/Clockbox.css'; // Import CSS module

// const Clockbox = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateTime();
//     }, 1000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const updateTime = () => {
//     const newDate = new Date();
//     const hours = newDate.getHours();
//     const minutes = newDate.getMinutes();
//     const seconds = newDate.getSeconds();
//     const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
//     const dayNames= [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];
//     const month = monthNames[newDate.getMonth()];
//     const date = newDate.getDate();
//     const day = dayNames[newDate.getDay()];
//     const year = newDate.getFullYear();

//     setTime(newDate);
    
//     document.querySelector(".hour").innerHTML = (hours < 10 ? "0" : "") + hours;
//     document.querySelector(".minute").innerHTML = (minutes < 10 ? "0" : "") + minutes;
//     document.querySelector(".second").innerHTML = (seconds < 10 ? "0" : "") + seconds;
//     document.querySelector(".month span").innerText = month;
//     document.querySelector(".month2 span").innerText = month;
//     document.querySelector(".date span").innerText = date;
//     document.querySelector(".date2 span").innerText = date;
//     document.querySelector(".day span").innerText = day;
//     document.querySelector(".day2 span").innerText = day;
//     document.querySelector(".year span").innerText = year;
//   };

//   return (
//     <div className='Clockbox'>
//       <div className="signboard outer">
//         <div className="signboard front inner anim04c">
//           <li className="year anim04c">
//             <span></span>
//           </li>
//           <ul className="calendarMain anim04c">
//             <li className="month anim04c">
//               <span></span>
//             </li>
//             <li className="date anim04c">
//               <span></span>
//             </li>
//             <li className="day anim04c">
//               <span></span>
//             </li>
//           </ul>
//           <li className="clock minute anim04c">
//             <span></span>
//           </li>
//           <li className="calendarNormal date2 anim04c">
//             <span></span>
//           </li>
//         </div>
//         <div className="signboard leftwing inner anim04c">
//           <li className="clock hour anim04c">
//             <span></span>
//           </li>
//           <li className="calendarNormal day2 anim04c">
//             <span></span>
//           </li>
//         </div>
//         <div className="signboard rightwing inner anim04c">
//           <li className="clock second anim04c">
//             <span></span>
//           </li>
//           <li className="calendarNormal month2 anim04c">
//             <span></span>
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clockbox;
