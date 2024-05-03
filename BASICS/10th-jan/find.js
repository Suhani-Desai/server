//find method only prints the first value after it satisfies the condtion and then comes out of the loop

//find the password whish has more than 8 characters
const passwords = ['secret','secret12','secret123','password123','password']
const r1 = passwords.find(function(ele){
    return ele.length >= 8
})
console.log(r1)

//find the first element greater than 135
const prices=[125, 135, 145, 155]
const r2 = prices.find(function(ele){
    return ele > 135
})
console.log(r2)

//find the first even number
const arr3=[11,20,31,401,41]
const r3=arr3.find(function(ele){
    return ele%2==0
})
console.log(r3) 

//find the first string in the array
const arr4=[10,11,12,'adam',13,'steve']
const r4=arr4.find(function(ele){
    return typeof ele=='string'
})
console.log(r4)

//find the first product whose price is more than 15rs
const arr5=[
    {id:1,name:'marker',price:10},
    {id:2,name:'scale',price:5},
    {id:3,name:'board',price:50}]
const r5=arr5.find(function(ele){
    return ele.price>15
})
console.log(r5)

//find the student whose roll number is dct123
const arr6=[{rollno:'dct111',name:'gopi'},
{rollno:'dct112',name:'sridhar'},
{rollno:'dct123',name:'adi'}]
const r6=arr6.find(function(ele){
    return ele.rollno=='dct123'
})
console.log(r6)