let EmailDataBase = [
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "willy" , password : "password" },
    {email : "lance" , password : "jeshrell" }
];

function mysubmitLogin() {

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    for (i = 0; i < EmailDataBase.length +1 ; i++) {
        if (EmailDataBase[i].email === email) {
            if (EmailDataBase[i].password === password) { 
                window.location.href = "index.html";
                break;
            }
            else {
                console.log("false pass")
                break;
            }
        }
        else {
            if (i = EmailDataBase.length) {
                console.log("no match " + i)
            }
        }
    }
}
