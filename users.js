document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            let user = data.users.find(user => user.username === username && user.password === password);
            if(user.role === "admin" ) {
            //storing user role in the local storage
                localStorage.setItem('userRole', JSON.stringify('admin'));
                // Login successful, redirect to admin dashboard
                window.location.href = 'admindashboard.html';
                alert("Login Successful!")
            }
            else if (user.role === 'user') {
                 // Login successful, redirect to user dashboard and store in local storage
                 localStorage.setItem('userRole', JSON.stringify('user'));
                window.location.href = 'userdashboard.html';
                alert("Login Successful!")
               
            }
            else {
                alert("Login Failed!")
            }

        })
        .catch(error => console.error('Error:', error));
});