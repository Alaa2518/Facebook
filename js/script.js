var element = document.querySelector('.contaner-new-account');
document.addEventListener("click", function(e){
    
    if(e.target.dataset.newdata==='new'){
        element.classList.remove('display-none');
        

        
    } else if (e.target.dataset.close==='close'){
        element.classList.add('display-none');
    }
});

var date = new Date();
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days = document.querySelector('#day');

for(var day = 1 ; day <32 ; day++){
    var options = document.createElement("option");
    var attr = document.createAttribute('value');
    attr.value = day;
    options.setAttributeNode(attr);
    options.text =day;
    days.appendChild(options);
}

var months = document.querySelector('#month');
for(var mon = 0 ; mon <12 ; mon++){
    var options = document.createElement("option");
    var attr = document.createAttribute('value');
    attr.value = mon+1;
    options.setAttributeNode(attr);
    
    options.text =month[mon];
    months.appendChild(options);
}

var years = document.querySelector('#year');
for(var year = 1905 ; year <= date.getFullYear() ; year++){
    var options = document.createElement("option");
    var attr = document.createAttribute('value');
    attr.value = year;
    options.setAttributeNode(attr);
    
    options.text =year;
    years.appendChild(options);
}

document.querySelector('#male').addEventListener('click',function(){
    document.querySelector("#m").checked = true;
    
});
document.querySelector('#female').addEventListener('click',function(e){
    document.querySelector("#f").checked = true;
    
});
document.querySelector('#Custom').addEventListener('click',function(e){
    document.querySelector("#o").checked = true;
    
});