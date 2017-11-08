'use strict';

console.log('App.js is running');

//JSX - Javascript XML

var app = {

    title: 'Indecision App',
    subtitle: 'This is a app',
    options: ['One', 'Two']

};

function arraycheck() {

    if (app.options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No options'
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var userName = 'Simon2';
var userAge = '35';
var Location = 'Melbourne';
var user = {

    name: 'Simon',
    age: '35',
    location: 'Sydney'
};

function getLocation(location) {

    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var appRoot = document.getElementById('app');

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, appRoot);
