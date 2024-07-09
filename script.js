// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()


const btn = document.getElementById("myBtn");
const h1 = document.getElementById("myh1");

// btn.classList.add("enabled");
// btn.classList.remove("enabled");


// ---> add() and remove() method

// btn.addEventListener('mouseover', e => {
//     e.target.classList.add("hover");
// });

// btn.addEventListener('mouseout', e => {
//     e.target.classList.remove("hover");
// });


// ---> toggle() method

// btn.addEventListener('mouseover', e => {
//     e.target.classList.toggle("hover");
// });

// btn.addEventListener('mouseout', e => {
//     e.target.classList.toggle("hover");
// });


// ---> replace(oldClass, newClass)

// h1.classList.add("enabled");
// btn.classList.add("enabled");

// h1.addEventListener('click', e => {

//     if(e.target.classList.contains("disabled")) {
//         e.target.textContent += "😤";
//     } else {
//         e.target.classList.replace("enabled", "disabled");
//     };
// });

// btn.addEventListener('click', e => {

//     if(e.target.classList.contains("disabled")) {
//         e.target.textContent += "😤";
//     } else {
//         e.target.classList.replace("enabled", "disabled");
//     };
// });