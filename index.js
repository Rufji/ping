//selector
const submitBtn = document.querySelector(".submitBtn");
const email = document.querySelector("#emailInput");
const error = document.querySelector(".error");

//button action
submitBtn.addEventListener("click", validate);

//email validate
function validate(e){
    e.preventDefault();
    const regEx = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (email.value === ""){
        error.textContent = "This field is required"
        email.style.border = "1px solid hsl(0, 66%, 54%)"
    } else if (!regEx.test(email.value)){
        error.textContent = "Please provide a valid email address"
        email.style.border = "1px solid hsl(0, 66%, 54%)"
    } else{
        error.textContent = ""
        email.style.border = "1px solid hsl(0, 0%, 59%)"
    }
    return true;
}

//onchange
email.addEventListener("change", ()=> {
    error.textContent= "";
    email.style.border = "1px solid hsl(0, 0%, 59%)"
    
})