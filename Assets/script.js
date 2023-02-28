var currentDay=document.getElementById('currentDay')
var ele = document.getElementsByClassName('time-block');
console.log(currentDay)
var idArray=[]

for (var i=0; i< ele.length; i++ ) {
  idArray.push(ele[i].id);
}
var buttons=document.querySelectorAll('.btn')
var buttonArray= []
for( i=0; i<buttons.length; i++){
  buttonArray.push(buttons[i].parentElement.id)
}
console.log(buttons)
console.log(buttonArray)




$(function () {
  function displayDay(){
    today=dayjs().format('[Today is: ]MMM, DD')
    currentDay.textContent=today
  }
  function timeCheck(){
    for (i=0; i<idArray.length;i++){
      let timeBlocks=document.getElementById(idArray[i])
      let timeInt=parseInt(timeBlocks.id)
      if(timeInt == dayjs().format('H'))
      timeBlocks.classList.add('present')
      if(timeInt < dayjs().format('H'))
      timeBlocks.classList.add('past')
      if(timeInt > dayjs().format('H'))
      timeBlocks.classList.add('future')
      
    }
  }
  
    
  $(".time-block button").on("click", function (event) {
      let textInput= $(this).siblings('.description').val();
      let blockId= $(this).parent('.time-block').attr('id')
      console.log(textInput);
      localStorage.setItem(blockId,textInput);
  
    })
  
    function displaySavedTasks(){
      for(i=0 ;i<idArray.length;i++){
        tasks= document.getElementById(idArray[i])
      savedTasks= localStorage.getItem(idArray[i])
      if (localStorage.hasOwnProperty(idArray[i])){
        $('.time-block').eq(i).children('.description').text(savedTasks)
        console.log(savedTasks)
      }
      
      }
    }

  timeCheck()
displayDay()
displaySavedTasks()
});
