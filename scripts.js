$(document).ready(function(){
  // Pool of basic commands that could appear on a compulsory list
  var randomBasicCommands = [
    "present arms",
    "cover",
    "dress right dress",
    "left face",
    "right face",
    "about face",
    "half left face",
    "half right face",
    "close interval dress right dress",
    "open ranks",
    "parade rest",
    "prayer attention",
    "stand at ease",
    "at ease",
    "rest",
    "mark time march",
    "forward march",
    "half step",
    "left flank",
    "right flank",
    "to the rear",
    "column left",
    "column right",
    "column half left",
    "column half right",
    "count off"
  ];

  var maxRandomVal = randomBasicCommands.length;
  var currentCommand = 0;
  var generatedList = [];

  // generates basic list on click and displays first command (fall in)
  $("#new-list-button").on("click",function(){
    document.getElementById("current-command").style.fontSize = "72px";
    shuffle(randomBasicCommands);
    generatedList = randomBasicCommands.slice(0,9);
    var randomEyesRight = getRandomInt(generatedList.length);
    generatedList.splice(randomEyesRight,0,"eyes right");
    generatedList.unshift("fall in");
    generatedList.push("fall out");

    currentCommand = 0;
    displayCommand();
  });

  // invokes displayCommand() to show previous or next command based on button id
  $(".arrow").on("click",function(){
    nextCommand = $(this).attr("id");
    if(nextCommand == "left" && currentCommand>0) {
      currentCommand--;
      displayCommand();
    } else if(nextCommand == "right" && currentCommand<generatedList.length-1) {
      currentCommand++;
      displayCommand();
    }
  });

  // display current command based on currentCommand counter variable
  function displayCommand() {
    commandPara = document.getElementById("current-command");
    commandPara.innerHTML = generatedList[currentCommand];
  };

  // generate random int
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // used for shuffling basic commands before copying to practice list
  function shuffle(array) {
    var currentIndex = array.length, tempVal, randomIndex;
    while(0!=currentIndex) {
      randomIndex = getRandomInt(currentIndex);
      currentIndex--;

      tempVal = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempVal;
    }
  }
});
