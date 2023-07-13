document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default form submission behavior

    //event.preventDefault(); // prevent the default form submission behavior
    
    // get the form field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
     var website=document.getElementById('website').value;
    var skills = [];
     
    if (document.getElementById('Java').checked) {
        skills.push(document.getElementById('Java').value);
        }
    if (document.getElementById('HTML').checked) {
    
    skills.push(document.getElementById('HTML').value);
    
    }
    
    if (document.getElementById('CSS').checked) {
        skills.push(document.getElementById('CSS').value);
        }
       
        
        var gender = '';
        if (document.getElementById('Male').checked) {
        gender = document.getElementById('Male').value;
        }
        if (document.getElementById('Female').checked) {
        gender = document.getElementById('Female').value;
        }
        // get the image URL and create an <img> element
var imageUrl = document.getElementById('image').value;
var imageElement = document.createElement('img');
imageElement.src = imageUrl;
imageElement.classList.add('shading-fade-effect');
//validate form input
if(name=== "" || email=== "" || website=== "" || gender=== "" || skills.length=== ""|| imageUrl==="")
{
    alert("Please fill out all required fields");
    return;
}
if(name.length<5 ){
    alert("OOps!, You need to write name atleast of 5 digit. ");
    return;
}
if(name.length>15){
    alert("OOps!, You need to write name less than 15 digit. ");
    return;
}

    
    
        // create a new table row
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + '<b>'+ name+'</b>' +'</br>'+ gender  +'</br>'+ email + '</br>'+'<a href="' + website + '" target="_blank">' + website + '</a>' +'</br>' + skills.join(', ')  + '</td>'+ '<td>'+
       imageElement.outerHTML +'</td>';

        // add the new row to the table
        var tableBody = document.getElementById('form-data');
        tableBody.appendChild(newRow);
        
    }); 
    
   
  
    
   