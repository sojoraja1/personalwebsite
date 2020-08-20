
window.onscroll=()=>{

document.getElementById("navigationbar").style.height="100px";
}

new TypeIt("#simpleUsage", {
  speed: 50,
  loop: true,
  waitUntilVisible: true,
})
  .type(
    "<b>Hy there Everyone.This is sundar gautam , a full stack developer from Jhapa,Nepal.From more than 2yrs I have been working on various projects on both web and mobile application developement.#Loves to write codes in Javascript ,Java and Dart.</b>"
  )
  .break({ delay: 500 })
  .type(
    "<br><i>''Design is not just what it looks like and feels like.<br>Design is how it works.Innovation distinguishes between leader and a follower''</i>",
    { delay: 300 }
  )
  .pause(500)
  .break({ delay: 500 })
  .type("<em>-Steve Jobs</em>")
  .go();

function show(check) {
  switch (check) {
    case "front":
      swal({
        title: "Front End",
        text: "React Js, Angular Js, Pure Js, Jquery",
        icon: "info",
        button: "Want to hire me?",
      });

      break;
    case "app":
      swal({
        title: "Mobile",
        text: "Flutter + Dart",
        icon: "info",
        button: "Want to hire me?",
      });
      break;
    default:
      swal({
        title: "Back End",
        text: "Spring boot,Nodejs,Php ,Laravel",
        icon: "info",
        button: "Want to hire me?",
      });
      break;
  }
}



$(document).ready(function () {

var flutter =[
  {

    topic:"Coffee App",
    description:"Basic coffee app.This project is going to blow your mind ",
    link:"https://github.com/sojoraja1/coffeeapp"
  },
{
  topic:"NTC NCELL APP",
  description:"cloning of NTC NCELL app.This project is going to blow your mind ",
  link:"https://github.com/sojoraja1/NtcNcell"
},
{
  topic:"PushNotification",
  description:"If you enjoy embedding pushNotificaiton in your flutter app then ,this can be best",
  link:"https://github.com/sojoraja1/PushNotification-Local-"
},


]

var back = [
  {

    topic:"Implementing HateOas",
    description:"These project helps you to embedd other functional links to your api",
    link:"https://github.com/sojoraja1/workingWithSwaggerAndHateOas"
  },
{
  topic:"JWT WebToken",
  description:"Helps you to embedd stateless JWT webtoken for managing logins",
  link:"https://github.com/sojoraja1/NtcNcell"
},
{
  topic:"Eudereka Server",
  description:"If you enjoy embedding pushNotificaiton in your flutter app then ,this can be best",
  link:"https://github.com/sojoraja1"
}

]

var front =[
  {

    topic:"Facebook Clone",
    description:"Do you love cloning fb website???If yes than this project is going to blow your mind",
    link:"#"
  },
{
  topic:"Youtube CLone",
  description:"Do you love cloning youtube website???If yes than this project is going to blow your mind",
  link:"#"
},
{
  topic:"Instagram Clone",
  description:"Do you love cloning youtube website???If yes than this project is going to blow your mind",
  link:"#"
}

]

flutter.forEach((data)=>{
  console.log(data.topic);
    $('#flutter').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
    `<div class='card-body'>`+
        `<h5 class='card-title'>${data.topic}</h5>`+
     ` <p class='card-text'>${data.description} </p>`+
          `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project in Github</a>`+
      `</div>`+
    `</div>`+`<br>`);
  
  })
  front.forEach((data)=>{
    console.log(data.topic);
      $('#frontend').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
      `<div class='card-body'>`+
          `<h5 class='card-title'>${data.topic}</h5>`+
       ` <p class='card-text'>${data.description} </p>`+
            `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project in Github</a>`+
        `</div>`+
      `</div>`+`<br>`);
    
    })
    back.forEach((data)=>{
      console.log(data.topic);
        $('#backend').append(`<div class='card box-shadow text-center' style='width: 18rem;'>`+
        `<div class='card-body'>`+
            `<h5 class='card-title'>${data.topic}</h5>`+
         ` <p class='card-text'>${data.description} </p>`+
              `<a href='${data.link}'  target='popup' class='d-inline-flex btn btn-primary'>View Project in Github</a>`+
          `</div>`+
        `</div>`+`<br>`);
      
      })



})

