// Rover Object Goes Here
// ======================
 var rover = {
   direction: "N",
   x: 0,
   y: 0,
   travelLog: [],
 };
// ======================
function turnLeft(rover){
console.log("turnLeft was called!");
  
switch (rover.direction) {
  case "N":
   rover.direction = "W";
   console.log("Rover direction : " + rover);
   break;

   case "W":
   rover.direction = "S";
   console.log("Rover direction : " + rover);
   break;

   case "S": 
   rover.direction = "E";
   console.log("Rover direction : " + rover);
   break;

   case "E": 
   rover.direction = "N";
   console.log("Rover direction : " + rover);
   break;
 }
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N": 
    rover.direction = "E";
    console.log("Rover direction : " + rover);
    break;

    case "E":
    rover.direction = "S";
    console.log("Rover direction : " + rover);
    break;

    case "S":
    rover.direction = "W";
    console.log("Rover direction : " + rover);
    break;

    case "W":
    rover.direction = "N";
    console.log("Rover direction : " + rover);
    break;

  }
}

function moveForward(rover){
  console.log("moveFoward was called!");

 switch (rover.direction){
 case "N": 
 rover.y -= 1;
 console.log(rover);
 break;

 case "W": 
 rover.x -= 1;
 console.log(rover);
 break;

 case "S": 
 rover.y += 1;
 console.log(rover);
 break;

 case "E":
 rover.x += 1;
 console.log(rover);
 break;
 }
 rover.travelLog.push ("x:" + rover.x + "," + "y:" + rover.y);
}

var commands = "rffrfflfrff";

function receiveCommands(commands){
 for (i = 0; i < commands.length; i++){
  var command = commands[i];
  switch (command){
  case "f":
  moveForward(rover);
  console.log("Rover moved forward");
  break;

  case "r":
  turnRight(rover);
  console.log("Rover turned right");
  break;

  case "l":
  turnLeft(rover);
  console.log("Rover turned left");
  break;
  }
 }
 console.log(rover.travelLog);
}
