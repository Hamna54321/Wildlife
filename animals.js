fetch('animals.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('animal', JSON.stringify(data));

        const display = document.getElementById("title");
        display.innerHTML = animal.introduction.title

        const dis = document.getElementById("descrip");
        dis.innerHTML = animal.introduction.paragraph

        const image1name = document.getElementById("animal1");
        image1name.innerText = animal.animals[0].name


        const image2name = document.getElementById("animal2");
        image2name.innerText = animal.animals[1].name



        const image3name = document.getElementById("animal3");
        image3name.innerText = animal.animals[2].name


        const image4name = document.getElementById("animal4");
        image4name.innerText = animal.animals[3].name
        


        const image5name = document.getElementById("animal5");
        image5name.innerText = animal.animals[4].name
        

        const image6name = document.getElementById("animal6");
        image6name.innerText = animal.animals[5].name
        

        const image7name = document.getElementById("animal7");
        image7name.innerText = animal.animals[6].name
        

        const image8name = document.getElementById("animal8");
        image8name.innerText = animal.animals[7].name
        

        const park1n = document.getElementById("park1name");
        park1n.innerText = animal.nationalParks[0].name

        const park1l = document.getElementById("park1link");
        park1l.innerText = animal.nationalParks[0].link

        const park2n = document.getElementById("park2name");
        park2n.innerText = animal.nationalParks[1].name

        const park2l = document.getElementById("park2link");
        park2l.innerText = animal.nationalParks[1].link






    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });

    const  animal= JSON.parse(localStorage.getItem("animal"));

        
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
