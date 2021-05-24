 /*var myProfile ={
     firstName : "matthew",
     lastName : "Egbedokun",
     age : 25,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }

    
 }
console.log(myProfile.fullName())
console.log("i am  " + myProfile.age )


/*for(var a = 1; a<=12; a++)

console.log("7 X " + a+" = "+ a*7);
*/


/*function multiply(n){
for(var a = 1; a <= 10; a=a+1){
    var result ;
     result = a * n;
     console.log(result)

}
     
}
multiply(2)*/

/*var sum = 0
for( var num =1; num<=10; num++){
sum+=num
}
console.log(sum)*/


/*var factoria = 1
for (var a = 10; a>=1; a--){
    factoria*=a;
}
console.log(factoria)*/
/*var odd = 0;
for(var a = 11; a<=30; a+=2){
    odd += a
}
console.log(odd)*/

/*function toFah(f){
    var result= f - (32/1.8) 
    console.log(result)
}
toFah(50)*/


function listSum(ar)
{
    var sum = 0
    
    for(var i = 0; i<ar.length; i++){
        sum +=ar[i] ;
    }

    return sum

}
var  naa = [34,5,6,7,8,9];
console.log(listSum(naa))

/*var name = "femi"
var nam = name.replace("f","w")
console.log(nam)*/

let sch = "uniosun okuku campus"
console.log(sch.length)

/*function average(valu){
    var calcu = 0
    var final= valu.length
    for(var i = 0; i < valu.length; i++){
        calcu +=valu[i]
            
    }
    return calcu/final
}
let demo1 = [1,3,9,15,90]
console.log(average(demo1))*/
function getpositive(value1){
    var value2 = []
    for(var i = 0; i < value1.length; i++){
        var el = value1[i];
        if(value1 >=0){
            value2.push(el);
        }

        }
    return value2

    }


var demo1 = [1,2,3,4,5,6,-7,-4]
console.log(getpositive(demo1))