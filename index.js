let fortunes = ['Great life!', 'Greater life!', 'Longish life!' , 'Living Live!!'];
let colors = ["Blue" , "red" , "green" , "gray"]

document.addEventListener('DOMContentLoaded', function(){
    //create an html element
    let message = document.createElement('p');
    message.innerHTML= "Hello! You know you still smell!";
    message.classList.add('msg');
    console.log(message);

    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerHTML = 'Click Yourself!';
    // fill in element
    let root = document.querySelector('#root');
    console.log(root);

    // put the text in the thing
    root.appendChild(message);
    root.appendChild(button);

button.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomNumber];
    let randomColor = colors[randomNumber];
    console.log(randomFortune);
    message.innerHTML = randomFortune;
    message.style.color = randomColor
})    

// find "root" tag
});

