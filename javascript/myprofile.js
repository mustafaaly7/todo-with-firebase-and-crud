import{
    app,
    db , collection, addDoc ,
    auth, createUserWithEmailAndPassword
    ,doc,
    setDoc,
    signInWithEmailAndPassword,getDocs 
    ,deleteDoc ,updateDoc ,getDoc
} from "../firebase.js"


if(!localStorage.getItem("userId")){
    window.location.replace("../pages/login.html")
}
const profileCard = document.querySelector("#profileCard")
const uid = localStorage.getItem("userId")

const loadProfile = async () =>{
    // console.log(app);
    try {
        if(!localStorage.getItem("userId")){
            window.location.replace("../pages/login.html")
        }
        
        
            profileCard.innerHTML =""
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
            // console.log(docRef);
            // console.log(docSnap);
            const obj = {
               id: docSnap.id,
            ...docSnap.data()
            }
            console.log(docSnap.data().signupCountry);
                // })
        profileCard.innerHTML += `
    <h1>MY PROFILE </h1>
                    <br><br>
                    <h3>Name :</h3>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder ="${docSnap.data().fullname}" disabled
                            aria-describedby="inputGroup-sizing-lg">
                    </div>
                    <br>
                    <h3>Email Address :</h3>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder = "${docSnap.data().signupEmail
                        }" disabled
                            aria-describedby="inputGroup-sizing-lg">
                    </div>
                    <br>
                    <h3>Country :</h3>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder ="${docSnap.data().signupCountry}" disabled
                            aria-describedby="inputGroup-sizing-lg">
                    </div>
                    <br>
                    <h3>Phone Number :</h3>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Sizing example input" placeholder ="${docSnap.data().signupNumber}" disabled
                            aria-describedby="inputGroup-sizing-lg">
                            
                            
                            </div>
                            <br/>
                            <button class="btn btn-info" onclick ="signoutHandler()"> Sign out</button>
    
    
    
    
    
    `
    
   
    } catch (error) {
    

        alert(error.message , "error load profile");
}
}




const signoutHandler = ()=>{

localStorage.removeItem("userId")
alert("Signed Out Successfully")
loadProfile()

}



window.signoutHandler = signoutHandler
window.addEventListener("load" , loadProfile)

