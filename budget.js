document.querySelector("#today").valueAsDate = new Date();

	 
        var form = document.querySelector('.needs-validation');

        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        })
		
		
$(document).ready(function(){
	$('#dropdownMenu2').hide();
		
	});
    



	