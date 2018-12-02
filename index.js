var request = new XMLHttpRequest();
request.open("GET", "http://localhost:1611/", true);
request.onload = function() {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    {

      for (var i = 0;i<data.length; i++)
{
        var myForm = document.getElementById("preference");
        var checkbox = document.createElement("input"); 
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "product");
        checkbox.setAttribute("value", data[i].Category);
        checkbox.setAttribute('id', 'check'+i);     // SET UNIQUE ID.checkbox.checked = true; 
        myForm.appendChild(checkbox); 
        var lbl = document.createElement('label');  // CREATE LABEL.
        lbl.setAttribute('for', 'check'+i);
        // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
        lbl.appendChild(document.createTextNode(data[i].Category));
        // linebreak = document.createElement("br");
        // linebreak2 = document.createElement("br");
        myForm.appendChild(lbl);
        // myForm.appendChild(linebreak);
        // myForm.appendChild(linebreak2);


checkbox.checked = false; 

}
    }
  } else {
    console.log("error");
  }
};
request.send();

var sub=document.getElementById("htmlsubmit");

sub.addEventListener('click', 
function() {
    var myForm = document.getElementById("preference");
    var myDiv = document.getElementById("result");
while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
}
        for(var i=0;i<myForm.childElementCount;i++)
        {
            var checkif= (document.getElementById("check"+i).checked);
            if(checkif== true)
            {
                 console.log(document.getElementById("check"+i).value);
                 if(document.getElementById("check"+i).value)
                 {
                     console.log("eeeeeeeeee");
                 
                 
                var request = new XMLHttpRequest();
request.open("GET", "http://localhost:1611/product/"+document.getElementById("check"+i).value, true);
request.onload = function() {
  var data = JSON.parse(this.response);
console.log("Result: "+data[0]);


if (request.status >= 200 && request.status < 400) {
    {

      for (var j = 0;j<data.length; j++)
{
        var myDiv = document.getElementById("result");
        var para = document.createElement("P");                  
        var t = document.createTextNode("Product Name:  "+data[j].Prod_Name+"  Price: "+data[j].Price);
        para.appendChild(t);                                          
        myDiv.appendChild(para);       
                linebreak = document.createElement("br");
            myDiv.appendChild(linebreak);

}
    }
  } else {
    console.log("error");
  }
};
request.send();
console.log(document.getElementById("check"+i).value);  

                 }
            }
        }
    }
);
