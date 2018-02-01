// // // // // // // // // //
//
//       About Project
//
// // // // // // // // // //

import React    from 'react';
import { Link } from 'react-router-dom';

export default function AboutProjectPage(props) {
    return(
        <div className="about-project-page">
            <p>This project was created by Thinkful, a new type of school which provides 1-on-1 learning with industry experts to bring high growth tech careers to ambitious people everywhere. We are educators and technologists who urge congress to permanently reinstate the 2015 net neutrality regulations.</p>

            <p><Link to="https://www.mikeschmerbeck.com" target="_blank">Mike Schmerbeck</Link>, a recent Thinkful graduate, built this site using the <Link to="http://mern.io/" target="_blank">MERN</Link> stack. A free and open internet allowed Mike to pursue his dream to become a web developer.</p>

            <p>For press inquiries, please email Robin Olsen, Thinkful's Head of Communications at <Link to="mailto:robin.olsen@thinkful.com">robin.olsen@thinkful.com</Link>.</p>

            <p>If you are a candidate and would like to add or modify your listed position, please email Adam Levenson at <Link to="mailto:adam.levenson@thinkful.com">adam.levenson@thinkful.com</Link>.</p>
        </div>
    );
}