// 1
// const myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Proceso completado.");
//     }, 2000);
// });

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((error) => console.error("Ocurrio un error", error));

// 2
// function checkParity(number){
//     return new Promise((resolve, reject) => {
//         if(number % 2 === 0){
//             resolve("El numero es par.");
//         } else {
//             reject("El numero es impar");
//         }
//     });
// };

// checkParity(10)
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));

// checkParity(1)
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error));

// 3 
// const returnNumber = new Promise((resolve) => resolve(10));

// returnNumber
//     .then((number) => number + 5)
//     .then((number) => number * 2)
//     .then((number) => console.log(`Resultado final: ${number}`))
//     .catch((error) => console.error("Hubo un error", error));

// 4
// function loadData() {
//     console.log("Cargando...");

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Datos cargados");
//         }, 3000);
//     });
// };

// loadData().then((msg) => console.log(msg));

// 5
// async function waitPromise() {
//     try {
//         const msg = await myPromise;
//         console.log(msg);
//     } catch (error) {
//         console.error("Ha ocurrio un error", error);
//     }
// }

// waitPromise();

// 6
// async function checkParity2(number) {
//     try {
//         const msg = await checkParity(number);
//         console.log(msg);
//     } catch (error) {
//         console.error("Mensaje de error:", error);
//     }
// }

// checkParity2(1);
// checkParity2(10);

// 7
// function promise1(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promesa 1");
//             resolve();
//         }, 1000);
//     });
// }

// function promise2(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promesa 2");
//             resolve();
//         }, 2000);
//     });
// }

// function promise3(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Promesa 3");
//             resolve();
//         }, 3000);
//     });
// }

// async function fAsync() {
//     try {
//         await promise1();
//         await promise2();
//         await promise3();
//     } catch (error) {
//         console.error("Ha ocurrido un error", error);
//     }
// }

// fAsync();

// 8
// Promise.all([promise1(), promise2(), promise3()]);