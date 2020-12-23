window.onload = loadToDos();

//show todo add div
function showToDoAdder(){
    let toDoInputVisibility = document.getElementById('toDoInput').style.visibility;
    if(toDoInputVisibility === "hidden"){
        document.getElementById('toDoInput').style.visibility = "visible";
        document.getElementById('todoList').style.visibility = "hidden";
    }else{
        document.getElementById('toDoInput').style.visibility = "hidden";
        document.getElementById('todoList').style.visibility = "visible";
    }
}

//send new ToDo Ticket as json to backend
function saveTicket(){ 
    let myTitle = document.getElementById('title').value;
    let myDesc = document.getElementById('desc').value;
    let newTicket = {id: "1", "title: ": myTitle, "desc: ": myDesc, isDone: false}

    //open connection -> ToDo: open once
    let dbExists = true;
    let request = window.indexedDB.open('todo');
    request.onupgradeneeded = function (e){
        e.target.transaction.abort();
        dbExists = false;
    }
    request.onerror = function(event) {
        console.error(event.target.result);
    };
    request.onupgradeneeded = function(event) {
        //add to db
        var db = event.target.result;
        var objectStore = db.createObjectStore("tickets");
        objectStore.add(newTicket);
        console.log("saved");
        
        //clear add form
        showToDoAdder();
        document.getElementById("title").value = '';
        document.getElementById("desc").value = '';

        //create new ticket div
        var ticket = document.createElement("DIV");
        ticket.innerHTML =`
            <div class="ticket">
                <label>${myTitle}</label></br><hr>
                <label class="switch">
                    <input type="checkbox" onclick="ticketIsDone()">
                    <span class="slider round"></span>
                </label>
                <div class="desc">
                    <span>
                        ${myDesc}
                    </span>  
                </div>
            </div>
        `;
        document.getElementById("todoList").appendChild(ticket); 
    }
} 

//omLoad func: load ToDos Tickts from indexedDB
function loadToDos(){
    
}

//update ticket
function ticketIsDone(){
    console.log("done");
}