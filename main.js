// (function(){
//     console.log("Привет мир");
// }());

// // function hello(){
// //     console.log("Hello");
// // }
// // hello();    // вызываем функцию

// // const hello = ()=> console.log("Hello");
// // hello();

// // const hello = name => `Hello, ${name}`;
 
// // console.log(hello("Tom"));              // Hello, Tom
// // console.log(hello("Bob"));              // Hello, Bob
// // console.log(hello("Frodo Baggins"));    // Hello, Frodo Baggins


// // const square = (n, g) => {
// //     const result = n * n + g;
// //     console.log(result);
// // }
  
// // square(5,2);     // 25
// // square(6,3);   
// //   // 36

// // let square2 = (n, g) => {
// //     const result = n * n + g;
// //     console.log(result);
// // }


// // console.log(
// //     ((x,y) => (
// //         ((proc2) =>(
// //             ((proc1)=>proc1(5,30))((x,y) => [x, proc2(), y])
// //         ))(()=>x + y)
// //     ))(10, 15)
// // );      // [5, 25, 30]
// console.log(this);
// console.log(globalThis);

// let gig = 1;
// console.log(gig);
// {
//     let gig = 2;
//     console.log(this.gig);
//     {
//         let gig = 3;
//         console.log(gig);
//     }
// }
// (function gette() {
//     var gig = 5;
//     console.log(this.gig);
// })()
// console.log(gig);
// // window.alert("привет Мышь");
// // window.print("Привет мышам");
// window.open("https://metanit.com", "_blank", "popup=yes");


document.addEventListener('click', (event) => {
    console.log(event); // Выводим объект события в консоль
});