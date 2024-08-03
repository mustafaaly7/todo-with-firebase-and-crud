import{
    db,
    app, collection, addDoc, 
    setDoc,doc,getDocs ,deleteDoc ,updateDoc 
} from "../firebase.js"

if(!localStorage.getItem("userId")){
    window.location.replace("../pages/login.html")
}
const uid =localStorage.getItem("userId")
const parent = document.getElementById("parent")
// console.log(db);
// console.log(app);
// console.log( collection, addDoc );



const todoInput = document.getElementById("todoInput")

const getTodo = async() =>{
    try {
        parent.innerHTML =""
const querySnapshot = await getDocs( collection(db , uid))        
querySnapshot.forEach((doc) =>{
    const obj = {
        id: doc.id,
        ...doc.data()
    }
    
    parent.innerHTML += `
    
    
    <div class="card" style="width: 18rem;">
                            <div class="card-body"> 
                                <h4 class="card-title"><span style="color: blue;">Todo :</span> ${obj.Todo}</h4>
<br>
                                <div class="btns"> <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                                    <button class="btn btn-primary" id="${doc.id}" onclick = "editTodo(this)">Edit</button>
                                    <button class="btn btn-danger" id="${doc.id}" onclick = "deleteTodo(this)">Delete</button>
                                </div>
                            </div>



                        </div>`




}
)




    } catch (error) {
        alert("error" , error.message);
    }
}


const deleteAll =async()=>{
    try {
       const querySnapshot = await getDocs(collection(db,uid));
       querySnapshot.forEach((doc) =>{
deleteDoc(doc.ref);
       })
    
        parent.innerHTML =``
    } catch (error) {
        alert(error.message); 
    }
} 

const editTodo = async(ele) =>{
    try {
        
        const inputPrompt = prompt("Edit your Todo")
        const promptObj = {
            Todo : inputPrompt
        }
        const docRef = doc(db , uid , ele.id)
        await updateDoc(docRef,promptObj)
        getTodo()
    } catch (error) {
        alert(error.message , "error");        
    }

}
const deleteTodo = async(ele) =>{

try {
    await deleteDoc (doc(db, uid , ele.id))
    getTodo()
} catch (error) {
    alert(error.message ,"error");
}





}










    const addTodo = async () =>{
// console.log(todoInput.value);

// console.log(uid);

    try {
        if(todoInput.value.length < 3){
            alert("Please Enter Proper Todo")
            return
        }
        const todoObj = {
            Todo : todoInput.value
        }

        const docRef = await addDoc(collection(db,uid ), todoObj)
        getTodo()
        todoInput.value = " "
        todoInput.setAttribute("placeholder" , "ENTER YOUR TODOS HERE")
    } catch (error) {
        alert(error.message , "error");
    }
}

























window.addTodo = addTodo
window.deleteTodo = deleteTodo

window.editTodo = editTodo
window.deleteAll = deleteAll
window.addEventListener("load",getTodo)