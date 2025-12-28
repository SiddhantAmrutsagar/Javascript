const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  //this function runs automatically and does not return any value. just running several time 
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)