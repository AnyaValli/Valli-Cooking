 //Celsius to Fahrenheit converter, adjust x to recipe Celsius value

 //<script>

 const x = 80
 const Celsius = x;
 const Fahrenheit = Celsius *(1.8) + 32;
 console.log("Set your oven to "+ Celsius + "C/" + Fahrenheit + "F");

 var myHeader = document.getElementById("temp");
 myHeader.innerHTML = "Set your oven to " + Celsius + "°C/"  + Fahrenheit + "°F"

 //</script>