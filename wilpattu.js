fetch('wilpattu.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('wilpattu', JSON.stringify(data));
           
        const display = document.getElementById("title");
        display.innerHTML = wilpattu.wilpattuNationalPark.title
       

        
        const names = document.getElementById("fandf");
        names.innerText = wilpattu.wilpattuNationalPark.mammals

        const dis = document.getElementById("descrip");
        dis.innerHTML = wilpattu.wilpattuNationalPark.description

        const bird = document.getElementById("birds");
        bird.innerText = wilpattu.wilpattuNationalPark.birds

        const reptile = document.getElementById("reptiles");
        reptile.innerText = wilpattu.wilpattuNationalPark.reptiles
        



    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const wilpattu= JSON.parse(localStorage.getItem("wilpattu"));

        
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

