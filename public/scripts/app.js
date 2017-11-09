'use strict';

console.log('App.js is running');

//JSX - Javascript XML

var app = {

    title: 'Indecision App',
    subtitle: 'This is a app',
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    //console.log("form submitted");
    var option = e.target.elements.option.value;

    if (option) {

        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAll = function onRemoveAll() {

    app.options = [];
    render();
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

var onMakeDecision = function onMakeDecision() {

    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var render = function render() {

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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {

                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

render();
