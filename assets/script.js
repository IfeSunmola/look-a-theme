console.log("JS Linked Successfully!")

//Get the button
const myButton = document.getElementById("btn-back-to-top");

window.onscroll = () => {
    // When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
        return;
    }
    myButton.style.display = "none";
};

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});