/**
 * I want to create a component that will map to
 * 
 * <header><h1>Hello im the header</h1></header>
 * <Header></Header>
 */

 import React from 'react';

 // props => {message: '...'}
 export default function Header(props) {
     return <header><h1>{props.message}</h1></header>
 }

