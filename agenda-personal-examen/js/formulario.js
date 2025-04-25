const indexdb = indexedDB.open('basedb',1)
indexdb.onupgradeneeded = (event)=>{
    const db = event.target.result

    const usuariosstore = db.createObjectStore("nombre",{keypath:"id",autoIncrement:true})

    usuariosstore.createIndex("email","email",{unique:true})
}
indexdb.onsuccess = (event)=> {
    const db = event.target.result;
}
function agregarUsuario(nombre,email,contraseña){
    const transaction = db.transaction(["usuarios"],"readWrite");
    const usuariosStore = transaction.objectStore("usuarios");


    const nuevoUsuario = {nombre: nombre,email:email,contraseña:contraseña};
    const agregarRequest = usuariosStore.add(nuevoUsuario)
      agregarRequest.onsuccess = () => {
      console.log("usuario agregado")

  };
}
const btn = document.getElementById("boton");
btn.addEventListener("click",()=>{
   const nombre = document.getElementById('nombre') 
   const email = document.getElementById('email') 
   const contraseña = document.getElementById('contraseña') 
   indexdb.agregarUsuario(nombre,email,contraseña)
   window.location.assign(
       "index.html")
})



