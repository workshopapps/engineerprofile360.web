<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password Reset</title>
</head>
<body>
    

    <div class="cont">
        <div class="box">
            <input type="password" placeholder="new password" class="pwd" name="" id="">
            <button type="submit" class="btn">Reset Password</button>
        </div>
    </div>

    <script>

        const {search} = new URL(window.location.href)
        const [uid, token] = search.replace("?", "").replace("uid=", "").replace("token=", "").split("&");

        const pwd = document.querySelector(".pwd"),
              btn = document.querySelector(".btn"),
              boxCont = document.querySelector(".box")

        btn && btn.addEventListener("click", ()=>{
            resetPassword(uid, token)
        })

        // window.addEventListener("load", ()=>{
        // })
        verifyPasswordLink();

        async function verifyPasswordLink(){

            const url = `http://localhost:8000/api/auth/password/reset/${uid}/${token}`
            
            let res = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({verify: true})
            });

            let data = await res.json();


            if(data.errorState){
                boxCont.innerHTML = `
                <p>${data.message}</p>
                `
                return
            }
        }

        async function resetPassword(uid, token){
            if(uid === "" || token === ""){
                return alert("invalid reset link")
            }

            if(pwd.value === ""){
                return alert("password field cant be empty");
            }

            const url = `http://localhost:8000/api/auth/password/reset/${uid}/${token}`
            
            const payload = {
                new_password: pwd.value,
                verify: false
            }
            let res = await fetch(url,{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            let data = await res.json();

            if(data.errorState){
                return alert(data.message)
            }

            alert(data.message)
        }

        
    </script>
</body>
</html>