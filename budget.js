//$(document).ready(function(){
//	$('#dropdownMenu2').hide();	
//	});

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day;


               
                document.getElementById('wynik').innerHTML = output;
      


			
	document.querySelector("#today").valueAsDate = new Date();

	 
        var form = document.querySelector('.needs-validation');

        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        })
		
		

    



	