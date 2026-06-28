const target=new Date('2026-08-27T18:00:00');
setInterval(()=>{let d=target-new Date();if(d<0)return;let days=Math.floor(d/86400000);let h=Math.floor(d%86400000/3600000);let m=Math.floor(d%3600000/60000);document.getElementById('countdown').innerHTML=`<h2>${days} Days ${h} Hours ${m} Minutes</h2>`},1000);
function reply(r){
const n=document.getElementById('name').value||'Guest';
document.getElementById('msg').innerHTML='Thank you, '+n+'! Your response: '+r+'.';
console.log({name:n,response:r});
// To save responses, connect this function to a Google Apps Script Web App using fetch().
}