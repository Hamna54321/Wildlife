fetch('conservation.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('conservation', JSON.stringify(data));
        const display = document.getElementById("titles");
        
       
        display.innerText = conservation.department.name;

        const displays = document.getElementById("name");
        
       
        displays.innerText = conservation.department.description;

        const intro = document.getElementById("names");
        
        intro.innerText = conservation.department.vision;

        const introduction = document.getElementById("paragraph");
        

        introduction.innerText = conservation.department.mission;



    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const  conservation= JSON.parse(localStorage.getItem("conservation"));

        
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