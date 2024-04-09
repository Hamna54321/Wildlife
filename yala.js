fetch('yala.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('yala', JSON.stringify(data));

        const display = document.getElementById("title");
        display.innerHTML = yala.yalaNationalPark.title

        const dis = document.getElementById("descrip");
        dis.innerHTML = yala.yalaNationalPark.description

        const names = document.getElementById("conserve");
        names.innerText = yala.additionalInfo.biodiversity

       
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const  yala= JSON.parse(localStorage.getItem("yala"));

        
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

