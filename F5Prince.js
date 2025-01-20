var i = 0;
var txt1 =
  "... <<           To The, <      University of  Sonam ...  <<     Subject - Regarding Admission as a Best friend <<        Dear mam, <Now I want to say something special to you. <<               So , Please read everything carefully...                                                                   > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me... <<                           I don't know the reason why your thoughts always resonates inside my mind...                                                     > Everything about you is always intresting for me...                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...                                                     > As a co-worker i didn't wanted to tell you this , i know this will mashup everythig , but what should i do please suggest me i am loosing my control on my emotions , i don't know what is this but sometime when i get positive vives from you i become delighted that feelings is priceless , And sometime without reason i will become sad and feel heart in chest i hate this feelings , I don't know what are you think of me but you have taken an special place in my heart  ...                                                                              > Now You are the one & only who win my  heart ....           << if i am best choice for you then only give me a chance to Prove me ...                           >Yours Friend,  <F5Prince .....! |                  ";
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
