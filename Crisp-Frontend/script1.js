
const user_id = "K1733982Q";
     

function myFunction() {
  // data from express.js
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
 

  // Fetch total by category income
  fetch(`http://localhost:3000/income/totals?user_id='${user_id}'`, requestOptions)
    .then((response) => response.json())
    .then((incometotal) => { 
      // get Income Total and append it
      IncomeTotal = incometotal[0,0].total;
      document.getElementById("income").innerText =`+$${IncomeTotal.toFixed(2)}`;
    
     });
    //  console.log(IncomeTotal);
     
      // Fetch total by category expense
  fetch(`http://localhost:3000/expenses/totals?user_id='${user_id}'`, requestOptions)
  .then((response) => response.json())
  .then((expensetotal) => { 
    // get Expense Total and append it
    ExpenseTotal = expensetotal[0,0].total+expensetotal[0,1].total+expensetotal[0,2].total;
    document.getElementById("expense").innerText =`-$${ExpenseTotal.toFixed(2)}`;
  
   });
     
      

  fetch("http://localhost:3000/transactions/overview?user_id=K1733982Q", requestOptions)
    .then((response) => response.json())
    .then((data) => {
   


        // var data = [
        //   { label: "Entertainment", amount: 400 },
        //   { label: "Groceries", amount: 500 },
        //   { label: "Income", amount: 600 },
        //   {label: "Transport", amount: 700},
        // ];

        //canvas
    var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    radius = Math.min(width, height) / 2;
    
    //The <g> SVG element is a container used to group other SVG elements.
    var g = svg.append("g")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  
  // set the color scale to schemecategory
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  // // set the color scale  
  //   var color = d3.scaleOrdinal([
  //         'green', 'blue', 'orange']);
  
    // Compute the position of each group on the pie:   
    var pie = d3.pie().value(function(d) { 
          return d.amount; 
       });
    //radius for the arc   
    var path = d3.arc()
                 .outerRadius(radius - 10)
                 .innerRadius(0);
    
    //radius for the label      
    var label = d3.arc()
                  .outerRadius(radius)
                 .innerRadius(radius - 80);
          
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    var arc = g.selectAll(".arc")
             .data(pie(data))
             .enter()
             .append("g")
             .attr("class", "arc");
  
        arc.append("path")
             .attr("d", path)
             .attr("fill", function(d) { return color(d.data.label); });
  
             console.log(arc);
      
        arc.append("text")
           .attr("transform", function(d) { 
             return "translate(" + label.centroid(d) + ")"; 
     })
          
          .text(function(d) { return d.data.label; });
  
          svg.append("g")
          .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
          .append("text").text()
          .attr("class", "title")
          
       
      });

          
    }



//test script
category = document.getElementById("cat").value;
// console.log(category);

//Takes category value and filter transactions
//Added Edit and Delete buttons dynamically for each record in the HTML table
function filterTransactions(category, user_id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  // filter by Category name in Form
  var category = document.getElementById("cat").value;
  

  fetch(
    `http://localhost:3000/transactions/list/by-category?category=${category}&user_id='${user_id}'`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      var table = document.getElementById("myTable");
      table.innerHTML = `<tr>
      <th>Edit</th>
      <th style="display:none;">ID</th>
      <th>Date</th>
      <th>Category</th>
      <th>Description</th>
      <th>Amount</th>
      <th>Delete</th>
    </tr>`;
      data.forEach((item) => {
        table.innerHTML += `
          <tr>
          <td><a onClick="onEdit(this)"><img src="edit-24.png"></a></td>
            <td id ="Td-Id" style="display:none;">${item.transaction_id}</td>
            <td>${item.transaction_date}</td>
            <td>${item.category}</td>
            <td>${item.description_id}</td>
            <td>${item.amount.toFixed(2)}</td>
            <td><a onClick="onDelete(this)"><img src="trash-24.png"></a></td>
          </tr>`;
      });
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function init() {
  filterTransactions("",user_id)
};

init()

//Transaction table
var selectedRow = null



function readFormData() {
    var formData = {};
    formData["transaction_id"] = document.getElementById("transaction_id").value;
    formData["date"] = document.getElementById("date").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["desc"] = document.getElementById("desc").value;
    console.log(formData)
    return formData;
}

//After HTML form submission, create a new record dynamically in HTML table
function insertNewRecord() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var formData = readFormData();
  var raw = JSON.stringify({
    "amount": formData.amount,
    "transaction_date": formData.date,
    "description_id": formData.desc,
    "bank_account_id": user_id+"CASH"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/transactions/add", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  filterTransactions("",user_id)
   

}



// push formdata to the CrispAPI
function updateBackend() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var data = readFormData();
 
  var raw = JSON.stringify({
    "transaction_id": data.transaction_id,
    "amount": data.amount
  });
  console.log(raw)
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/transactions/update/by-id", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    console.log(user_id);
  filterTransactions("",user_id);
   
}


//Reset the HTML form
function resetForm() {
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    selectedRow = null;
}

//Handle edit operation for each row in HTML table, populate HTML form with row data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("transaction_id").value=selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[5].innerHTML;
    document.getElementById("desc").value = selectedRow.cells[4].innerHTML;

}



//Handled delete operation, using deleteRow() function to delete row from HTML table
function onDelete(td) {
  row = td.parentElement.parentElement;
  
  

<<<<<<< HEAD
  
=======
  // document.getElementById("myTable").deleteRow(row.rowIndex);
>>>>>>> d1f81fdb117ddbf74e736eb7cade24c2142b12e8
  
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        id_to_delete = row.cells.item(1).innerText;
      
        document.getElementById("myTable").deleteRow(row.rowIndex);
        // to call function to delete transaction by transaction id (id_to_delete)
        deleteRecord = () => {
          fetch(`http://localhost:3000/transactions/delete/by-id?transaction_id=${id_to_delete}`, {
          method: "DELETE",
        })
          .then((response) => response.text())
          .catch((error) => console.log(error));};
        deleteRecord(id_to_delete);
        resetForm();
        
    }``
}

// HTML form submission
// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//         // change from updating the table to posting to backend
//             updateBackend(formData);
//         resetForm();
//     }
// // }

// //validation to the date field
// function validate() {
//     isValid = true;
//     if (document.getElementById("date").value == "") {
//         isValid = false;
//         document.getElementById("DateValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("DateValidationError").classList.contains("hide"))
//             document.getElementById("DateValidationError").classList.add("hide");
//     }
//     return isValid;
// }