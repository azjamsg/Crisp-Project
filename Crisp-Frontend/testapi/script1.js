// //data from transactions-category

// const TransactionDataAll = [
//     { id: 1, category: 'Food', amount: 300 },
//     { id: 2, category: 'Transport', amount: 50 },
//     { id: 3, category: 'Entertainment', amount: 100 },
//     { id: 4, category: 'Bills', amount: 150 }

//    ];

//    var TransactionData = null;

const user_id = "K1733982Q";

function myFunction() {
  // data later get from the mysql
  var data = [
    { label: "Food", amount: 300 },
    { label: "Transport", amount: 50 },
    { label: "Entertainment", amount: 100 },
  ];
  var svg = d3
    .select("svg") //drawing the canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 200);

  svg
    .selectAll("rect") //this whole section is the data
    .data(data)
    .enter()
    .append("rect") //rectangle without parameters
    .attr("transform", function (d, i) {
      return "translate(" + 20 + "," + i * 25 + ")";
    })

    .attr("fill", "#86BAA1")
    .attr("height", 20)
    .attr("width", function (d) {
      return d.amount + "px";
    });
  //width = 40px

  svg
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("transform", function (d, i) {
      return "translate(0," + Number(i * 25 + 15) + ")";
    })
    .attr("fill", "black")
    .text(function (d) {
      return d.label;
    });
}

// // //date filter
// // function dateFunction() {
// //   document.getElementById("myDropdown").classList.toggle("show");
// //   function filterdateFunction() {
// //     var input, filter, ul, li, a, i;
// //     input = document.getElementById("myInput");
// //     filter = input.value.toUpperCase();
// //     div = document.getElementById("myDropdown");
// //     a = div.getElementsByTagName("a");
// //     for (i = 0; i < a.length; i++) {
// //       txtValue = a[i].textContent || a[i].innerText;
// //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //         a[i].style.display = "";
// //       } else {
// //         a[i].style.display = "none";
// //       }
// //     }
// //   }
// // }

// // //category filter
// // function catFunction() {
// //   document.getElementById("myDropdown2").classList.toggle("show");
// //   function filtercatFunction() {
// //     var input, filter, ul, li, a, i;
// //     input = document.getElementById("myInput2");
// //     filter = input.value.toUpperCase();
// //     div = document.getElementById("myDropdown2");
// //     a = div.getElementsByTagName("a");
// //     for (i = 0; i < a.length; i++) {
// //       txtValue = a[i].textContent || a[i].innerText;
// //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //         a[i].style.display = "";
// //       } else {
// //         a[i].style.display = "none";
// //       }
// //     }
// //   }
// // }
// //To see how to get category input by document.getElementbyID
// //Type into category (e.g.Transport) to filter, leave blank to remove filter
// var category = "Transport";

// function filterTransactions(category, user_id) {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(
//     `http://localhost:3000/transactions/list/by-category?category=${category}&user_id='${user_id}'`,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       var table = document.getElementById("myTable");
//       table.innerHTML = `<tr>
//       <th>Transaction ID</th>
//       <th>Timestamp</th>
//       <th>Category</th>
//       <th>Description</th>
//       <th>Amount</th>
//     </tr>`;
//       data.forEach((item) => {
//         table.innerHTML += `
//           <tr>
//             <td>${item.transaction_id}</td>
//             <td>${item.transaction_date}</td>
//             <td>${item.category}</td>
//             <td>${item.description_id}</td>
//             <td>${item.amount}</td>
//           </tr>`;
//       });
//     })
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

// function init() {
//   filterTransactions("",user_id)
// };

// init()

// //Transaction table
// var selectedRow = null

// // HTML form submission
// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["date"] = document.getElementById("date").value;
//     formData["amount"] = document.getElementById("amount").value;
//     formData["desc"] = document.getElementById("desc").value;
//     formData["cat"] = document.getElementById("cat").value;
//     return formData;
// }

// //After HTML form submission, create a new record dynamically in HTML table
// //Added Edit and Delete buttons dynamically for each record in the HTML table
// function insertNewRecord(data) {
//     var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = "";
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.date;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.cat;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.desc;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.amount;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
// }

// //Reset the HTML form
// function resetForm() {
//     document.getElementById("date").value = "";
//     document.getElementById("amount").value = "";
//     document.getElementById("desc").value = "";
//     document.getElementById("cat").value = "";
//     selectedRow = null;
// }

// //Handle edit operation for each row in HTML table, populate HTML form with row data
// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("date").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("amount").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("desc").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("cat").value = selectedRow.cells[3].innerHTML;
// }

// //After edit operation, need to show updated data in an HTML table
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.date;
//     selectedRow.cells[1].innerHTML = formData.amount;
//     selectedRow.cells[2].innerHTML = formData.desc;
//     selectedRow.cells[3].innerHTML = formData.cat;
// }

// //Handled delete operation, using deleteRow() function to delete row from HTML table
// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("myTable").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
// // //data from transactions-category

// // const TransactionDataAll = [
// //     { id: 1, category: 'Food', amount: 300 },
// //     { id: 2, category: 'Transport', amount: 50 },
// //     { id: 3, category: 'Entertainment', amount: 100 },
// //     { id: 4, category: 'Bills', amount: 150 }

// //    ];

// //    var TransactionData = null;

// const user_id = "K1733982Q";

// function myFunction() {
//   // data later get from the mysql
//   var data = [
//     { label: "Food", amount: 300 },
//     { label: "Transport", amount: 50 },
//     { label: "Entertainment", amount: 100 },
//   ];
//   var svg = d3
//     .select("svg") //drawing the canvas
//     .append("svg")
//     .attr("width", 500)
//     .attr("height", 200);

//   svg
//     .selectAll("rect") //this whole section is the data
//     .data(data)
//     .enter()
//     .append("rect") //rectangle without parameters
//     .attr("transform", function (d, i) {
//       return "translate(" + 20 + "," + i * 25 + ")";
//     })

//     .attr("fill", "#86BAA1")
//     .attr("height", 20)
//     .attr("width", function (d) {
//       return d.amount + "px";
//     });
//   //width = 40px

//   svg
//     .selectAll("text")
//     .data(data)
//     .enter()
//     .append("text")
//     .attr("transform", function (d, i) {
//       return "translate(0," + Number(i * 25 + 15) + ")";
//     })
//     .attr("fill", "black")
//     .text(function (d) {
//       return d.label;
//     });
// }

// // //date filter
// // function dateFunction() {
// //   document.getElementById("myDropdown").classList.toggle("show");
// //   function filterdateFunction() {
// //     var input, filter, ul, li, a, i;
// //     input = document.getElementById("myInput");
// //     filter = input.value.toUpperCase();
// //     div = document.getElementById("myDropdown");
// //     a = div.getElementsByTagName("a");
// //     for (i = 0; i < a.length; i++) {
// //       txtValue = a[i].textContent || a[i].innerText;
// //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //         a[i].style.display = "";
// //       } else {
// //         a[i].style.display = "none";
// //       }
// //     }
// //   }
// // }

// // //category filter
// // function catFunction() {
// //   document.getElementById("myDropdown2").classList.toggle("show");
// //   function filtercatFunction() {
// //     var input, filter, ul, li, a, i;
// //     input = document.getElementById("myInput2");
// //     filter = input.value.toUpperCase();
// //     div = document.getElementById("myDropdown2");
// //     a = div.getElementsByTagName("a");
// //     for (i = 0; i < a.length; i++) {
// //       txtValue = a[i].textContent || a[i].innerText;
// //       if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //         a[i].style.display = "";
// //       } else {
// //         a[i].style.display = "none";
// //       }
// //     }
// //   }
// // }
// //To see how to get category input by document.getElementbyID
// //Type into category (e.g.Transport) to filter, leave blank to remove filter
// var category = "Transport";

// function filterTransactions(category, user_id) {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(
//     `http://localhost:3000/transactions/list/by-category?category=${category}&user_id='${user_id}'`,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       var table = document.getElementById("myTable");
//       table.innerHTML = `<tr>
//       <th>Transaction ID</th>
//       <th>Timestamp</th>
//       <th>Category</th>
//       <th>Description</th>
//       <th>Amount</th>
//     </tr>`;
//       data.forEach((item) => {
//         table.innerHTML += `
//           <tr>
//             <td>${item.transaction_id}</td>
//             <td>${item.transaction_date}</td>
//             <td>${item.category}</td>
//             <td>${item.description_id}</td>
//             <td>${item.amount}</td>
//           </tr>`;
//       });
//     })
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// }

// function init() {
//   filterTransactions("",user_id)
// };

// init()

// //Transaction table
// var selectedRow = null

// // HTML form submission
// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["date"] = document.getElementById("date").value;
//     formData["amount"] = document.getElementById("amount").value;
//     formData["desc"] = document.getElementById("desc").value;
//     formData["cat"] = document.getElementById("cat").value;
//     return formData;
// }

// //After HTML form submission, create a new record dynamically in HTML table
// //Added Edit and Delete buttons dynamically for each record in the HTML table
// function insertNewRecord(data) {
//     var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = `<a onClick="onEdit(this)">Edit</a>`;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = "";
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.date;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.cat;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.desc;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.amount;
//     cell7 = newRow.insertCell(6);
//     cell7.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
// }

// //Reset the HTML form
// function resetForm() {
//     document.getElementById("date").value = "";
//     document.getElementById("amount").value = "";
//     document.getElementById("desc").value = "";
//     document.getElementById("cat").value = "";
//     selectedRow = null;
// }

// //Handle edit operation for each row in HTML table, populate HTML form with row data
// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("date").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("amount").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("desc").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("cat").value = selectedRow.cells[3].innerHTML;
// }

// //After edit operation, need to show updated data in an HTML table
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.date;
//     selectedRow.cells[1].innerHTML = formData.amount;
//     selectedRow.cells[2].innerHTML = formData.desc;
//     selectedRow.cells[3].innerHTML = formData.cat;
// }

// //Handled delete operation, using deleteRow() function to delete row from HTML table
// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("myTable").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }

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