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
const userName = 'Simon2';
const userAge = '35';
const Location = 'Melbourne';
const user =  {

name: 'Simon',
age: '35',
location: 'Sydney'
};

function getLocation(location) {

    if (location) {
        return <p>Location: {location}</p>
    } 
}


const appRoot = document.getElementById('app');

const templateTwo = <div><h1>{user.name ? user.name : 'Anonymous'}</h1>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}{getLocation(user.location)}</div>;

ReactDOM.render(template, appRoot);