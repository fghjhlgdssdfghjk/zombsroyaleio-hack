Update=1.2.3 query < s < float value x,y

<!DOCTYPE html>
<title>My Example</title>


<p id="msg"></p>

<script>
  var citiesAU =  ["Sydney", "Melbourne", "Brisbane", "Perth"],
      citiesNZ =  ["Dunedin", "Christchurch", "Auckland", "Wellington"],
      citiesUS =  ["New York", "Miami", "San Fransisco", "Los Angeles"],
      cities = citiesAU.concat(citiesNZ, citiesUS);
  document.getElementById("msg").innerHTML = cities;
</script>

<!DOCTYPE html>
<title>My Example</title>

<script>
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function(event) {

  // Put the button into a variable
  var e = document.getElementById("myForm");
  var msg = "";
 
  // Wait for user to click the button
  e.addEventListener( "change", function() {
  
    // Put the selected value into a variable
    var myColor = this.color.value;
    
    // The "If Else If" statement.
    if (myColor == "Blue") {
    
      msg = "Just like the sky!";
        
    }	
    
    else if (myColor == "Red") {
    
    <!DOCTYPE html>
<title>My Example</title>


<time id="date"></time>

<script>
  /* 
  Create a JavaScript Date object for the current date and time,
  then extract the desired parts, then join them again in the desired format.
  */
  var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear(),
      date = day + "/" + month + "/" + year;
      
  // Output the date to the above HTML element
  document.getElementById("date").innerHTML = date;
</script>
