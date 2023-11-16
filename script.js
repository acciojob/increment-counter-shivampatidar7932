//your JS code here. If required.
 var counterElement = document.getElementById('counter');
    var incrementBtn = document.getElementById('incrementBtn');
var counterValue = 0;
 function handleIncrement() {
	  alert(counterValue);
	  counterValue++;
	  counterElement.textContent = counterValue;
    }
incrementBtn.addEventListener('click', handleIncrement);
