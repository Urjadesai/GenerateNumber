//Pattern; like 78, 89, 910, 1011, 1112, 1213, 1314, 1415 and so on.
//Please generate numbers with the starting number 78 and Print
//the ten numbers.
//Add first five numbers and put the resulting summation number into a list.
//Add the second set of five numbers and put the resulting summation number
//into the same list and print them.
//please generate the numbers programmatically.
//Please do not use string concatenation techniques.
//
 
function printNumbers(){
   var arr=[];
   var a=7;
   var b=8;
      for(var i = 0; i<10;i++){
       
         var num = a*Math.pow(10, Math.floor(Math.log(b)/Math.log(10))+1)+b;
         console.log(num);
         arr.push(num)
         ++a;
         ++b;
      }
    arr.push(arr.reduce((acc, currentVal, currentInd,array)=>{
            if(currentInd>4){
                 console.log(currentInd)
                 return acc;
            }
            return acc+currentVal;
           
     },0));
     arr.push(arr.reduce((acc, currentVal, currentInd,array)=>{
      if(currentInd<4){
           console.log(currentInd)
           return acc;
      }
      return acc+currentVal;
     
},0));
     console.log(arr);
}
printNumbers();
