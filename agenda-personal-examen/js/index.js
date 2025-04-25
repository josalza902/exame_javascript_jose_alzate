let db
function opendb(){
    const dbopen=window.indexedDB.open("basedb");
    dbopen.onsuccess=(e)=>{
        db = dbopen.result
    }
}
const boton = document.getElementById("botonentrar");
boton.addEventListener("click",()=>{
    window.location.assign(
        "dashboard.html")
})