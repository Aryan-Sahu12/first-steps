
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.onclick = function () {
    todoList.removeChild(li);
  };

  li.appendChild(delBtn);
  todoList.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTodo();
});


// console.log("Hello world");

// function calculator( a, b) {
//     console.log('${a} + ${b} = ${a + b} ' );
//     console.log(`${a} + ${b} = ${a + b}`);
//     console.log(`${a} - ${b} = ${a - b}`);
//     console.log(`${a} * ${b} = ${a * b}`);
//     console.log(`${a} / ${b} = ${a / b}`);
// }

// calculator(3,4);

//Create a program that prints numbers from 1 to 10, but prints "Fizz" for multiples of
//3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

// for(let i = 1; i <= 20; i++) {

//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} ` + 'FizzBuzz');
//     }
//     else if(i % 3 == 0) {
//         console.log(`${i} ` + 'Fizz');
//     }
//     else if(i % 5 == 0) {
//         console.log(`${i} ` + 'Buzz');
//     }
// }

function add(a , b) {
    return a + b;
}

const multiply = function(a,b) {
    return a * b ;
}

const add2 = (a , b) => {
    return a + b;
};

const subtract = (a , b) => a - b;

const square = x => x * x;


//Create a function that takes an array of numbers and returns the largest number.

var nums = [7,1,0,5,4] ;

//console.log(largest(nums));


function largest(nums) {

    if(nums == null || nums.length === 0) {
        return null;
    }

    let temp = nums[0];

    for(let i = 1; i < nums.length ; i++) {
        if(temp < nums[i]) {
            temp = nums[i];
        }
    }

    return temp;

}

//Create an object representing a book with properties like title, author, pages, and a
//method that returns a description.

let book = {
    title: 'gunaho ka devta',
    author: 'Kunwar Narayan',
    pages: 257,

    description : function() {
        return `this is a very sad story called ${this.title} written by ${this.author} having ${this.pages} pages`;
    }

};

//console.log(book.description());






