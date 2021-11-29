fetch("../json/data.json")
.then(response => response.json())
.then (data => {
    console.log(data.historie)

    var rootElem = document.querySelector("#historie");

    for (let index = 0; index < data.historie.length; index++) {
        const element = data.historie[index];

        var title = element.title;
        var description = element.description;
        var img = element.img;



        console.log(element.title)

        document.querySelector("#historie").innerText = data.historie[0].title
        

    }

    //document.querySelector("#historie").innerText = data.historie[0].title
})




