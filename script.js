// ============================
// TECH RAWAT DIGITAL SEWA
// script.js
// ============================

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("leadForm");
const success = document.getElementById("successMessage");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const service = document.getElementById("service").value;

if(name === ""){

alert("Please enter your name.");

return;

}

if(phone.length < 10){

alert("Please enter a valid mobile number.");

return;

}

if(service === ""){

alert("Please select a service.");

return;

}

// Success Message

success.style.display = "block";

// Form Reset

form.reset();

// Auto Hide Success

setTimeout(function(){

success.style.display = "none";

},5000);

});

}

});
