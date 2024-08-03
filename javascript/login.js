import{
auth,signInWithEmailAndPassword

}from "../firebase.js"
if(localStorage.getItem("userId")){
    window.location.replace("../index.html")
}

const loginPw = document.getElementById("loginPw")
const loginEmail = document.getElementById("loginEmail")


const showBtnlogin = document.getElementById("showBtnlogin") 

const toggleLogin = () =>{
    if(showBtnlogin.innerHTML =="show"){
    showBtnlogin.innerHTML = "hide"
    loginPw.setAttribute("type" , "text")
}else{
    showBtnlogin.innerHTML = "show"
    loginPw.setAttribute("type" , "password")

}

}

const loginHandler = async()=>{
try {
    
const response = await signInWithEmailAndPassword(auth , loginEmail.value , loginPw.value)

// console.log(response.user.uid);
localStorage.setItem("userId" , response.user.uid)
alert("Logged In Successfully")
window.location.replace("../index.html")


} catch (error) {
    alert("error" , error.message);
}



}






window.toggleLogin = toggleLogin
window.loginHandler = loginHandler