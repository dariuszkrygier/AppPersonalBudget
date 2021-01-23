//$(document).ready(function(){
//	$('#dropdownMenu2').hide();	
//	});

var d = new Date();

var year = d.getFullYear();
var month = d.getMonth()+1;
var day = d.getDate();
var startDate;
var endDate;
var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() , date.getDate());
var previousMonthFirstDay = new Date(yearOfPreviousMonth, newMonth, 1);
var previousMonthLastDay = new Date(yearOfPreviousMonth, newMonth+1, 0);
var thisYearFirstDay = new Date(year, 0, 1);
var thisYearLastDay = new Date(year, month-1 , d.getDate());

var newMonth = d.getMonth() - 1;
var yearOfPreviousMonth = date.getFullYear();
if(newMonth < 0){
    newMonth += 12;
    yearOfPreviousMonth = date.getFullYear()-1;
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

               
   document.getElementById("thisMonth").onclick = function (){thisMonth()};
	
	function thisMonth(){
		document.getElementById("wynik1").innerHTML = formatDate(firstDay);
		document.getElementById("wynik2").innerHTML = formatDate(lastDay);
    }
		
	  document.getElementById("previousMonth").onclick = function (){previousMonth()};
	
	function previousMonth(){
		document.getElementById("wynik1").innerHTML = formatDate(previousMonthFirstDay);
		document.getElementById("wynik2").innerHTML = formatDate(previousMonthLastDay);
    }
      
	
  document.getElementById("thisYear").onclick = function (){thisYear()};
	
	function thisYear(){
		document.getElementById("wynik1").innerHTML = formatDate(thisYearFirstDay);
		document.getElementById("wynik2").innerHTML = formatDate(thisYearLastDay);
    }
	
	 document.getElementById("selectDateRange").onclick = function (){selectDateRange()};
	
	function selectDateRange(){
		document.getElementById("wynik1").innerHTML = formatDate( document.getElementById("dateFrom"));
		document.getElementById("wynik2").innerHTML = formatDate( document.getElementById("dateTill"));
    }
		

  // A basic configuration for a Pie chart with just the labels
    // separated out into their own array. This is because the same
    // array is used for both the labels and the tooltips so
    // doing this makes for less upkeep when the time comes to
    // change things around.
    //
    // Also note that the stroke color has been set to transparent so
    // that there's no separation between the segments
    //
    labels = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    new RGraph.Pie({
        id: 'cvs',
        data: [20,1,1,1,1,1,1],
        options: {
            
            // This is the tooltip property using formatted tooltips
            tooltips: '%{property:myDaynames[%{index}]}<br /><span style="font-weight: bold; font-size:26pt">%{value_formatted}</span>',
            
            // The units that are appended to the %{value_formatted} value
            tooltipsFormattedUnitsPost: '%',
            
            // Turn the little triangular pointer off
            tooltipsPointer: false,
            
            // Turn fixed positioning off
            tooltipsPositionStatic: false,
            
            // Some CSS values that are set on the tooltips so that you can customise them
            tooltipsCss: {
                backgroundColor: 'white',
                color: 'black',
                border: '3px solid black'
            },

            // A custom property - the formatted tooltips can then
            // access this to use the data inside the tooltip
            myDaynames: labels,

            shadow: false,
            colorsStroke: 'transparent',
            keyPositionGraphBoxed: false,
            
        }
    // Draw the chart and add responsive capabilities. On smaller screens the width
    // is reduced and the labels are changed to a key. This takes up less space.
    }).draw().responsive([
        {maxWidth: null,width:550,height:250,options: {centerx: null,key: [],labels: labels}},
        {maxWidth: 600,width:420,height:250,options: {centerx: 150,key:labels, labels: []}}
    ]);


		
	document.querySelector("#today").valueAsDate = new Date();

	 
        var form = document.querySelector('.needs-validation');

        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        })
		
		

    



	