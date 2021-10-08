let section1=document.getElementById('section1');
section1.addEventListener('click',function(){
    let header=document.getElementById('header');
    if(header.innerHTML=="")
    { let section2=document.createElement('section');
    section2.className="section2";
    section2.id="section2";
    let text1=document.createTextNode('Home');
    section2.appendChild(text1);
  
    header.appendChild(section2);
    console.log(section2);
    let section3=document.createElement('section');
    section3.className="section2";
    section3.id="section3";
    let text2=document.createTextNode('Services');
    section3.appendChild(text2);
  
    header.appendChild(section3);
    console.log(section2);
    let section4=document.createElement('section');
    section4.className="section2";
    section4.id="section4";
    let text3=document.createTextNode('About Us');
    section4.appendChild(text3);
   
    header.appendChild(section4);
    console.log(section2);
    let section5=document.createElement('section');
    section5.className="section2";
    section5.id="section5";
    let text4=document.createTextNode('Contact Us');
    section5.appendChild(text4);
   
    header.appendChild(section5);
    console.log(section2);
    let section6=document.createElement('section');
    section6.className="section2";
    section6.id="section6";
    let text5=document.createTextNode('Sign Up');
    section6.appendChild(text5);
    
    header.appendChild(section6);
    console.log(section2);
    let section7=document.createElement('section');
    section7.className="section2";
    section7.id="section7";
    let text6=document.createTextNode('Sign In');
    section7.appendChild(text6);
    
    header.appendChild(section7);
    console.log(section2);
    header.style.background="rgb(248, 230, 230)";
    header.style.padding="20px";
}
else{
    header.innerHTML="";
    header.style.padding="0px";
}
})

let circle1=document.getElementById('circle1');
let circle2=document.getElementById('circle2');
let circle3=document.getElementById('circle3');
let circle4=document.getElementById('circle4');
let circle5=document.getElementById('circle5');
let circle6=document.getElementById('circle6');
circle1.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','books.jpg');
  circle1.style.background="blue";
  circle2.style.background="white";
  circle3.style.background="white";
  circle4.style.background="white";
  circle5.style.background="white";
  circle6.style.background="white";
 
})

circle2.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','college student.jpg');
  circle1.style.background="white";
  circle2.style.background="blue";
  circle3.style.background="white";
  circle4.style.background="white";
  circle5.style.background="white";
  circle6.style.background="white";
})

circle3.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','online studies.jpg');
  circle1.style.background="white";
  circle2.style.background="white";
  circle3.style.background="blue";
  circle4.style.background="white";
  circle5.style.background="white";
  circle6.style.background="white";
})

circle4.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','medicine.jpg');
  circle1.style.background="white";
  circle2.style.background="white";
  circle3.style.background="white";
  circle4.style.background="blue";
  circle5.style.background="white";
  circle6.style.background="white";
})

circle5.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','school student.jpg');
   circle1.style.background="white";
  circle2.style.background="white";
  circle3.style.background="white";
  circle4.style.background="white";
  circle5.style.background="blue";
  circle6.style.background="white";
})

circle6.addEventListener('click',function()
{ let image1=document.getElementById('image1');
  image1.setAttribute('src','college.jpg');
  circle1.style.background="white";
  circle2.style.background="white";
  circle3.style.background="white";
  circle4.style.background="white";
  circle5.style.background="white";
  circle6.style.background="blue";
})

let div1=document.getElementById('div1');
div1.addEventListener('click',function(){
  div1.style.color="white";
  div2.style.color="grey";
  let child1=document.getElementById('child1');
  child1.innerHTML="BTech";
  let para1=document.getElementById('para1');
  para1.innerHTML="Bachelors of Technology often referred to as B.Tech,is a four-year-full-time course that cover different fields of engineering and technology.";

  let child2=document.getElementById('child2');
  child2.innerHTML="LLB";
  let para2=document.getElementById('para2');
  para2.innerHTML="Bachelor of Legislative Laws is a 3 years Undergraduate degree course in the discipline of Law, pursued by students who have cleared class 12th board exams,from a recognised board.";

  let child3=document.getElementById('child3');
  child3.innerHTML="BDS";
  let para3=document.getElementById('para3');
  para3.innerHTML="Bachelor of Dental Surgery is a 5-years undergraduate program and the only approved dental course in India. It is compulsory for the students aspiring to work as dentists.";

  let child4=document.getElementById('child4');
  child4.innerHTML="BCom";
  let para4=document.getElementById('para4');
  para4.innerHTML="Bachelor of Commerce is a three year undergraduate program. BCom course is designed to impart managerial skills to students while focusing on a particular business area. ";

}
)


let div2=document.getElementById('div2');
div2.addEventListener('click',function(){
  div2.style.color="white";
  div1.style.color="grey";
 
  let child1=document.getElementById('child1');
  child1.innerHTML="MTech";
  let para1=document.getElementById('para1');
  para1.innerHTML="MTech is a professional postgraduate engineering master degree programme awarded to candidates after completion of two years of study in the discipline of engineering. ";

 
  let child2=document.getElementById('child2');
  child2.innerHTML="MCA";
  let para2=document.getElementById('para2');
  para2.innerHTML="Master of Computer Applications is a professional degree in computer science.The MCA course is a combination of both theoretical and practical knowledge.";

 
  let child3=document.getElementById('child3');
  child3.innerHTML="MD";
  let para3=document.getElementById('para3');
  para3.innerHTML="Doctor of Medicine is a postgraduate specialised course.It enables the pursuer to acquire in-depth knowledge and hands-on training on a variety of subjects. ";

  let child4=document.getElementById('child4');
  child4.innerHTML="MBA";
  let para4=document.getElementById('para4');
  para4.innerHTML="A master of business administration is a graduate degree that provides theoretical and practical training for business or investment management. ";

}
)