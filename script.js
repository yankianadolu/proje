function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['bilgilendirme', 'destek'].forEach(id => closeModal(id));
  }
});

/* AI SIMÜLASYON */
function askAI(){
  const input=document.getElementById("ai-input").value.toLowerCase();
  let answer="Bu konuda bir rehber öğretmenle konuşmanı öneririm.";

  const rules=[
    {keys:["zorbalık","alay","dalga"],reply:"Bu yaşadığın durum bir sınır ihlali olabilir."},
    {keys:["ne yapmalıyım","çözüm"],reply:"Kanıt topla, engelle ve bildir."},
    {keys:["merhaba","selam"],reply:"Merhaba! Nasıl yardımcı olabilirim?"}
  ];

  for(let r of rules){
    for(let k of r.keys){
      if(input.includes(k)) answer=r.reply;
    }
  }

  document.getElementById("ai-response").innerText=answer;
}

/* SURVEY */
const surveyQuestions=[
  "Bir arkadaşının fotoğrafını izinsiz paylaşıp alay ettin.",
  "Israrla mesaj atıyorsun ama cevap vermiyor.",
  "Birini grubun içinde küçük düşürdün."
];

let sIndex=0,sAnswers=[];
const qBox=document.getElementById("surveyQuestion");
qBox.innerText=surveyQuestions[sIndex];

function answerSurvey(val){
  sAnswers.push(val);sIndex++;
  if(sIndex<surveyQuestions.length){
    qBox.innerText=surveyQuestions[sIndex];
  }else{
    document.getElementById("survey").style.display="none";
    localStorage.setItem("anket",JSON.stringify(sAnswers));
  }
}

/* BG ANİMASYON */
const c=document.getElementById("bg"),ctx=c.getContext("2d");
let w,h,particles=[];
function resize(){w=c.width=innerWidth;h=c.height=innerHeight;}
window.onresize=resize;resize();
for(let i=0;i<120;i++)particles.push({x:Math.random()*w,y:Math.random()*h,vx:Math.random()-.5,vy:Math.random()-.5});
function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>w)p.vx*=-1;
    if(p.y<0||p.y>h)p.vy*=-1;
    ctx.fillStyle="#38bdf8";
    ctx.fillRect(p.x,p.y,2,2);
  });
  requestAnimationFrame(animate);
}
animate();
