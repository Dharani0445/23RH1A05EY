//traditional code
function findOddOrEven(num){
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
//using arrow function
const oddOrEven=(num)=>{
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
findOddOrEven(17);
oddOrEven(20);