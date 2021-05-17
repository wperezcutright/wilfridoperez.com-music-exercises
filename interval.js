function playsounds()
{
setup();
var firstSound = new Audio(pitches[note1] + ".wav");
var secondSound = new Audio(pitches[note2] + ".wav");

firstSound.play();
secondSound.play();
}

var pitches = new Array();
var note1 = 0;
var note2 = 0;

function setup()
{
var addedElement = document.getElementById("appended");
if(typeof(addedElement) != 'undefined' && addedElement != null)
    {
        addedElement.remove();
    }
//var myNum = 0;
//while (myNum==0 || myNum == 9){
//myNum = Math.trunc(Math.random() * 10);  //determines first number
//}

//note1 = myNum - 1;    //alters number so it works for array index
note1 = 0;
var myNum2 = 0;
while (myNum2 <= 1 || myNum2 == 9){
myNum2 = Math.trunc(Math.random() * 10);   //determines second number
}
note2 = myNum2 - 1;


pitches.push("petition_assets/39187__jobro__piano-ff-040");
pitches.push("petition_assets/39189__jobro__piano-ff-042");
pitches.push("petition_assets/39191__jobro__piano-ff-044");
pitches.push("petition_assets/39193__jobro__piano-ff-045");
pitches.push("petition_assets/39195__jobro__piano-ff-047");
pitches.push("petition_assets/39197__jobro__piano-ff-049");
pitches.push("petition_assets/39199__jobro__piano-ff-051");
pitches.push("petition_assets/39200__jobro__piano-ff-052");
}

function compare()
{
var message;
var newElement;
var addedElement = document.getElementById("appended");
if(typeof(addedElement) != 'undefined' && addedElement != null)
    {
        addedElement.remove();
    }
var checkedButton = $('input[name=interval]:checked').attr('value');
var intervalSize = note2 - note1 + 1;
var intervalValue = 
$('input[value=' + intervalSize.toString() + ']').attr('id');
if (intervalValue != "undefined" && intervalSize >= 2)
{
if (parseInt(intervalSize) === parseInt(checkedButton))
    {
        message = "Correct! If you'd like to play again, just click on the play button.";
    }
else
    {
        message = "Sorry, that's not correct. The correct interval was: " + intervalValue + ". If you'd like to play again, just click on the play button.";
    }
}
else
{
message = "Click on the play button to play an interval!";
}
newElement = document.createElement("div");
    newElement.innerHTML = message;
    newElement.id = "appended";
    document.getElementById("responseBox").appendChild(newElement);
}
