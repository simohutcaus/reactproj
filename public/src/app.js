console.log('App.js is running');

//JSX - Javascript XML

var app = {

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

var template = <div><h1>{app.title}</h1>{app.subtitle && <p>{app.subtitle}</p>}<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p><ol><li>Item One</li><li>Item Two</li></ol></div>;
var templateTwo = <div><h1>Simon</h1><p>Age: 35</p><p>Location: Sydney</p></div>;
var userName = 'Simon2';
var userAge = '35';
var Location = 'Melbourne';
var user =  {

name: 'Simon',
age: '35',
location: 'Sydney'
};

function getLocation(location) {

    if (location) {
        return <p>Location: {location}</p>
    } 
}


var appRoot = document.getElementById('app');

var templateTwo = <div><h1>{user.name ? user.name : 'Anonymous'}</h1>{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}{getLocation(user.location)}</div>;

ReactDOM.render(template, appRoot);