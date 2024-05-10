// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();       // <- here you should put ;


( () => {
    console.log(`DB CONNECTED TWO`);
})();   

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
}) ("rudra");