var Qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.” ",
    auther: "― Oscar Wilde ",
  },
  {
    qoute: "“So many books, so little time.” ",
    auther: "―Frank Zappa",
  },
  {
    qoute: "“A room without books is like a body without a soul.” ",
    auther: "―Marcus Tullius Cicero",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.” ",
    auther: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.” ",
    auther: "― Mahatma Gandhist",
  },

];


function RandomQoute() {
   
   var RandomNum=Math.floor(Math.random()*Qoutes.length);
    document.getElementById("qoute").innerHTML=Qoutes[RandomNum].qoute;
    document.getElementById("auther").innerHTML=Qoutes[RandomNum].auther;
}
