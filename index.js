var katzDeli = [];
function takeANumber(katzDeliLine,customer_name){
  katzDeliLine.push(customer_name);
}

function nowServing(katzDeliLine){
  if katzDeliLine.length == 0 {
    return "Theres no one to be served";
  } else{
    return katzDeliLine[0];
    katzDeliLine.shift();
  }
}
