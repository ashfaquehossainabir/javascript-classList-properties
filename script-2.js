// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.


const buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
    button.classList.add("enabled");
});

// buttons.forEach(button => {
//     button.classList.remove("enabled");
// });

buttons.forEach(button => {
    button.addEventListener("mouseover", e => {
        e.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", e => {
        e.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener('click', e => {

        if(e.target.classList.contains("disabled")) {
            e.target.textContent += "😤";
        } else {
            e.target.classList.replace("enabled", "disabled");
        }
    });
});