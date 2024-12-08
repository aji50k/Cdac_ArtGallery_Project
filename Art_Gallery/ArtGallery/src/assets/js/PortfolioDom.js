var selectedRow = null
window.onload=showPortfolio();

function onFormSubmit(event) {
	event.preventDefault();
    let formData = readFormData();
    if (selectedRow == null){
        insertNewRecord(formData);
	}
    else{
        updateRecord(formData);
	}
    //resetForm();    
}
function readFormData(){
    var fileInput = document.getElementById("imageUp");
    const filename=fileInput.files[0].name
    let formData = {
        Uname: document.getElementById("Uname").value,
        Uid: document.getElementById("Uid").value,
        Ptitle: document.getElementById("Ptitle").value,
        Pdescription: document.getElementById("Pdisc").value,
        Ptype:document.getElementById("Ptype").value,
        imageUp:filename,
        price:document.getElementById("price").value
    };
    return formData;
}
function insertNewRecord(formData) {
    fetch('http://localhost:8123/portfolio/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then((data)=> {
        alert(data.message);
        document.getElementById('portfolioForm').reset();  
        showPortfolio();  
        selectedRow = null;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Submission failed!");
    });
}

function showPortfolio() {

    fetch('http://localhost:8123/portfolio/getALL')
        .then(response=>response.json())
        .then(data=>{
            const tablebody=document.getElementById("display-tab").getElementsByTagName('tbody')[0];
            tablebody.innerHTML='';

            data.forEach(user=>{
                var newRow = document.createElement('tr');
                newRow.innerHTML=`
                <td>${user.Uname}</td>
                <td>${user.Uid}</td>
                <td>${user.Ptitle}</td>
                <td>${user.Pdescription}</td>
                <td>${user.Ptype}</td>
                <td>${user.imageUp}</td>
                <td>${user.price}</td>
                <td><button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button></td>
                
                `
                // cell0 = newRow.insertCell(0);
	            // cell0.innerHTML = user.price;
    
                // cell1 = newRow.insertCell(1);
	            // cell1.innerHTML = user.Uname;
    
                // cell2 = newRow.insertCell(2);
	            // cell2.innerHTML = user.Ptitle;
    
                // cell3 = newRow.insertCell(3);
	            // cell3.innerHTML = user.Pdescription;

                // cell4 = newRow.insertCell(4);
	            // cell4.innerHTML = user.Ptype;

                // cell5 = newRow.insertCell(5);
	            // cell5.innerHTML = user.imageUp;

                // cell6 = newRow.insertCell(6);
	            // cell6.innerHTML = user.price; 

                // cell7 = newRow.insertCell(7);
                // cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

                tablebody.appendChild(newRow);
            });
        })
    //var table = document.getElementById("display-tab").getElementsByTagName('tbody')[0];
    //var newRow = table.insertRow(table.length);
    
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Uname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Uid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Ptitle").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Pdisc").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Ptype").value = selectedRow.cells[4].innerHTML;
    document.getElementById("price").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    fetch('http://localhost:8123/portfolio/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then((data)=> {
        alert(data.message);
        document.getElementById('portfolioForm').reset();  
        showPortfolio(); 
        selectedRow = null; 
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Submmision failed!");  
        
    });
    // selectedRow.cells[0].innerHTML = formData.Uname;
    // selectedRow.cells[1].innerHTML = formData.Uid;
    // selectedRow.cells[2].innerHTML = formData.Ptitle;
    // selectedRow.cells[3].innerHTML = formData.Pdisc;
    // selectedRow.cells[4].innerHTML = formData.Ptype;
    // selectedRow.cells[5].innerHTML = formData.imageUp;
    // selectedRow.cells[6].innerHTML = formData.price;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        selectedRow = td.parentElement.parentElement;
        let delformData = {
            Uname: selectedRow.cells[0].innerHTML,
            Uid: selectedRow.cells[1].innerHTML,
            Ptitle: selectedRow.cells[2].innerHTML,
            Pdescription: selectedRow.cells[3].innerHTML,
            Ptype:selectedRow.cells[4].innerHTML,
            imageUp:selectedRow.cells[5].innerHTML ,
            price:selectedRow.cells[6].innerHTML
        }
        fetch('http://localhost:8123/portfolio/deleteRow', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(delformData)
        })
        .then(response => response.json())
        .then((data)=> {
            alert(data.message); 
            document.getElementById('portfolioForm').reset();  
            showPortfolio(); 
            selectedRow = null; 
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Deletion failed!");
        });
        //document.getElementById('display-tab').deleteRow(selectedRow.rowIndex);
        //resetForm();
    }
}


function resetForm() {
    
    document.getElementById("Uname").value = '';
    document.getElementById("Uid").value = '';
    document.getElementById("Ptitle").value = '';
    document.getElementById("Pdisc").value = '';
    document.getElementById("Ptype").value = '';
    document.getElementById("imageUp").value = null;
    document.getElementById("price").value = '';
    selectedRow = null;
}