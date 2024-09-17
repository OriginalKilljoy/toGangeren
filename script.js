updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <button onclick="twoTimes()">Start gangetabellen</button>
    `
}

function twoTimes(){
    let endCounter = 20;
    for(let counter = 2; counter <= endCounter; counter = counter + 2;){
        document.getElementById('app').innerHTML = '<li>' + counter + '</li>'
    }
}