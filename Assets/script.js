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

buttons.forEach(button => {
  
  button.addEventListener('click', (event) => {
    let textInput= event.target.previousSibling.value
    let blockId= event.target.parentElement.id
    console.log(textInput)

  })
})
timeCheck()
displayDay()


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
