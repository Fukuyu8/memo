let data = {}
let dayOfweek
window.onload = function () {
    date = new Date()
    dayOfweek = date.getDay()
}

function shutoku() {
    let lokal = localStorage.getItem("table_data")
    data = JSON.parse(lokal)
    console.log(lokal)
}
function clicked(id) {
    let cell = document.getElementById(id)
    let inputcell = document.getElementById("subject")
    console.log(inputcell.value)
    data[id] = inputcell.value
    cell.innerHTML = inputcell.value
    let table = data[id]
    localStorage.setItem("table_data", JSON.stringify(data))
    console.log(data)
}

function finished() {
    let inputcell = document.getElementById("subject")
    inputcell.style.visibility = "hidden"
}


function restoreTable(data) {
    for (let k in data) {
        let cell = document.getElementById(k)
        let col = k[0]
        let colLeft = { "a": "e", "b": "a", "c": "b", "d": "c", "e": "d" }[col]
        cell.innerHTML = data[k]
        for (var i = 1; i < 8; i++) {
            var cellLeft = colLeft + String(i)
            if (data[celLeft] == data[k]) {
                cell.innerHTML = "○" + data[k]//これが前の日と同じ
            }
        }
        console.log(col, colLeft, cellLeft)
    }
}