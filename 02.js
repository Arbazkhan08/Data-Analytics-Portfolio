// const student = {
//     fullname: "HEy whatsapp",
//     age:20
// }
// // student["age"]=student["age"]+1;

// student["fullname"]="khan"

// console.log(student.fullname)


// const deal={
//     title:"parker jotter ct boll pen",
//     ratting:4,
//     offer:5,
//     price: 270
// }
// console.log(deal)

// const profile = {
//     name:"Arbaz khan",
//     messgae:"follow",
//     post: 195,
//     followers:569,
//     following:4,
//     fullname:"khan",
//     bio:"youtuber"
// }
// console.log(profile)


// let a= 25;
// a +=4
// console.log(a)

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a%b)

// let a= 6
// let b= 5
// let c=a > b
// let d = a===6

// console.log(c && d)

// let age=17;
// if(age>18){
//     console.log("You can vote")
// }else{
//     console.log("you cannot vote")
// }


// let mode="white"
// let color;

// if(mode === "dark"){
//     color="black"
// }
// else{
//     color="white"
// }

// console.log(color)

// const color = document.getElementById("colorchange");
//         const btn = document.getElementById("button");

//         let mode = "black";

//         const changecolor = () => {
//             if (mode === "black") {
//                 document.body.style.backgroundColor = "black";
//                 color.style.color = "white";
//                 mode = "white";
//             } else {
//                 document.body.style.backgroundColor = "white";
//                 color.style.color = "black";
//                 mode = "black";
//             }
//         };

//         btn.addEventListener("click", changecolor);

// let age=prompt("Enter your age")
// let result= age>=18 ? "adult" : "not adult"
// console.log(result)


// let a=prompt("enter Your value:")

// if(a % 5 === 0){
//     console.log("no is multiple")
// }else{
//     console.log("no is not multiple")
// }
// console.log(a)


// let a=prompt("Enter your percentage so i can give you grades: ")

// if(a>=90 && a<=100){
//     console.log( a ,"you Grade is A")
// }else if(a >=70 && a <=89){
//     console.log(a, "Your Grade is B")
// }else if(a >=60 && a <=69){
//     console.log(a, "Your Grade is C")
// }else if(a >=50 && a <=59){
//     console.log(a, "your Grade is D")
// }else if(a<=49){
//     console.log(a, "your Grade is F")
// }
// else{
//     console.log("Invalid Value, Please write correct value")
// }

// let s=99;
// let g;

// if(s>=90 && s<=100){
//     g ="A"
// }
// console.log(g)


// for(let i=1; i<=5; i++){
//     console.log("apna College") 
// }
// console.log("loop has ended")

// let sum =0;
// for(let i=1; i<=5; i++){
//     sum=sum+i
// }
// console.log(sum)

// for(let i=1; i<=5; i++)
// console.log("i=", i)

// let i=6;
// do{
//     console.log("hey")
//     i++
// }
// while(i<=5);

// let str="arbaz khan"
// let size=0;
// for(let k of str){
//     console.log(k)
//     size++
// }
// console.log("size of str:", size)

// let student={
//     name: "Arbaz",
//     age: "20",
//     cgpa: 9.24,
//     ispass:true,
// };
// for(let i in student){
//     console.log("i=",i ,"value=",student[i])
// }

// for(let i=0; i<=100; i++){
//     if(i%2 !==0 ){ 
//         console.log(i)
//     }
// }

// let guestnum= 25;

// let usenum=prompt("Guess the game no:")

// while(guestnum != usenum){
//     usenum= prompt("you enter wront no Guess the game no:")
// }

// document.write("Guess correct number")

// let a = 17;

// let result = a>=18? "adult":"not adult";
// console.log(result)

// let a= "10"

// if(a%5===0){
//     console.log(a ,"it id divisible  by 5")
// }else{
//     console.log(a,"it is not divisible by 5")
// }

// let score = 99;
// let grade;

// if(score>=90 && score<=100){
//     grade ="A"
// }
// else{
//     grade = "B"
// }
// console.log(grade)


// for(let a=0; a<5; a++){
//     console.log("Hey My name is khan")
// }

// let b=45
// let a=prompt("enter your no")
// while(a!=b){
//     a=prompt("wrong no guess try again")
// }
// document.write("congrautes correcr guess")

// let sum=0
// for(let i=0; i<=5; i++){
//     sum= sum+i
// }
// console.log(sum)

// for(let i=0; i<=100; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let a="hey my name is khan"
// console.log(a[0])

// let b = ${`hey whatsapp`}


// let b= {
//     item: "pen",
//     price: 10
// }

// // let output = `the cost of ${b.item} is ${b.price}`

// console.log("the cost of" , b.item  , "is", b.price)

// let s= `calculate the value ${4+2+4}`
// console.log(s)


// let str= "heywhatsapp what whatsab"
// console.log(str.slice(0, 5))

// let s1="hey my name is "
// let s2=" Arbaz khan"

// console.log(s1.concat(s2))

// let a= "my namae"
// console.log(a.replaceAll("a", "c"))
 
// let s="my name is khan"
// console.log(s.charAt(0))


// let a= prompt("Enter your fullname: ")
// // console.log("@" + a + a.length)
// document.write("@" + a + a.length)

// let b=prompt("Enter your full name:")
// let c= "@" + b+ b.length;
// document.write(c)

// let a = [98, 75, 45, 80, 36]
// let n = ["a","b", "c","d","e"]


// let n= ["a", "b", "c", "d", "e"]

// for (let a=0; a < n.length;  a++){
//     console.log(n[a])
// }

// let n= ["a", "b", "c", "d", "e"]
// for (let a of n){
//     console.log(a.toUpperCase())
// }

// let m = [85, 97, 44, 37, 76, 60]
// let sum=0;
// for(let s of m){
//     sum +=s
// }
// let avg = sum / m.length
// console.log( "The sum of m is" , sum)
// console.log("The avg of m is",avg)


// let m = [85, 97, 44, 37, 76, 60]
// let c = m[0]+ m[1]+ m[2] + m[3]+m[4]+m[5]
// let d = c / m.length
// console.log(c)
// console.log(d)

// let a= [250, 645, 300, 900, 50]

// let idx = 0;
// console.log(a)
// for(let v of a){
    
//    let offer = v / 10;
//    let of =  v - offer
//    console.log(`The value of index is ${idx} = ${of}`)
//    idx++
// }



/* 10% off in index so solve using for of loop */
// let a= [250, 645, 300, 900, 50]
// let i= 0;
// for(let v of a){
//     console.log(`the value at index is ${i} = ${v}`)
//     let offer = v / 10;
//     a[i] = a [i] - offer;
//     console.log(`The value after 10% off is = ${a[i]}`)
//     i++;
// }


/* using for loop*/
// let a= [250, 645, 300, 900, 50]

// for(let i=0; i<a.length; i++){
//     let offer = a[i]/10;
//     a[i] = a[i] - offer
// }
// console.log(a)

// let a= ["hi", "isd","vk"]
// let b=[45, 5, 6]
// let c= a.concat(b)

// console.log(c)

// let a = [2,3,4,5,6,7]
// a.splice(2, 0 , 101,102)
// console.log(a)

// let a = [2,3,4,5,6,7]
// a.splice(2,1, 101)
// console.log(a)

// let a = ["bloomberg", "Microsoft", "Uber", "google", "IBM"]

// a.shift()
// a.splice(2,1,"Ola")

// a.push("amazon")
// console.log(a)

// function a(msg){
//     console.log(msg)
// }
// a("hey whatsapp");

// function sum(x, y){
//     s = x + y;
//     return s;
// }
// let a = sum(3,4)
// console.log(a)

// const a = ()=>{
//     console.log("hey")
// }
// a() 

// function c(str) {
//     let count = 0;
//     for(const d of str){
//         if (d ==="a"|| 
//             d ==="b" || 
//             d ==="i" || 
//             d ==="o")
//             {
//             count++;
//         }
//     }
//     console.log(count)
// }

// c("abcdefgh")


// const c = (str)=> {
//     let count = 0;
//     for(const d of str){
//         if (d ==="a"|| 
//             d ==="b" || 
//             d ==="i" || 
//             d ==="o")
//             {
//             count++;
//         }
//     }
//     console.log(count)
// }

// c("abcdefgh")

// let a = ["add", "eads"]
// a.forEach((v)=> {
//     console.log(v.toUpperCase())
// })

// let a = [2, 4, 6]
// let b=0;
// a.forEach((v, b)=>{
//     console.log( b, v ,v*v)
//     b++
// })

// let a = [5, 2 ,4 ]
// let b= a.map((v)=>{ 
//     return v * v
// })
// console.log(b)

// let arr=[4, 2, 6, 7, 9, 5]
// let even = arr.filter((val) => {
//     return val >3;
// });
// console.log(even)

// let arr=[1, 2, 3, 4]

// const b = arr.reduce((pre , curr)=>{
//     return pre + curr
// })
// console.log(b)

// let arr= [85 , 80, 70, 90, 99, 98]
// let b = arr.filter((v)=>{
//     return v > 89;
// })
// console.log(b)

// let n = prompt("Enter a number:")

// let arr = [];
// for(let i=1; i<=n; i++){
//     arr[i-1] = i;

// }
// console.log(arr)

// let c = arr.reduce((pre, curr)=>{
//     return pre + curr
// })
// console.log("The sum of value is" , c)

// let d = arr.reduce((pre, curr)=>{
//     return pre * curr
// })
// console.log("factorial" , d)


// const a = document.getElementById(".btn")

// function b (){
//     document.body.style.backgroundColor = "red"
// }
// btn.addEventListener("click", b)

// let a = document.querySelector("#para")
// console.dir(a.tagName)

// let b = document.querySelectorAll("#para")
// console.log(b)

// let heading = document.querySelector("#head")

// const a = () =>{
//      heading.innerHTML =`<div class="content"><h1> my name is khan </h1> <h2> Good morning</h2><div>`

// }
// heading.addEventListener("click", a)

// let heading = document.querySelector("#head")

// head.innerText = head.innerText + " from apna college"

// let b= document.querySelectorAll("#head")
// b[0].innerText ="Hello good morning"
// b[1].innerText ="Hello my dear"
// b[2].innerText ="Hello handsome"

// let b = document.querySelector("div")
// b.classList.add ( "arbaz")

// let el =document.createElement("button")
// el.innerText = "click me"

// let div = document.querySelector("div")
// div.prepend(el)

// let heading = document.createElement("h1")
// heading.innerHTML = `<i> Hey My name is khan </i>`

// let div = document.querySelector("div").append(heading)
// // div.before(heading)

// let heading = document.querySelector("p")
// heading.remove()
 
// let btn = document.createElement("button")
// btn.innerHTML ="Click me"

// btn.style.color = "white";
// btn.style.backgroundColor = "blue"
// btn.style.fontSize = "30px"
// btn.style.borderRadius = "10px"

// let b = document.querySelector("body").prepend(btn)


// let c = document.querySelector("p")
// c.setAttribute("class", "paras")
// c.classList.add("paras")


// const a = document.getElementById(".btn")

// function b (){
//     document.body.style.backgroundColor = "red"
// }
// btn.addEventListener("click", b)


// let s = document.querySelector(".para")

// let a = () =>{
//     s.innerHTML = `<h1>Hey What happen/h1><div class="di"> what sappen</div>>`
// }
// s.addEventListener("click" ,a)

// let btn1 = document.querySelector("#btn1")

// btn1.onclick = () =>{
//     console.log("Hello")
//     document.body.style.backgroundColor = "Red"

// }

// let btn1 = document.querySelector("#btn")

// function btn () {
//     document.body.style.backgroundColor ="Yellow"
// }
// btn1.addEventListener("Click", btn)

// let a = document.querySelector("#btn")

// const b = () =>{
//         a.innerHTML = `<h1> My name is khan </h1> `
// } 
// a.addEventListener("click", b)

// let a = document.createElement("button")
// a.innerText = "CLick me"

// let div = document.querySelector("div")
// div.prepend(a)

// let b = document.querySelector("button")

// let c = () =>{
//     a.innerHTML =`<h1> Hey My name is khan</h1>`
// }
// b.addEventListener("click", c)

// let btn= document.querySelector("#btn")

// let c = () =>{
//     btn.innerHTML =  `<h1> Hey my name is khan </h1>`
// }
// btn.addEventListener("click", c)

// let btn= document.querySelector("#btn")

// btn.addEventListener ("click", (event)=>{
//     // console.log("Hey whatsapp")
//     btn.innerHTML =`<div class="hey">Hey my name is khan </div>
//     <button id="btn1">click</button>`
//     console.log(event)
//     console.log(event.type)
// })

// let btn= document.querySelector("#btn")

// btn.addEventListener("click", (event) =>{
//     console.log("Button was clicked1")
// })
// btn.addEventListener("click", (event) =>{
//     console.log("Button was clicked2")
// })
// const handle = () =>{ 
//     console.log("Button was clicked.3")
// }
// btn.addEventListener("click", handle)


// btn.addEventListener("click", (event) =>{
//     console.log("Button was clicked4")
// })

// btn.removeEventListener("click",handle)


// let btn = document.querySelector("#btn")
// let mode = "Light"

// btn.addEventListener("click", ()=>{
//     if(mode ==="Light"){
//         document.body.style.backgroundColor ="Black";
//         mode = "Dark"
//     }
//     else{
//         document.body.style.backgroundColor = "White"
//         mode = "Light"
//     }
// })

// let btn = document.querySelector("#btn")
// let body = document.querySelector("body")
// let mode = "light";

// btn.addEventListener("click", ()=>{
//     if(mode ==="light"){
//         mode = "Dark"
//         body.classList.add("dark");
//         body.classList.remove("light")
//     }
//     else{
//         mode = "light"
//         body.classList.add("light");
//         body.classList.remove("dark")

//     }
//     console.log(mode)
// })


// class car   {
//     constructor(){
//         console.log("Creating new object")
//     }
//     start() {
//         console.log("start hello");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }
// let fortuned = new car()
// let le = new car()
// console.log(le)
// fortuned.start()
// fortuned.setBrand("fortuned")


// class person {
//     eat(){
//         console.log("eat and workout")
//     }
//     sleep(){
//         console.log("sleep and sleeping")
//     }

// }

// class Engineer extends person {
//     constructor (){
//         console.log("hello")
//         super()
//     }
//     work(){
//         super.eat()
//         console.log("solve problem, build something")
//     }
// }

// let Arbaz =new Engineer()
// console.log(Arbaz)

// let data = "secret information"

// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//        console.log("Data", data) 
//     }
// }
// let student1 = new user("arbaz", "khan@gmail.com")
// let student2 = new user("aryan", "aryan@gmail.com")
// console.log(student1)
// console.log(student2)



//class show data edit data 
// let data = "secret information"

// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//        console.log("Data", data) 
//     }
// }

// class Admin extends user{
//     constructor(name, email){
//         super(name, email)
//     }
//     editData(){
//         data = "some new value"
//     }
// }
// let student1 = new user("arbaz", "khan@gmail.com")
// let student2 = new user("aryan", "aryan@gmail.com")

// let admin1 = new Admin("pathan", "pathan@gmail.com")
// console.log(student1)
// console.log(student2)

// console.log(admin1)


// let a = 5;
// let b = 10;

// console.log(a+b)
// console.log(b-a)

// try { 
//     console.log("a-c", a-c)
// } catch(err){
//     console.log(err)
// }

// console.log(a+b)
// console.log(a*b)
// console.log(a/b)

// setTimeout (()=>{
//     console.log("Hello")
// },2000)

// function a (){
//     console.log("hello")
// } 
// setTimeout(a, 2000)

//callback function
//  function sum(a, b){
//     console.log(a + b)
//  }

//  function calculate(a, b, sumcallback){
//     sumcallback(a, b)
//  }
//  calculate(1, 2, sum)

// function a() {
//     console.log("what up ")
// }
// setTimeout(a, 2000)

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise")
// })

//async and await function also callback settimeout
// function hello (dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data ", dataId)
//             resolve("Success")
//         }, 3000)
       
//     })
// }

// (async function(){
//     console.log("getting data") //1st call
//     await hello(1)
//     console.log("getting data") //1st call
//     await hello(2) 
//     console.log("getting data")//2nd call
//     await hello(3)
//     console.log("getting data")
//     await hello(4)
//     console.log("getting data")
//     await hello(5)
// })();