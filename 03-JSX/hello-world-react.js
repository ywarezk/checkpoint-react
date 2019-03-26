// JSX

function sayHello() {
    return 'hello from function'
}

const sayHelloAgain = () => {
    return 'hello from lambda function';
}

// JSX
// translates xml => React.createElemet

// return React.createElement(...)
// 1. number
// 2. string
// 3. null
// 4. React component
// 5. Array


// React.createElement('')
// {isLoggedIn: true, message: 'sdfasdf'}
function Header(props) {

    const todoList = [
        'buy soya milk',
        'walk piglet',
        'play with piglet'
    ];

    // display template item conditionally

    function placeLoginHeader(isLoggedIn) {
        if (isLoggedIn) {
            return <h3>user is logged in</h3>
        } else {
            return <h5>user is logged out</h5>
        }
    }

    // <h1 style="background-color: red; font-size: 60px;">
    return (
    <React.Fragment>
        <h1 className="hello world foo bar" style={ {
            backgroundColor: 'red',
            fontSize: '16px' 
        } } id="stam">
            <span>
                <strong>
                    JSX {1 + 1} {Math.random()} {sayHello()}
                </strong>
                <u>
                    {sayHelloAgain()}
                    {null}
                    {<h3>hello from another react element</h3>}
                    {/* {<Footer/>} */}
                </u>
            </span>
            {/* <span>
                {['im array', 10, <h5>h5 tag</h5>]}            
            </span> */}
        </h1>
        <h3>
            another text
        </h3>
        <h4>
            Todo Items
        </h4>
        <ul>
            {
                /* 'bug soya milk' => <li>buy soya milk</li> */
            }
            {
                todoList.map(function(todoItem, index) {
                    return <li key={index}>{todoItem}</li>
                })
            }
        </ul>
        {
            placeLoginHeader(props.isLoggedIn)
            
        }
        {
            (function() {
                if (props.isLoggedIn) {
                    return <h3>user is logged in</h3>
                } else {
                    return <h5>user is logged out</h5>
                }
            })()
        }
        {
            props.isLoggedIn ? <h3>user is logged in</h3> : <h5>user is logged out</h5>
        }
    </React.Fragment>
    )
}

ReactDOM.render(
    <div>
        <Header 
            isLoggedIn={true} 
            message="hello from property" />        
    </div>
    , 
    document.getElementById('container')
);