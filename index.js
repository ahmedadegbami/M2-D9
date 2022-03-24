function deleteRow1() {
    let trNodes1=document.querySelector(".trclass1")
    
        trNodes1.remove()
    }

function deleteRow2() {
    let trNodes2=document.querySelector(".trclass2")
    
        trNodes2.remove()
    }

function deleteRow3() {
    let trNodes3=document.querySelector(".trclass2")
    
    trNodes3.remove()
    }


// function addAlbum() {
//     let table = document.getElementById("myTable")
//     let row = document.createElement("tr")
//     for (let i=0; i <= 3; i++) {
//         let column = document.createElement("td")
//         row.appendChild(column)

//     }
//     table.appendChild(row)


function addAlbum() {
    let table = document.getElementById("myTable")
    let newRow = table.insertRow(table.rows.length)

   




    let track = newRow.insertCell(0);
    let title = newRow.insertCell(1);
    let duration = newRow.insertCell(2);
    
    

    
    let trackid = document.getElementById("trackid")
    let titleid = document.getElementById("titleid")
    let durationid = document.getElementById("durationid")

   
    
    
    
    title.innerHTML = titleid.value;
    track.innerHTML = trackid.value;
    duration.innerHTML = durationid.value;
    

    let td4= document.getElementsByTagName("tr")[4]
    let btn= document.createElement("button")
    btn.innerHTML = "Delete"
    
    td4.appendChild(btn)
    

}
