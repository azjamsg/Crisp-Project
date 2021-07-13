var b1 = document.getElementById("b1")

function logIn(e) {
    e.preventDefault();  //to prevent form from submitting and refreshing the page

    //API to get users data from users database
    fetch("http://localhost:3000/users/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var usersAll = data;
            console.log(usersAll);
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            
            var user = usersAll.find(u => u.email == email); //From the usersAll array, find user based on email.
            console.log(user) //If user email found, returns the object. If user email not found returns undefined

            if (email == null || email == "") {
                alert("Please enter the email.");
                form.email.focus();
                return false;
          
              } else if (password == null || password == "") {
                alert("Please enter the password.");
                form.password.focus();
                return false;
                
              } else if (user === undefined) {
                alert("User not found.");
                form.email.focus();

            } else if (password === user.password) {         // Check if password entered matches the password from usersAll array
                document.getElementById('reco').innerText ="Login Successful!"
                window.location.href = "overview.html";

            } else{
                console.log(user.password)
                alert("Invalid password.");
                form.password.focus();
            }
        })
        .catch((error) => console.log("error", error));
}

form.addEventListener("submit", logIn)