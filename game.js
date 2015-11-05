/*Set commonly used feeback to user as varriables ya and no. Later I will concatenate these as either confirmation or 
Also we can create a variable to keep track of the users accuracy. */

var ya = "Correct!";   
var no = "Incorrect. I actually";
var numberCorrect = 0;

//Next we meet our user and prep them for what will follow. 

var name = prompt("What is your name?");
alert("It's nice to meet you " + name + ". My name is Michael. Try to answer the following questions to learn more about me.");

//question time!
var a1 = prompt("Did I graduate college? Please answer by typing either 'yes' or 'no'").substring(0,1).toLowerCase(); 

/*I found that I can get by with only 2 possible affirmative conditions if I first convert the user input to all lowercase as seen above. 
Additionally, I found that by cutting the string down to only take the first letter of their input I can account for answers like "yup" or 
"ya" etc*/

	if ((a1 === "y"))
	{
		alert(ya + ' I did graduate from college. UW school of Psychology in fact.');

		//Because our user has answered a question correctly, we must increment the variable that tracks their accuracy. See below.
		console.log(ya + ' I did graduate from college. UW school of Psychology in fact.');
		numberCorrect++;
	}
	else{
		alert(no + ' graduated from the University of Washington with a B.A. in Psychology');
		console.log(no + ' I did graduate from college. UW school of Psychology in fact.');
	}


/*I left this second question to represent what I originally had as it illustrates the difference in code from the first. 
The big drawback here is that by not changing the input to all one case we would have to provide additional statements for things like "YEs" or "yES" 
in order for the code to have the same functionality as the first question*/

var a2 = prompt("Do I have a pet? (y/n)");

	
	if ((a2 === "y") || (a2 === "yes") || (a2 === "Yes") || (a2 === "YES"))
	{
		alert(ya + ' I do have a pet. A fiesty Alaskan Malamute to be exact.');
		console.log(no + ' have an adorable dog name Nova.');
		numberCorrect++;
	}
	else{
		alert(no + ' have an adorable dog name Nova');
		console.log(no + ' have an adorable dog name Nova.');
	}


/*If I was a good programmer with more time on my hands I would create a condition that only allowed for the user to input acceptable responses to our questions.
Non-sense input like "kajsfdhkasjhf" or irrelevant input like "cat" would loop back to the original question until some form of yes or no was entered instead
of just being recorded as a "no" answer.*/

var a3 = prompt("Have I traveled outside of North America? (y/n)").substring(0,1).toLowerCase();

	if ((a3 === "y") ||  (a3 === "yes"))
	{
		alert(ya + ' I have been outside North America. To Japan to be exact. And full disclosure, I lied about my age so that I could drink alcohol. =)');
		console.log(ya + ' I have been outside North America. To Japan to be exact. And full disclosure, I lied about my age so that I could drink alcohol. =)');
		numberCorrect++;
	}
	else{
		alert(no + ' spent a month in Japan. It was great fun!');
		console.log(no + ' spent a month in Japan. It was great fun!');
	}

//Finally I fooled around with some various cases where feedback will vary based on the accuracy of our user.

switch (numberCorrect){
	case 1:
		alert("You got " + numberCorrect + " question correct. Thanks for playing and getting to know me! Feel free to play again to learn more about me.");
		break;
	case 2:
		alert("Well done. You got " + numberCorrect + " questions correct. It would seem you know me pretty well. Thanks for playing and I hope to learn more about one another soon!");
		break;
	case 3:
		alert("Awesome job! You got " + numberCorrect + " questions correct. You must know me really well! Thanks for playing and next time I would love to learn about you!");
		break;
	default:
		alert("You got " + numberCorrect + " questions correct. There was only a 11% chance this would happen. Clearly you must hate me and want nothing to do with me. /cry /wrists");
		break;

	}	