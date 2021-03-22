const table = document.querySelector('.GeneratedTable');

fetch("https://api.github.com/users/Bipin-chy/repos")
.then(res=>res.json()).then(data=>{
    data.map((item)=>{
        data.sort();

        console.log(item);
        
       
        const tableBody = document.createElement('tbody');
        const tableRow = document.createElement('tr');
//          const urlName = 'https://github.com/Bipin-chy/';


        tableBody.appendChild(tableRow);

        tableRow.innerHTML = `<td>${item.id}</td>
        <td>${item.name}</td>
        <td><a href="${item.htm_url + '/' + item.name}">${item.htm_url + '/' + item.name}</a></td>
        <td><a href="${item.htm_url + '/' + item.name + '/'}">${item.name}</a></td>
        `;
        table.appendChild(tableBody);
    })
} );
