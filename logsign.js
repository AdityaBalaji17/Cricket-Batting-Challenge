var n=1;
var MM=0;
     var name,pass,pass1;
var object;
Parse.initialize("qLdV6c6fTiEZ1iEVQQXEE5ja1K3yTXwxZJdwatQ9", "KShL5JwFUr9yVvaQssD3VU5fa2FC9eQ48RuV8v7J");
function signup()
{
         n=1;
		 while(n==1){
 name=prompt("Enter your name","");
var stat = Parse.Object.extend("Statistics");
var query = new Parse.Query(stat);
query.equalTo("Name", name);
n=0;
query.find({
  success: function(results) {
    /*alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      alert(object.id + ' - ' + object.get('playerName'));
    }*/
	if(results.length==0)
	   {
	    pass1="";
	   while(pass1=="")
	   pass1=prompt("Enter a password","");
	  
	    var s = new stat();
 
s.set("Name", name);
s.set("password", pass1);
s.set("Matches",0);
s.set("Runs",0);
s.set("Balls",0);
s.set("Average",0);
s.set("Strike_Rate",0);
s.set("HS",0);
      n=0;
s.save();
alert("Done");
	   
	    }
		else
		{
		var no=confirm("Username already exists. Please choose a new name");
		if(no)
		n=1;
		else
		n=0;
		}
		
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}
}

function login()
{
         n=1;
		 while(n==1){
name=prompt("Enter your name","");
 
 pass=prompt("Enter your password","");

var stat = Parse.Object.extend("Statistics");
var query = new Parse.Query(stat);
query.equalTo("Name", name);
query.equalTo("password", pass);
n=0;
query.find({
  success: function(results) {
    if(results.length>0)
	  { object=results[0];
	  alert("Logged in!");
	  MM=1;
	  	}  
		else
		{
		alert("Invalid credentials");
		}
	    var s = new stat();
 
		
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}
}

