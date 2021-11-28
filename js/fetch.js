fetch("../json/data.json")
.then(response => response.json())
.then (data => {
    console.log(data)
    document.querySelector("#historie").innerText = data

})
