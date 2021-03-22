const table = document.querySelector('.GeneratedTable');







// let arrayrepo=[];
// const ul=document.querySelector(".ul-js");
fetch("https://api.github.com/users/Bipin-chy/repos")
.then(res=>res.json()).then(data=>{
    data.map((item)=>{
        console.log(item);
        const tableBody = document.createElement('tbody');
        const tableRow = document.createElement('tr');
         const urlName = 'https://github.com/Bipin-chy/';


        tableBody.appendChild(tableRow);

        tableRow.innerHTML = `<td>${item.id}</td>
        <td>${item.name}</td>
        <td><a href="${urlName + item.name}">${urlName + item.name}</a></td>
        <td><a href="${item.htm_url}">${item.name}</a></td>
        `;
            // tableData1.innerText = item.id;
            // tableData2.innerText = item.name;
            // tableData3.innerText = item.owner.login;
            // tableData4.innerHTML = '<a href="${item.htm_url}">Click</a>';
        

        
//         const list=document.createElement("li");
//        list.setAttribute("class","list-style");
//        list.innerHTML=`
//        <p> Id :${item.id}</p>
//        <h2>Project:${item.name}</h2>
//        <h3>Owner:${item.owner.login}</h3>
//        <p>Link of project :<a href="${item.html_url}">Link for the code</a></p>`
//  ul.append(list);
        table.appendChild(tableBody);
    })
} );