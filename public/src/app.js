console.log('App.js is running');

//JSX - Javascript XML

const app = {

title: 'Indecision App',
subtitle: 'This is a app',
options: ['One', 'Two']

};


function arraycheck() {

    if (app.options.length > 0 ) {
        return <p>Here are your options</p>
    } else {
        return <p>No options</p>
    }
}

const template = <div><h1>{app.title}</h1>{app.subtitle && <p>{app.subtitle}</p>}<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p><ol><li>Item One</li><li>Item Two</li></ol></div>;

let count = 0;
const addOne = () => {
count = count + 1;
renderCounterApp();

};

const minusOne = () => {
count = count -1;
renderCounterApp();
console.log("minusone");

};

const reset = () => {
count = 0;
renderCounterApp();
console.log("reset");
};


//console.log(templateTwo);


const appRoot = document.getElementById('app');


const renderCounterApp = () => {

const templateTwo = (

    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>

);

ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();