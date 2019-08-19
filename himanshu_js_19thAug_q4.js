//accepts a string as a parameter and converts the first letter of each word of the string in upper case

function conversion(s1){

// 			var s1=document.strings.value1.value;
            var s2 = s1.toLowerCase().split(" ");
            for (var i = 0; i < s2.length; i++) {
       
            s2[i] = s2[i].charAt(0).toUpperCase() + s2[i].substring(1);     
   }
   
    var s3=s2.join(" "); 
		console.log(s3);
		}

		conversion('himanshu raj is')