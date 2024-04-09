fetch('leopard.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('leopard', JSON.stringify(data));
            
        const display = document.getElementById("title");
        display.innerHTML = leopard.leopard.title

        const dis = document.getElementById("descrip");
        dis.innerText = leopard.leopard.description

        // const name_s = document.getElementById("humancon");
        // name_s.innerHTML = data.leopard.humanWildlifeConflicts.titled

        console.log( leopard.leopard.humanWildlifeConflicts.titled);

        // const num = document.getElementById("name");
        // num.innerHTML =  data.leopard.humanWildlifeConflicts.titled

        const human = document.getElementById("dhumancon");
        human.innerText =  leopard.leopard.humanWildlifeConflicts.description


        const consequence= document.getElementById("conseq");
        consequence.innerText = leopard.leopard.consequences.title
        

        const dconsequence = document.getElementById("dconseq");
        dconsequence.innerText = leopard.leopard.consequences.description

        
        const protects = document.getElementById("protect");
        protects.innerText = leopard.leopard.stepsToProtect.title
        

        const dprotects = document.getElementById("dprotect");
        dprotects.innerText = leopard.leopard.stepsToProtect.description



      

    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const  leopard= JSON.parse(localStorage.getItem("leopard"));

        
    if (localStorage.getItem("userRole")) {
        const  userInfo = JSON.parse(localStorage.getItem("userRole"));
        if  (userInfo == "admin"){
          const getPopup = `<a onclick="openPopup()">Edit</a>`;
          document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
          function openPopup() {
          window.open("editor.html", "", "width=800px, height=410px");
         }
        }
  }
  if(localStorage.getItem("userRole")){
    const  loginUser = `<li><a onclick="removeuser()">Logout</a></li>`;
    document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);
 }
 else{
   const  loginUser = `<li><a href="login.html">Login</a></li>`;
   document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);

 }
 function removeuser() {
   localStorage.removeItem('userRole');
   location.reload();
}
