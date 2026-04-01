// Step -1 catch/select form tag 
document.querySelector("form").addEventListener("submit", getdata);

function getdata(e) {
    e.preventDefault()
    const taskName = document.querySelector("#task").value;
    const taskPriority = document.querySelector("#priority").value;;

    // console.log(taskName,taskPriority);

    let taskObj = {
        taskName, taskPriority
    }

    console.log(taskObj);
    displayTable(taskObj)

}


function displayTable(taskObj) {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = taskObj.taskName;

    const td2 = document.createElement("td");
    td2.innerText = taskObj.taskPriority;

    const td3 = document.createElement("td");
    td3.innerText = "Add";

    row.append(td1, td2, td3);

    document.querySelector("tbody").append(row)
}
//  <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>