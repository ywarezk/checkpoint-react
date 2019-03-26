
// <h1 id="stam">
//    <span>
//            <strong>
//                Hello world from React
//            </strong>
//    </span>
// </h1>
//
// <Header></Header>
// const h1WithStuffInIt = React.createElement(
//     'h1', 
//     {id: 'stam'}, 
//     React.createElement(
//         'span', 
//         null, 
//         React.createElement(
//             'strong', 
//             null, 
//             'Hello world from React strong'
//         )
//     )
// );

// h1WithStuffInIt : ReactElement
// <Header />

function Header() {
    return <h1 id="stam">
        <span>
            <strong>
                Hello world from React with our component
            </strong>
        </span>
    </h1>
}


ReactDOM.render(
    <div>
        <Header />
        {/* <LoginForm />
        <Footer/> */}
    </div>
    , 
    document.getElementById('container')
);