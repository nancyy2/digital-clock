function updateClock() {
  const currDate = new Date();
  let hours = currDate.getHours();
  const minutes = currDate.getMinutes();
  const seconds = currDate.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;


  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();



// Second method
// function fetchtime(){
//     const currDate=new Date();
//     let hours=document.querySelector("#hours");
//     let minutes=document.querySelector("#minutes");
//     let seconds=document.querySelector("#seconds");
//     let ampm=document.querySelector("#ampm");
//     if(hours>=12){
//         ampm="PM"
//     }
//   else{
//         ampm="AM"
//     }
// hours.innerHTML=currDate.getHours().toString().padStart(2,"0")
// minutes.innerHTML=currDate.getMinutes().toString().padStart(2,"0")
// seconds.innerHTML=currDate.getSeconds().toString().padStart(2,"0")
// }
// setInterval(fetchtime,1000);
// fetchtime();