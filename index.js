var katzDeli = [];
function takeANumber(katzDeliLine,customer_name){
  katzDeliLine.push(customer_name);
  return "Welcome, "+katzDeli[0]+". You are number "+ katzDeliLine[0].indexOf()+" in line";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  } else{
    return katzDeliLine[0];
    katzDeliLine.shift();
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  } else{
    for (i=0;i<katzDeliLine.length;i++){
      var list = i +". "+katzDeliLine[i]+"\n";
    }
    return "The line is currently " + list;
  }
}
