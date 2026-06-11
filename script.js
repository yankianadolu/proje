
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  

  if(id === 'home') {
    animateCounters();
  }
}


function openModal(id) {
  document.getElementById('modal-' + id).classList.add('active');
}

function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('active');
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['bilgilendirme', 'destek'].forEach(id => closeModal(id));
    closeLightbox();
  }
});


const qaList = [
  { k: ["siber zorbalık nedir", "tanım", "ne demek", "nedir"], c: "Siber zorbalık; internet, sosyal medya veya oyun platformlarında bir kişiye yönelik kasıtlı, tekrarlayan ve zarar verici davranışlardır. Hakaret, dışlama ve ifşa gibi türleri bulunur." },
  { k: ["ne yapmalıyım", "zorbalığa uğruyorum", "yardım", "ne yapabilirim"], c: "Güvendiğin bir yetişkine (ailene, öğretmenine) anlat. Zorbalık yapan kişiyi hemen engelle ve bildiri butonunu kullan. Paylaşımların ekran görüntüsünü alarak kanıtları mutlaka sakla." },
  { k: ["şikayet", "ihbar", "şikâyet"], c: "İçeriği platforma bildirebilirsin. Ayrıca Türkiye'de ihbar.gov.tr adresinden veya ALO 158 hattını arayarak BTK'ya resmi şikayette bulunabilirsin." },
  { k: ["cezası", "suç mu", "hukuki", "kanun", "ceza"], c: "Evet, siber zorbalık Türk Ceza Kanunu kapsamında suçtur! Tehdit, hakaret ve kişisel verilerin izinsiz paylaşılması hapis cezasına kadar yol açabilir." },
  { k: ["kanıt", "ekran görüntüsü", "ispat", "delil"], c: "Ekran görüntüsü alırken tarih, saat ve profil adının net görünmesine dikkat et. Bu delilleri güvenli bir klasörde sakla." },
  { k: ["aileme", "ebeveyn", "anneme", "babama"], c: "Kesinlikle ailene söylemelisin. Bu durum senin suçun değil ve utanman gereken bir şey yok. Aile desteği en güçlü kalkanındır." },
  { k: ["alo 183", "183", "psikolojik destek"], c: "ALO 183, Çocuk ve gençlere yönelik psikolojik ve sosyal destek sağlayan 7/24 ücretsiz bir bakanlık hattıdır." },
  { k: ["okul", "öğretmen", "rehber"], c: "Okul rehber öğretmenleri bu süreçleri gizlilikle yönetir. Durumu onlarla paylaşmaktan çekinme." },
  { k: ["merhaba", "selam", "hey"], c: "Merhaba! Siber zorbalıkla mücadelede rehberlik etmek için buradayım. Bana 'Ne yapmalıyım?', 'Suç mu?' gibi sorular sorabilirsin." },
  { k: ["teşekkür", "sağ ol", "anladım"], c: "Rica ederim! Unutma, dijital dünyada asla yalnız değilsin. Kendine iyi bak! ✨" }
];


function askAI() {
  const inputEl = document.getElementById("ai-input");
  const input = inputEl.value.trim();
  const responseBox = document.getElementById("ai-response");
  if (!input) return;

  // Kullanıcı baloncuğunu ekle
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user-bubble";
  userBubble.innerText = input;
  responseBox.appendChild(userBubble);
  
  inputEl.value = "";
  responseBox.scrollTop = responseBox.scrollHeight;

  
  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-bubble bot-bubble typing-bubble";
  typingBubble.innerHTML = "<span>.</span><span>.</span><span>.</span>";
  responseBox.appendChild(typingBubble);
  responseBox.scrollTop = responseBox.scrollHeight;

 
  setTimeout(() => {

    typingBubble.remove();

    const cleanInput = input.toLowerCase();
    const match = qaList.find(item => item.k.some(k => cleanInput.includes(k)));
    const botReply = match ? match.c : "Bu konuda tam aradığın cevabı bulamadım ama siber zorbalığa uğruyorsan kanıt toplayıp engellemeni ve bir yetişkine başvurmanı öneririm. Başka nasıl yardımcı olabilirim?";
    
    const botBubble = document.createElement("div");
    botBubble.className = "chat-bubble bot-bubble";
    botBubble.innerText = botReply;
    responseBox.appendChild(botBubble);
    
    responseBox.scrollTop = responseBox.scrollHeight;
  }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("ai-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") askAI();
  });

  animateCounters();
});


const surveyQuestions = [
  "Bir arkadaşının komik çıktığı bir fotoğrafını izinsiz paylaşıp grupta dalga geçmek:",
  "Birine sosyal medyadan oyun daveti veya mesajı harici, sürekli 'neredesin, kimlesin' diye ısrarla yazmak:",
  "Sınıf grubunda tartışılan bir arkadaşını ani bir kararla gruptan atmak ve onu yok saymak:"
];

let sIndex = 0;
const qBox = document.getElementById("surveyQuestion");

function renderQuestion() {
  const wrapper = document.getElementById("survey-content-wrapper");
  if (sIndex < surveyQuestions.length) {
    qBox.innerText = surveyQuestions[sIndex];
  } else {
  
    wrapper.innerHTML = `
      <div style="padding: 10px 0;">
        <span style="font-size: 60px; filter: drop-shadow(0 0 15px #38bdf8);">🛡️</span>
        <h2 style="color: #2dd4bf; margin-top: 15px;">Tebrikler, Testi Tamamladın!</h2>
        <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin: 14px 0;">
          Dijital sınırları başarıyla analiz ettin ve <strong>"Dijital Muhafız"</strong> unvanı kazandın. Rozetin profilinde aktif edildi!
        </p>
        <button onclick="closeSurveyPanel()" style="background:#38bdf8; color:#020617; font-weight:700; border:none; padding:14px; border-radius:12px; cursor:pointer; width:100%;">
          Sitede Keşfe Başla
        </button>
      </div>
    `;
 
    document.getElementById("user-badge-status").style.display = "inline-block";
  }
}

function closeSurveyPanel() {
  document.getElementById("survey").style.display = "none";
}

function answerSurvey(val) {
  sIndex++;
  renderQuestion();
}

renderQuestion();


function toggleChat() {
  document.querySelector('.ai-widget').classList.toggle('open');
}


function toggleEventGallery(card, event) {
  if (event.target.tagName === 'IMG') return;
  card.classList.toggle('gallery-open');
}


function openLightbox(imgElement, event) {
  event.stopPropagation();
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxImg.src = imgElement.src;
  lightboxCaption.innerText = imgElement.alt;
  lightbox.classList.add('lightbox-active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('lightbox-active');
}


function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = target / 40; // Hız ayarı

      if (count < target) {
        counter.innerText = Math.ceil(count + speed);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
}