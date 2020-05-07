let people = [
    { first: 'Carl', last: 'Corsini' },
    { first: 'Barry', last: 'Bonds' },
    { first: 'John', last: 'Jacobjinkelheimerschmidt' },
    { first: 'Stinky', last: 'MacStinkington' },
  ];


//   let people = axios.get('https://my-backend.com/people')

window.onload = async  function() {
    let button2 = document.createElement('button');

    button2.innerHTML = 'Click Me';

    let root = document.querySelector('#root');

    root.appendChild(button2); // put button on the root container

    let message
    let image

    let cards = document.querySelector('#cards');

    button2.addEventListener('click' , function() {
        for (let i =0; i < people.length; i++) {
            
            message = document.createElement('p'); // create and store paragraph in variable

            message.innerHTML = people[i].first;

            root.appendChild(message);
    }


    })
}