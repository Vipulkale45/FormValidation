/*let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
 
    dets.preventDefault();
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial"
    }
    else{
        document.querySelector("#hide").style.display = "none"
    }

        dets.preventDefault();
        const regex = /^[a-zA-Z0-9_]{3,16}$/;

        let ans = regex.test("aa_a");
        console.log(ans)
})
*/

let email = document.querySelector("#email");
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent=""
    document.querySelector("#passError").textContent="";



    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans= passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent="Email is incorrect"
        document.querySelector("#emailError").style.display="initial"
        isValid = false;

    }
    if(!passwordans){
        document.querySelector("#passError").textContent="password is incorrect"
        document.querySelector("#passError").style.display="initial";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent="Everything is correct"
    }
});

