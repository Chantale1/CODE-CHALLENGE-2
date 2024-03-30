function generateArray(start,end) {


  if (start<=end)
  length = end-start+1;
}else{
    length = start-end+1 ;
}
//the number in the array increasing or decreasing
let increasing=start<end ?1:-1;
let arr =

//loop the array with the wanted elements
for (var i=0 <length; i++) { 
arr[i] = start + i*increasing
}
return arr;



console.log(generateArray(-9,9));