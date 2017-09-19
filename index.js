var katzDeli = [];
function takeANumber(katzDeliLine,customer_name){
  katzDeliLine.push(customer_name);
  return "Welcome, "+customer_name+". You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else{
    var currentPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+currentPerson+".";
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else{
    for (var i=0;i<katzDeliLine.length;i++){
      var list = i +". "+katzDeliLine[i]+"\n";
    }
    return "The line is currently " + list;
  }
}
