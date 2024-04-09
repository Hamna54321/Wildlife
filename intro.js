fetch('intro.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('intro', JSON.stringify(data));

        let display = document.getElementById("title");
        display.innerText = intro.sections[0].title



        const dis = document.getElementById("sinharaja");
        dis.innerHTML = intro.sections[0].locations[0].name

        const dname = document.getElementById("dsinharaja");
        dname.innerText = intro.sections[0].locations[0].description

        const names = document.getElementById("minneriya");
        names.innerText = intro.sections[0].locations[1].name

        const dnames = document.getElementById("dminneriya");
        dnames.innerText = intro.sections[0].locations[1].description


        

        const head = document.getElementById("animalspotlight");
        head.innerText = intro.sections[1].title;

        const animal1 = document.getElementById("slothbear");
        animal1.innerText = intro.sections[1].animals[0].name;
        

        const danimal1 = document.getElementById("dslothbear");
        danimal1.innerText = intro.sections[1].animals[0].fact;

        const animal2 = document.getElementById("sambardeer");
        animal2.innerText = intro.sections[1].animals[1].name;

        const danimal2 = document.getElementById("dsambardeer");
        danimal2.innerText = data.sections[1].animals[1].fact;

        const animal3 = document.getElementById("elephant");
        animal3.innerText = intro.sections[1].animals[2].name;

        const danimal3 = document.getElementById("delephant");
        danimal3.innerText = intro.sections[1].animals[2].fact;

    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });
    const  intro= JSON.parse(localStorage.getItem("intro"));

        
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