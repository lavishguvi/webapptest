//create an array of employees->Array of objects=>JSON
let employees=[
    {
        id:1,
        first_name:"Anurag",
        last_name:"Lodhi",
        email:"anurag@gmail.com",
        gender:"Male",
        ip_address:"160.192.23.23"
    },

    {
        id:2,
        first_name:"Bhanu ",
        last_name:"Singh",
        email:"bhanu@gmail.com",
        gender:"Male",
        ip_address:"160.192.53.23"
    },
    {
        id:3,
        first_name:"Pavni",
        last_name:"kumar",
        email:"pavni@gmail.com",
        gender:"Female",
        ip_address:"160.192.43.23"
    },
    {
        id:4,
        first_name:"Lavish",
        last_name:"J",
        email:"lavish@gmail.com",
        gender:"Male",
        ip_address:"160.172.63.23"
    },
    {
        id:5,
        first_name:"Jay",
        last_name:"Kale",
        email:"jay@gmail.com",
        gender:"Male",
        ip_address:"160.172.63.23"
    },

    {
        id:6,
        first_name:"Ramesh",
        last_name:"Kumar",
        email:"ramesh@gmail.com",
        gender:"Male",
        ip_address:"160.142.73.23"
    },
    {
        id:7,
        first_name:"Prajkta",
        last_name:"Shende",
        email:"prajkta@gmail.com",
        gender:"Female",
        ip_address:"160.272.63.23"
    },
    {
        id:8,
        first_name:"kamal",
        last_name:"Hasan",
        email:"kamal@gmail.com",
        gender:"Male",
        ip_address:"160.172.34.23"
    },

    {
        id:9,
        first_name:"Fardeen",
        last_name:"Nulwala",
        email:"Fardeen@gmail.com",
        gender:"Male",
        ip_address:"160.172.63.23"
    },
    {
        id:10,
        first_name:"Asma",
        last_name:"Sheikh",
        email:"asma@gmail.com",
        gender:"Female",
        ip_address:"160.172.34.23"
    },
    
]


//create a function for ALL Emp button
let allEmpButton=document.querySelector("#all-emp-btn");

allEmpButton.addEventListener("click",function(){
    //Logic
    displayEmployees(employees);//calling of function

})
//create a function for Male Emp button

let maleEmpButton=document.querySelector("#male-emp-btn");

maleEmpButton.addEventListener("click",()=>{
    //Logic
    displayEmployees(employees);
})


//Display data 
function displayEmployees(employees){
    
    // Display data
