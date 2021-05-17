function playsounds()
{
setup();
var firstSound = new Audio(pitches[note1] + ".wav");

firstSound.play();
}

var pitches = new Array();
var note1 = -2;

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
var myNum2 = 0;
while (myNum2 < 1 || myNum2 > 13) {
myNum2 = Math.trunc(Math.random() * 13);   //determines second number
}
note1 = myNum2 - 1;

pitches.push("petition_assets/39187__jobro__piano-ff-040");
pitches.push("petition_assets/39188__jobro__piano-ff-041");
pitches.push("petition_assets/39189__jobro__piano-ff-042");
pitches.push("petition_assets/39190__jobro__piano-ff-043");
pitches.push("petition_assets/39191__jobro__piano-ff-044");
pitches.push("petition_assets/39193__jobro__piano-ff-045");
pitches.push("petition_assets/39194__jobro__piano-ff-046");
pitches.push("petition_assets/39195__jobro__piano-ff-047");
pitches.push("petition_assets/39196__jobro__piano-ff-048");
pitches.push("petition_assets/39197__jobro__piano-ff-049");
pitches.push("petition_assets/39198__jobro__piano-ff-050");
pitches.push("petition_assets/39199__jobro__piano-ff-051");
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
var enteredResponse = document.getElementById("noteResponse").value;
var enteredIndex = parseResponse(enteredResponse);

var noteName = nameMap(note1);

if (note1 >= 0) //test for valid array index
{
if (parseInt(note1) === parseInt(enteredIndex))
    {
        message = "Correct! If you'd like to play again, just click on the play button.";
    }
else
    {
        message = "Sorry, that's not correct. The correct note was: " + noteName + ". If you'd like to play again, just click on the play button.";
    }
}
else
{
message = "Click on the play button to play a note!";
}
newElement = document.createElement("div");
    newElement.innerHTML = message;
    newElement.id = "appended";
    document.getElementById("textResponseBox").appendChild(newElement);
}

function parseResponse(response) {
response = response.toString(); // converts to string
response = $.trim(response); // trims whitespace
response = response.toLowerCase(); // converts to lowercase
var index;
if (response.length == 1 || response.length == 2)
{
switch(response.charAt(0)) // test first character
{
case 'a':
index = 9;
break;
case 'b':
index = 11;
break;
case 'c':
index = 0;
break;
case 'd':
index = 2;
break;
case 'e':
index = 4;
break;
case 'f':
index = 5;
break;
case 'g':
index = 7;
break;
default:
index = -1;
}
if (response.length == 2)
{
switch (response.charAt(1)) {
case 's':
if (response.charAt(0) == 'b') //handles lower array bound
{
index = 0;
}
else {
index++;
}
break;
case 'f':
if (response.charAt(0) == 'c') //handles upper array bound
{
index = 11;
}
else {
index--;
}
break;
default:
index = -1;
}
}
}
else {
index = -1;
}
return index;
}

function nameMap(note) {
var name;
switch (note) {
case 0: {
name = "C (or B#)";
    break;
}
        case 1: {
name = "C# (or D&flat;)";
    break;
}
        case 2: {
name = "D";
    break;
}
         case 3: {
name = "D# (or E&flat;)";
    break;
}
        case 4: {
name = "E";
    break;
}
        case 5: {
name = "F (or E#)";
    break;
}
        case 6: {
name = "F# (or G&flat;)";
    break;
}
        case 7: {
name = "G";
    break;
}
        case 8: {
name = "G# (or A&flat;)";
    break;
}
        case 9: {
name = "A";
    break;
}
        case 10: {
name = "A# (or B&flat;)";
    break;
}
        case 11: {
name = "B (or C&flat;)";
    break;
}
    default: {
        name = "ERROR";        
}
}
    return name;
}
