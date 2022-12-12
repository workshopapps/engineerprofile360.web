<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Employee</title>
</head>
<body>
    
    <input type="file" class="upload csv" hidden>

    <button type="submit" class="btn">Upload CSV</button>

    
    <script>
        let btn = document.querySelector(".btn"),
            fileInp = document.querySelector(".csv")
            
        
        btn.onclick = ()=>{
            fileInp.click()
        }
        fileInp.addEventListener("change", (e)=>{
            let file = e.target.files[0];

            let reader = new FileReader();

            // convert csv file to base64 encoded string
            reader.readAsDataURL(file);

            reader.onload = async function() {
                const base64 = reader.result;
                console.log(base64)
                // make an api call
                const res = await fetch("https://api.eval360.hng.tech/api/test_csv", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(base64)
                })

                const data = await res.json();

                console.log(data)
            };

            reader.onerror = function() {
                console.log(reader.error);
            };

        })
    </script>
</body>
</html>