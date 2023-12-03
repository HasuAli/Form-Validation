// Function Practice

// function date(){
//    return new Date()
// }
// console.log(date())

// function add(a,b){
//   return a+b
// }

// function sub(a,b){
//     return a-b
// }

// function multi(a,b){
//    return a*b
// }

// function div(a,b){
//    return a/b
// }
// // add(3,5)
// // sub(6,3)

// var a = +prompt("Enter First Num")
// var b = +prompt("Enter Second Num")
// var op = prompt("Enter op")
// if(op=="+"){
//     var res = add(a,b)
//     console.log(res)
// }
// else if(op=="-"){
//     var res = sub(a,b)
//     console.log(res)
// }
// else if(op=="x"){
//     var res = multi(a,b)
//     console.log(res)
// }
// else if(op=="/"){
//     var res =  div(a,b)
//     console.log(res)
// }
// else{
//     console.log("Enter correct op")
// }



function submit(){
    let name = document.getElementById("name")
    let nametext = document.getElementById("nametext")

    let email = document.getElementById("email")
    let emailtext = document.getElementById("emailtext")

    let password1 =  document.getElementById("password")
    let passwordtext = document.getElementById(" passwordtext")
  
    if(name.value.length== 0){
        name.classList="redborder"
        nametext.style.display="inline" 
    }
    else{
        name.classList=""
        nametext.style.display="none" 
    }

      
    if(email.value.length== 0){
        email.classList="redborder"
        emailtext.style.display="inline" 
    }
    else{
        email.classList=""
        emailtext.style.display="none" 
    }

     
//   if(password1.value.length == 0){
//         password1.classList="redborder"
//        passwordtext.style.display="inline" 
//     }
//     else{
//         password1.classList=""
//         passwordtext.style.display="none" 
//     }

   if(name.value.length!=0 && email.value.length != 0 && password1.value.length){
     alert("Your form submited  ")
   }

}