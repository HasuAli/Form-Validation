// Task 1
// let arr = [[0,1,2,3],[0,9,8,7],[3,4,5,6]]

// for(let index in arr){
//     for(let data of arr[index]){
//         document.write(data+" ")
//     }
//     document.write("<br>")
// }

// Task 2
// for(let i = 1 ; i<=10;i++){
//     document.write(i)
//     document.write("<br>")
// }

// Task 3

// let  tablenum = prompt("Enter Table Num")
// let count = prompt("How much length do run this table")
// for(let i = 1 ; i<=count;i++){
//     document.write(tablenum + " x "+  i +" = "+ tablenum*i)
//     document.write("<br>")
// }

// Task 5
// let fruits = ["apple","banana","mango","orange","stawbry"]

// for(let index in fruits){
//     for(let data of fruits[index]){
//         document.write(data+"")
//     }
//     document.write("<br>")
// }
// for(let index in fruits){
//     document.write("Element at index "+ index + " is "+fruits[index])
//     document.write("<br>")
// }

// Task 6
// document.write("<div class='qw'>")
// document.write("a) Counting :\n")
// for(let i = 1; i<=15;i++){
//     if(i===15){
//         document.write(i)
//     }
//     else{
//         document.write(i+",")
//     }
// }
// document.write("<br>")


// document.write("b) Reverse Counting :\n")
// for(let i = 10; i>=1;i--){
//     if(i===1){
//         document.write(i)
//     }
//     else{
//         document.write(i+",")
//     }
// }
// document.write("<br>")


// document.write("c) odd :")
// for(let i = 1; i<=20;i=i+2){
//     if(i===15){
//         document.write(i)
//     }
//     else{
//         document.write(i+",")
//     }
// }
// document.write("<br>")


// document.write("d) Even :  ")
// for(let i = 0; i<=20;i = i+2){
//     if(i===20){
//         document.write(i)
//     }
//     else{
//         document.write(i+",")
//     }
// }
// document.write("<br>")


// document.write("d) Series :  ")
// for(let i = 2; i<=20;i = i+2){
//     if(i===20){
//         document.write(i+"k")
//     }
//     else{
//         document.write(i+"k ,")
//     }
// }
// document.write("<br/>")
// document.write("<div/>")


// Task 8
// let arr =  [24, 53, 78, 91, 12]
// let largestsNumber = arr[0]
// for(let data of arr){
//     if(largestsNumber>data){
//         largestsNumber=data

//     }
// }
// document.write(largestsNumber)
      
// Task 7
// let inp = prompt("Enter Food name ")
// let foods = ["biryani","qurma","rool","burger"]
// let check = false 
// for(let index in foods){
//     if(inp==foods[index]){
//         check=true
//          console.log("This food available at index "+ index +" in our shop")
//     }
   
// }
// if(check==false){
//     console.log("This item it's not available in my store")
// }

// task 8
// let arr  = [24, 53, 78, 91, 12]
// let min = arr[0]
// for(let data of arr){
//     if(min> data){
//          min =data
//     }

//  }
// document.write("Array item : "+arr+"<br>"+"The smallest number is : "+min)
 
// task 9
// let arr  = [24, 53, 78, 91, 12]
// let min = arr[0]
// for(let data of arr){
//     if(min>data){
//          min =data
//     }

//  }
//  document.write("Array item : "+arr+"<br>"+"The biggest number is : "+min)

// // task 10
// for(let i = 1 ; i<=20;i++ ){
//     document.write(i*5 +",")
// }


// Date and date Method
// task1
// let date = new Date()
// document.write("  <div style='border: 2px solid blue;padding: 20px;padding-right: 0px;'>"+date+"</div>")


// task2
// let months = ["Jan","feb","March","April","May","June","July","August","Septem","Octobar","Nov","December"]
// let today = new Date()
// let crruentMonth = today.getMonth()
// alert(months[crruentMonth])


// task3
// let days = ["sun","Mon","Tues","Wed","Thurs","Fri","stau"]
// let today = new Date()
// let crruentDay = today.getDay()
// alert(days[crruentDay])

// task4
// let days = ["sun","Mon","Tues","Wed","Thurs","Fri","stau"]
// let today = new Date()
// let crruentDay = today.getDay()
// alert(days[crruentDay])
// if(days[0||6]==days[crruentDay]){
//     alert("Its a Fun day")
// }
// else{
//     alert("Its a Work day")
// }

// task 5
// let date = new Date()
// let crruentDate = date.getDate()
// if(crruentDate>15){
//     document.write("First fifteen day of month")
// }
// else{
//     document.write("Last fifteen day of month")
// }

// task6
// let date = new Date ()
// let times = date.getTime()
// let minut = date.getTime()/3600
// document.write("  <div style='border: 2px solid rgb(53, 53, 192);margin: 20px;'>"+date+"<br>"+
// times+"<br>"+minut+"</div>")


// task 7
// let date = new Date()
// // console.log(date.getHours())
// if(date.getHours>12){
//     console.log("PM")
// }
// else{
//     console.log("AM")
// }


// arrays in loops 
// let arr = [24,53,78,91,12]
// let largest = arr[0]
// for(let data of arr){
//     if(largest<data){
//         largest=data
//     }
// }
// console.log(largest)


let arr1 = [24,53,78,91,12]
let smallest = arr1[0]
for(let data of arr1){
    if(smallest>data){
        smallest=data
    }
}
console.log(smallest)















