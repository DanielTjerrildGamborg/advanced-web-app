fetch("../json/data.json")
.then(response => response.json())
.then (data => {
    console.log(data.historie)
    document.querySelector("#historie").innerText = data.historie

})




