//Question1
document.write("<b>Question 1"+"<br><br></b>")
let studentName= []
let studentNameObj= new Array();
let studentNameString=["Hamza","Sarim","Ali"];
let studentNameNum=[1,2,3];
let studentNameBol=[true,false];
let mixedArray= ["hamza",1,true]
let edu=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PhD"]
let numb=1
document.write("Qualification:"+"<br><br>")

for(i=0;i<edu.length;i++){
    document.write(numb++ +" "+edu[i]+"<br>")
}

//Question2
document.write("<b>Question 2"+"<br><br></b>")
let student=["Michael","John","Tony"]
let score = [320,230,480]

document.write("Score of "+student[0]+" is "+score[0]+"."+"Percentage:"+score[0]/500*100+"%"+"<br><br>")
document.write("Score of "+student[1]+" is "+score[1]+"."+"Percentage:"+score[1]/500*100+"%"+"<br><br>")
document.write("Score of "+student[2]+" is "+score[2]+"."+"Percentage:"+score[2]/500*100+"%"+"<br><br>")

//Question3
document.write("<b>Question 3"+"<br><br></b>")

let colorName=["Red","Blue","Green"]
let FromUserBeg=prompt("What color you want to add to beginning?")
colorName.unshift(FromUserBeg)
document.write("Updated Array after adding in beginning: "+colorName+"<br><br>")
let FromUserEnd=prompt("What color you want to add to End?")
colorName.push(FromUserEnd)
document.write("Updated Array after adding in end: "+colorName+"<br><br>")
colorName.unshift("Purple","Orange")
document.write("Updated Array after adding two in beginning: "+colorName+"<br><br>")
colorName.shift()
document.write("Updated Array after deleting first color in beginning: "+colorName+"<br><br>")
colorName.pop()
document.write("Updated Array after deleting last color in end: "+colorName+"<br><br>")
let indexByUser=prompt("At which index you want to add color?")
let AddcolorByUser=prompt("What color you want to add ?")
colorName.splice(indexByUser,0,AddcolorByUser)
document.write("Updated Array: "+colorName+"<br><br>")
let DelcolorByUser=prompt("How many color you want to Delete ?")
let IndexColor=prompt("At which index you want to Del color?")
colorName.splice(IndexColor,DelcolorByUser)
document.write("Updated Array: "+colorName+"<br><br>")

//Question4
document.write("<b>Question 4"+"<br><br></b>")

let StudentScore=[320,230,480,120]
document.write("Score of student: "+StudentScore+"<br><br>")
let sorted=StudentScore.sort()
document.write("Ordered Score of student: "+sorted+"<br><br>")


//Question5
document.write("<b>Question 5"+"<br><br></b>")

let city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
let selectedCities=city.slice(2,4)
document.write(city+"<br><br>")
document.write(selectedCities+"<br><br>")

//Question6
document.write("<b>Question 6"+"<br><br></b>")
let arr=["This","is","my","cat"];
let newArr=arr.join(" ");

document.write(arr+"<br><br>");
document.write(newArr+"<br><br>")

//Question7
document.write("<b>Question 7"+"<br><br></b>")
let devices=[]
devices.push("keyboard")
devices.push("mouse")
devices.push("printer")
devices.push("monitor")
document.write("Devices:"+"<br><br>")
document.write(devices+"<br><br>")
document.write("Out"+"<br><br>")
let first=devices.shift()
let second=devices.shift()
let third=devices.shift()
let forth=devices.shift()
document.write(first+"<br><br>")
document.write("Out"+"<br><br>")
document.write(second+"<br><br>")
document.write("Out"+"<br><br>")
document.write(third+"<br><br>")
document.write("Out"+"<br><br>")
document.write(forth+"<br><br>")

//Question8
document.write("<b>Question 8"+"<br><br></b>")
let devices2=[]
devices2.push("keyboard")
devices2.push("mouse")
devices2.push("printer")
devices2.push("monitor")
document.write("Devices:"+"<br><br>")
document.write(devices2+"<br><br>")
document.write("Out"+"<br><br>")
let first1=devices2.pop()
let second2=devices2.pop()
let third3=devices2.pop()
let forth4=devices2.pop()
document.write(first1+"<br><br>")
document.write("Out"+"<br><br>")
document.write(second2+"<br><br>")
document.write("Out"+"<br><br>")
document.write(third3+"<br><br>")
document.write("Out"+"<br><br>")
document.write(forth4+"<br><br>")

//Question9
document.write("<b>Question 9"+"<br><br></b>")
let br="<br><br>"
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select id="phone">')
for (i=0;i<phoneManufacturers.length;i++){
    document.write('<option value="'+phoneManufacturers[i]+'">'+phoneManufacturers[i]+'<option/>');
}


