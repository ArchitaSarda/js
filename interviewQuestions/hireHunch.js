// 1. Use React.something instead of importing from React.
// 2. Use ReactDOM.render(<SomeComponent />, document.getElementById('app'))
// 3. Container id is 'app'.
// 4. console.log('opens in actual browser dev tools!').




// Promise and Async Await
const newPromise = new Promise((res, rej) => {
  console.log('Hello World')
});


// line no 1: 
newPromise.then((res) => console.log('line no 1'));
// line no 2: 
console.log('line no 2');
// line no 2: 
console.log('line no 3');


let a = async function  () {
// line no 1: 
const result = newPromise;
console.log('line no 1');

}
a();
// line no 2: 
console.log('line no 2');
// line no 2: 
console.log('line no 3');




// Saga -> Concepts
// Asyc Await => Promise -> ( sugar coat )
// Code readable Async Await -> Promise , Generator
// Saga -> Vanilla Javascript -> Generator
// react component -> action -> saga watcher








// name property read only and address readWrite
// export const person = {
//     name: 'Name', // read
//     address: 'Address', // readAndWrite
// }
// person.name = "Name 1" // modification is not applicable
// Object.




// I need to create shuffling Card Games
// let cards = [A1, B1, C1, D1];
// App ->
   // -> Card Component - title =
   // Card Component should be performant and optimized
   // prev prop !== nextProp then re-render otherwise it should not re-render
   // You cannot use useState inside Card or useEffect to do other logic




/**
 interface HTMLElement {
     name:
       style:
     someotherproperty;
 }
 interface HTMLElementWrapper =
*/


// Lifecycle of component in Class compnent ->
// Direct comparision with functional component
// componentwillmount -> render -> componentdidmount
// componentwillreceiveprops -> render
// componentwmponentupdate
// function *generator() {
//     const test = yield 1;
//     //
//     //
//     //
// }
// iterator = generator();
// iterator.next(121);
// const Card = () => {
// }






// const App = () => {
//     const [count, setCount] = React.useState(0);


//     React.useEffect(() => {
//     console.log(count);
//     }, [count])


//     const increaseCount = () => {
//         setCount(prevState => prevState + 1)
//     }
//     const decreaseCount = () => {
//         setCount(prevState => prevState - 1)
//     }


//     return (
//         <div>
//             <h1>Hello from React Changed</h1>
//             <h2> {count} </h2>
//             <button onClick={increaseCount}>+1</button> &nbsp;
//             <button onClick={decreaseCount}>-1</button>
//             <h3>Start editing to see magic happen!</h3>
//         </div>
//     );
// };


// ReactDOM.render(<App />, document.getElementById('app'));

