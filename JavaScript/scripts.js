/*
Ich habe diese Tutorial unter dem folgenden Link gesehen: 
www.toddmotto.com. Ich nutzte auch für das Form Steurung die Beispiele die wir bei der 
*/
(function() {


	var inputs = document.createElement('input');
	

	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;


	if(!supports.autofocus) {
		
	}
	

	if(!supports.required) {
		
	}


	if(!supports.placeholder) {
		
	}
	

	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}

function contact-form() {
    document.getElementById("myForm").reset();
}

})();

    function cTrig(clickedid) { 
      if (document.getElementById(clickedid).checked == true) {
        return false;
      } else {
       var box= confirm("Are you sure you want to do this?");
        if (box==true)
            return true;
        else
           document.getElementById(clickedid).checked = true;
            
      }
    }
//Animated header script - mit diese Script habe ich erreicht ein animated header. Wenn ich "scroll" mehr als 300 px, dann wurde den Text des Headers minimisiert. Das habe ich auch mit hilfe des CSSs Styles stlisiert.// 
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();
