
  function answer(value){
    let left=`   <div class="talk-bubble tri-right left-in">
  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
             class="talk_left_header"></img>
  <div class="talktext">
    <p>`+value+`</p>
  </div>

</div>`
    $("#Chat_interface").append(left)
  };
  //提问者提问
function Question(value){
let right=` <div class="talk-bubble tri-right round right-in right_talk">
<img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
         class="talk_right_header"></img>
<div class="talktext">
<p>`+value+`</p>
</div>

</div>
`
$("#Chat_interface").append(right)
}


export{
  answer,Question
}



