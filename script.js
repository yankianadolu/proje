

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
    function askAI() {
  const input = document.getElementById("ai-input").value.toLowerCase().trim();
  const responseBox = document.getElementById("ai-response");

  if (!input) return;

  document.getElementById("ai-input").value = "";

  // Cevaplar
  let cevap = "Bu konuda sana yardımcı olabilirim. Sorunu biraz daha açık yazabilir misin?";

  if (input.includes("siber zorbalık nedir")) {
    cevap = "Siber zorbalık, bir kişiye internet üzerinden hakaret etme, tehdit etme veya küçük düşürme davranışıdır.";
  }

  else if (input.includes("ne yapmalıyım") || input.includes("zorbalığa uğruyorum")) {
    cevap = "Güvendiğin birine anlat, zorba kişiyi engelle, kanıtları sakla ve şikayet et.";
  }

  else if (input.includes("nasıl şikayet")) {
    cevap = "Bulunduğun platformda şikayet et butonunu kullanabilir veya okul yönetimine başvurabilirsin.";
  }

  else if (input.includes("cezası") || input.includes("suç mu")) {
    cevap = "Evet, siber zorbalık suçtur ve hukuki sonuçları olabilir.";
  }

  else if (input.includes("kanıt") || input.includes("ekran görüntüsü")) {
    cevap = "Ekran görüntüsü alarak kanıt saklaman çok önemlidir.";
  }

  else if (input.includes("engelle")) {
    cevap = "Seni rahatsız eden kişiyi engelleyerek iletişimi kesebilirsin.";
  }

  else if (input.includes("aileme söylemeli miyim")) {
    cevap = "Evet, güvendiğin bir yetişkine durumu anlatmak en doğru adımdır.";
  }
else if (input.includes("tehdit")) {
  cevap = "Tehdit ciddi bir durumdur. Hemen bir yetişkine ve gerekirse yetkililere bildir.";
}
      else if (input.includes("merhaba") || input.includes("selam")) {
  cevap = "Merhaba! Siber zorbalık hakkında sana nasıl yardımcı olabilirim?";
}
  responseBox.innerText = cevap;
}
    const data = await response.json();
   console.log(data);
responseBox.innerText = data.content?.[0]?.text ?? (data.error?.message ?? "Bir hata oluştu.");
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
function toggleChat() {
  document.querySelector('.ai-widget').classList.toggle('open');
}
function openInstagram() {
  window.open("https://www.instagram.com/yanki.2026/", "_blank");
}
