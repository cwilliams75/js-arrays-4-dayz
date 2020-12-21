function getMostCommon(objectArray) {
    var counts = {};
    var compare = 0;
    var mostFrequent;
    for(var i = 0, len = objectArray.length; i < len; i++){
        var num = objectArray[i];
        if(counts[num] === undefined){
            counts[num] = 1;
        }else{
            counts[num] = counts[num] + 1;
        }
        if(counts[num] > compare){
              compare = counts[num];
              mostFrequent = objectArray[i];
        }
     }
   return mostFrequent;
}