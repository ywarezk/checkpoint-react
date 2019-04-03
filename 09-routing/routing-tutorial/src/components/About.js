/**
 * /about => About page
 */

 import React from 'react';

 export default function About({match}) {
     // {id: 'sdfsd'}
     const {params} = match;
     return (
        <>
            <h1>Hello im in the about page {params.id}</h1>
        </>
    );
 }