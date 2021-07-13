let user_id = 'K1733982Q';


let dropdown, table, category;
dropdown = document.getElementById("catDropdown");
table = document.getElementById("myTable");



function getCategories() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://localhost:3000/transactions/overview?user_id=${user_id}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        dropdown.innerHTML += `<option value ="${item.label}">${item.label}</option>`          
      });
    })
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function filterTransactions(category) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `http://localhost:3000/transactions/list/by-category?category=${category}&user_id='${user_id}'`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      table.innerHTML = `<tr>
      <th>Edit</th>
      <th>ID</th>
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
            <td id ="Td-Id">${item.transaction_id}</td>
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
  filterTransactions("")
  getCategories()
};

init()
