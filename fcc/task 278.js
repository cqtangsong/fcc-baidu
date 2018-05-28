function convert(num) {  

//把数字拆分，把每个数字都存入数组arr中  

var n0 = Math.floor(num/1000)*1000;  
var n1 = Math.floor((num-n0)/100)*100;  
var n2 = Math.floor((num-n1-n0)/10)*10;  
var n3 = num-n0-n1-n2;  
var arr = [];  
arr.push(n0,n1,n2,n3);  

//把数字拆分，把每个数字都存入数组arr中  

var arr1 = [];  
 for (var i in arr)  
   if (arr[i] >0)  
     arr1.push(arr[i] );   

//把数组arr1中的每个数字分别转化成罗马数字，并存入数组arr3中（篇幅有限，只能转化1到3999的数字）；  

var arr3=[];  
 for( i in arr1) {  
 switch (arr1[i]) {  
     case 1 :   
     arr3.push("I");  
     break;  
     case 2 :   
     arr3.push("II");  
     break;  
     case 3 :   
     arr3.push("III");  
     break;  
     case 4 :   
     arr3.push("IV");  
     break;  
     case 5 :   
     arr3.push("V");  
     break;  
     case 6 :   
     arr3.push("VI");  
     break;  
     case 7 :   
     arr3.push("VII");  
     break;  
     case 8 :   
     arr3.push("VIII");  
     break;  
     case 9 :   
     arr3.push("IX");  
     break;  
     case 10 :   
     arr3.push("X");  
     break;  
     case 20 :   
     arr3.push("XX");  
     break;  
     case 30 :   
     arr3.push("XXX");  
     break;  
     case 40 :   
     arr3.push("XL");  
     break;  
     case 50 :   
     arr3.push("L");  
     break;  
     case 60 :   
     arr3.push("LX");  
     break;  
     case 70 :   
     arr3.push("LXX");  
     break;  
     case 80 :   
     arr3.push("LXXX");  
     break;  
     case 90 :   
     arr3.push("XC");  
     break;  
     case 100 :   
     arr3.push("C");  
     break;  
     case 200 :   
     arr3.push("CC");  
     break;  
     case 300 :   
     arr3.push("CCC");  
     break;  
     case 400 :   
     arr3.push("CD");  
     break;  
     case 500 :   
     arr3.push("D");  
     break;  
     case 600:   
     arr3.push("DC");  
     break;  
     case 700 :   
     arr3.push("DCC");  
     break;  
     case 800 :   
     arr3.push("DCCC");  
     break;  
     case 900:   
     arr3.push("CM");  
     break;  
     case 1000 :   
     arr3.push("M");  
     break;  
     case 2000 :   
     arr3.push("MM");  
     break;  
     case 3000 :   
     arr3.push("MMM");  
     break;      
 }  
 }  

//将罗马数字拼接，即将数组arr3转为字符串后返回。  

 var arr2= arr3.join("");  
 return arr2;  
}  
convert(36);
