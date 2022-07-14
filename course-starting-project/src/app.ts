// Decorators

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }
// @Logger

// Decorator Factory
function Logger(str: string) {
    return function (constructor: Function) {
      console.log(str);
      console.log(constructor);  
    }
}

function withTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor()

        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('Log in Person')
@withTemplate('<h1>Log in Person</h1>', 'root')
class Person {
    name: string = "Max";

    constructor() {
        console.log('Creating person object.');
    }
}

const pers = new Person();

console.log(pers);