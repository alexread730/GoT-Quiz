$(document).ready(function() {
	var i = -1;
	var qNum = 0;
	var score = 0;
	var toggleElements = $(".radbut, br, #R1, #R2, #R3, #R4");
	toggleElements.hide();
	

	//display value upon radio button checked change - for debugging purposes
	$('.radbut').change(function() {
		var value = ($('input[name="Q"]:checked').val());
		$("#value").text(value);
	});


		$("#next").click(function(){

			if (i<3) {
			toggleElements.hide();
			toggleElements.fadeIn("slow");
		}


			//checks which radio button is checked and sets it to value
			var value = ($('input[name="Q"]:checked').prop('checked', false).val()); 
			
			//add +1 to score if choice matches answer
			if (i >= 0 && i < 4) {
				
				if (value == allQuestions[i].answer) {
					score++;
				};
			};
       		

			i += 1;
			qNum += 1;

			//display questions and variables
			//toggleElements[allQuestions[i].choices ? 'show' : 'hide']();

			$("#questionLoc").text(allQuestions[i].question);

			if (allQuestions[i].choices) {
			$("#R1").text(allQuestions[i].choices[0]);
			$("#R2").text(allQuestions[i].choices[1]);
			$("#R3").text(allQuestions[i].choices[2]);
			$("#R4").text(allQuestions[i].choices[3]);
			}


		 /* Show these for values
			$("#qNum").text(qNum);
			$("#score").text(score);
			$("#quesVal").text(allQuestions[i].answer);
		*/
		
			if (i >= 3) {
				$("h3").text("Winter has come! You have scored " +score+ "/3.");
				toggleElements.hide();
			}			



		});
});

var allQuestions = [];

function question(question, choices, answer) {
				this.question = question;
				this.choices = choices;
				this.answer = answer;
};

var question1 = new question("Who is Sansa\'s mother?", ["Cercei", "Marjorie", "Catelin", "Lysa"], 3);
var question2 = new question("Where are the Starks from?", ["Winterfell", "King's Landing", "Valyria", "Dorne"], 1);
var question3 = new question("Who is the biggest asshole in this group?", ["Eddard", "Khaleesi", "Bran", "Geoffrey"], 4);
var endSent = new question(" ");

allQuestions.push(question1, question2, question3, endSent);

