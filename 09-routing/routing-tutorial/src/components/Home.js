/**
 * / => Home page
 */

 import React from 'react';

 export default function Home({history}) {
    const navigate = () => {
        history.push('/about/30');
    }

     return (
        <>
            <h1>Hello im in the homepage</h1>
            <button onClick={navigate}>Go to about page</button>
        </>
    );
 }