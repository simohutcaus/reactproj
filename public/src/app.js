console.log('App.js is running');

//JSX - Javascript XML

const app = {

title: 'Indecision App',
subtitle: 'This is a app',
options: []

};



const onFormSubmit = (e) => {
e.preventDefault();
//console.log("form submitted");
const option = e.target.elements.option.value;

if (option)  {

    app.options.push(option);
    e.target.elements.option.value = '';
    render();
}



};

const onRemoveAll = () => {

app.options = [];
render();
};


function arraycheck() {

    if (app.options.length > 0 ) {
        return <p>Here are your options</p>
    } else {
        return <p>No options</p>
    }
}

const onMakeDecision = () => {

const randomNum =  Math.floor(Math.random() * app.options.length);
const option = app.options[randomNum];
alert(option);
};



const render = () => {

const template = ( <div>
<h1>{app.title}</h1>
{app.subtitle && <p>{app.subtitle}</p>}
<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
<button onClick={onRemoveAll}>Remove All</button>
<ol>
{
    app.options.map((option)=> {

        return <li key={option}>{option}</li>;

    })
}
</ol>
<form onSubmit={onFormSubmit}>
<input type="text" name="option"/>
<button>Add Option</button>
</form>
</div>

);

ReactDOM.render(template, appRoot);

};


const appRoot = document.getElementById('app');

render();

