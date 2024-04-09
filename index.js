fetch('index.json')
    .then(response => response.json())
    .then(data => {
            // Storing the fetched data in local storage
            localStorage.setItem('wildlifeData', JSON.stringify(data));
        const display = document.getElementById("titles");
        display.innerText = wildlifeData.page.title;

        const displays = document.getElementById("heading");
        displays.innerText = wildlifeData.page.sections[0].title;

        const displays1 = document.getElementById("para");
        displays1.innerText = wildlifeData.page.sections[0].subtitle;



        const displays2 = document.getElementById("subhead1");
        displays2.innerText = wildlifeData.page.sections[1].title;

        const displays3 = document.getElementById("descrip1");
        displays3.innerText = wildlifeData.page.sections[1].description;

        const list1 = document.getElementById("faunal1");
        list1.innerText = wildlifeData.page.sections[1].list[0];
        const list2 = document.getElementById("faunal2");
        list2.innerText = wildlifeData.page.sections[1].list[1];
        const list3 = document.getElementById("faunal3");
        list3.innerText = wildlifeData.page.sections[1].list[2];


        

        const displays4 = document.getElementById("subhead2");
        displays4.innerText = wildlifeData.page.sections[2].title;

        const displays5 = document.getElementById("descrip2");
        displays5.innerText = wildlifeData.page.sections[2].description;

        const list11 = document.getElementById("floral1");
        list11.innerText = wildlifeData.page.sections[2].list[0];
        const list22 = document.getElementById("floral2");
        list22.innerText = wildlifeData.page.sections[2].list[1];
        const list33 = document.getElementById("floral3");
        list33.innerText = wildlifeData.page.sections[2].list[2];



        const displays6 = document.getElementById("subhead3");
        displays6.innerText = wildlifeData.page.sections[3].title;

        const displays7 = document.getElementById("descrip3");
        displays7.innerText = wildlifeData.page.sections[3].description;


               
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });
    
    const wildlifeData = JSON.parse(localStorage.getItem("wildlifeData"));

        
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