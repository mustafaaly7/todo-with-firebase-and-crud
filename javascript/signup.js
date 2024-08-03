import{
    auth,
    collection,
    createUserWithEmailAndPassword,
    doc,db,
  setDoc,
}from "../firebase.js"
if(localStorage.getItem("userId")){
    window.location.replace("../index.html")
}
window.addEventListener("load", () => {
    if (localStorage.getItem("user")) {
      window.location.replace("../index.html");
    }
  });


const showBtnsignup = document.getElementById("showBtnsignup")
const signupPw = document.getElementById("signupPw")
const toggleSignup = ()=>{
    if(showBtnsignup.innerHTML == "show"){
        signupPw.setAttribute("type" , "text")
        showBtnsignup.innerHTML = "hide"
    }else{
        signupPw.setAttribute("type" , "password")
        showBtnsignup.innerHTML = "show"
    }
}


const signupHandler = async()=>{
    try {
        
        const signupName = document.querySelector("#signupName")
        const signupCountry = document.querySelector("#signupCountry")
        const signupNumber = document.querySelector("#signupNumber")
        const signupEmail = document.querySelector("#signupEmail")
        
        const userInfo ={
            fullname : signupName.value,
            signupCountry : signupCountry.value
            ,signupNumber :signupNumber.value,
            signupEmail : signupEmail.value
        }
        
       const response = await createUserWithEmailAndPassword(auth, signupEmail.value, signupPw.value)    
        // console.log(response.user.uid);
        const uid = response.user.uid
        console.log(uid);
        const userResponse = await setDoc(doc(db,"users",uid),userInfo)
        
        alert("User Created Successfully")
        window.location.href = "../pages/login.html"


    } catch (error) {
        alert("error" , error.message);
    }

}
































window.toggleSignup = toggleSignup
window.signupHandler = signupHandler


