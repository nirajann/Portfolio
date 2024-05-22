import React, { useRef, useEffect } from 'react';
import '../../style/Notfound.css'; // Assuming you have a CSS file for NotFound section

const NotFound = () => {
    const handleReportClick = () => {
        alert("Report successful");
        <a onClick={handleReportClick}  >Report</a>
      };

  return (
    <>
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
				<h2>Page not found</h2>
			</div>
			<a href="#" onClick={handleReportClick} >Report</a>
					<a href="/" target="_blank">Homepage</a>
     
		</div>
	</div>

    </>
  );
};

export default NotFound;
