var i = 0;
var txt1 =ions , i don't kno
  "... <<           To The, <      University of  Sonam ...  <<     Subject - Regarding Admission as a Best friend <<        Dear mam, <Now I want to say something special to you. <<               So , Please read everything carefully...                                                                   > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me... <<                           I don't know the reason why your thoughts always resonates inside my mind...                                                     > Everything about you is always intresting for me...                     << I am somewhat nervous Because I haven't said these words to anyone ...                                                     > As a co-worker i didn't wanted to tell you this , i know this will mashup everythig , but what should i do please suggest me i am loosing my control on my emotions i dont know what is this but sometime this vives i become delighted that and feelings is priceless ...                                              << So dear sonam Kindly provide your feedbak ASAP that i deserve your friendship please don't take this as a romantic proposal , i am very week in emotionaly i cant handle any type emotional drama , its just a frindship latter for testing my HTML page ...                           >Yours Friend,  <F5Prince .....! |                  ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
