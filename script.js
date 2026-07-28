import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("leadForm");
const success = document.getElementById("successMessage");

if (!form) return;

form.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value.trim();

const phone = document.getElementById("phone").value.trim();

const service = document.getElementById("service").value;

const district = document.getElementById("district").value.trim();

const message = document.getElementById("message").value.trim();

if(name===""){
alert("Please enter your name.");
return;
}

if(phone.length<10){
alert("Please enter a valid mobile number.");
return;
}

if(service===""){
alert("Please select a service.");
return;
}

try{

await addDoc(collection(db,"leads"),{

name:name,

phone:phone,

service:service,

district:district,

message:message,

createdAt:serverTimestamp()

});

success.style.display="block";

form.reset();

setTimeout(()=>{

success.style.display="none";

},5000);

}catch(error){

console.error(error);

alert("Something went wrong. Please try again.");

}

});

});
