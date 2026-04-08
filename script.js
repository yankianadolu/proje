const ANTHROPIC_API_KEY = "sk-ant-xxx"; // kendi key'ini buraya yaz

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* MODAL */
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('active');
}
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('active');
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') ['bilgilendirme', 'destek'].forEach(id => closeModal(id));
});

/* CHATBOT */
async function askAI() {
  const input = document.getElementById("ai-input").value.trim();
  if (!input) return;
  const responseBox = document.getElementById("ai-response");
  responseBox.innerText = "Yanıt bekleniyor...";
  document.getElementById("ai-input").value = "";

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: "Sen YANKI'nın asistanısın. Sadece siber zorbalık konusunda yardımcı oluyorsun. Kısa, sade ve anlaşılır Türkçe cevaplar ver. Konu dışı sorulara 'Sadece siber zorbalık konusunda yardımcı olabilirim.' de.",
        messages: [{ role: "user", content: input }]
      })
    });
    const data = await response.json();
    responseBox.innerText = data.content?.[0]?.text ?? "Bir hata oluştu, tekrar dene.";
  } catch (err) {
    responseBox.innerText = "Bağlantı hatası: " + err.message;
  }
}

document.getElementById("ai-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") askAI();
});

/* SURVEY */
const surveyQuestions = [
  "Bir arkadaşının fotoğrafını izinsiz paylaşıp alay ettin.",
  "Israrla mesaj atıyorsun ama cevap vermiyor.",
  "Birini grubun içinde küçük düşürdün."
];
let sIndex = 0, sAnswers = [];
const qBox = document.getElementById("surveyQuestion");
qBox.innerText = surveyQuestions[sIndex];

function answerSurvey(val) {
  sAnswers.push(val); sIndex++;
  if (sIndex < surveyQuestions.length) {
    qBox.innerText = surveyQuestions[sIndex];
  } else {
    document.getElementById("survey").style.display = "none";
  }
}

/* BG ANİMASYON */
const c = document.getElementById("bg"), ctx = c.getContext("2d");
let w, h, particles = [];
function resize() { w = c.width = innerWidth; h = c.height = innerHeight; }
window.onresize = resize; resize();
for (let i = 0; i < 120; i++) particles.push({ x: Math.random()*w, y: Math.random()*h, vx: Math.random()-.5, vy: Math.random()-.5 });
function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(p.x, p.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();
