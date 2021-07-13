function getFromServer() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    // the ONLY API called that i edit to test (Azhar)
    fetch("http://localhost:3000/transactions/overview?user_id=K1733982Q", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        var html = `<table>
               <tr>
               <th> Category </th>
               <th> Sum </th>
               <th> Email </th>
               <th> Password </th>
               </tr>
             `;
        data.forEach((item) => {
          html += `
              <tr>
                <td> ${item.category}</td>
                <td> ${item.sum} </td>
                <td> ${item.email} </td>
                <td> ${item.password} </td>
              </tr>
              `;
        });
        html += `</table>`;
        $(".mypanel").html(html);
      })
      .catch((error) => console.log("error", error));
  

  }

  
  
  function deleteData() {
    let id_to_delete = document.getElementById("idToDelete").value;
    fetch(`http://localhost:3000/customer/del?id=${id_to_delete}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((response) => $(".mypanel").html(response))
      .catch((error) => console.log(error));
  }
  
  function postData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Populate this data from e.g. form.
    var raw = JSON.stringify({
      type: 0,
      name: "dixant mittal",
      email: "dixant@email.com",
      tolerance: 0.5,
      wallet: 100000,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
  
    fetch("http://localhost:3000/customer/add", requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }
  