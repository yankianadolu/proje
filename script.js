function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
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
  }
});

const qaList = [
  { k: ["siber zorbalık nedir", "tanım", "ne demek", "nedir"], c: "Siber zorbalık; internet, sosyal medya, mesajlaşma uygulamaları veya oyun platformları aracılığıyla bir kişiye yönelik kasıtlı, tekrarlayan ve zarar verici davranışlardır. Hakaret, tehdit, dışlama ve ifşa etme gibi biçimlerde görülür." },
  { k: ["ne yapmalıyım", "zorbalığa uğruyorum", "yardım", "ne yapabilirim"], c: "Güvendiğin bir yetişkine anlat. Zorba kişiyi engelle ve bildir. Mesajların ekran görüntüsünü alarak kanıtları sakla. Cevap verme — bu çoğu zaman zorbalığı büyütür." },
  { k: ["nasıl şikayet", "şikayet etmek", "ihbar", "şikâyet"], c: "Bulunduğun platformda 'Şikayet Et' butonunu kullanabilirsin. Ayrıca ihbar.gov.tr adresinden veya ALO 158 hattını arayarak BTK'ya bildirebilirsin." },
  { k: ["cezası", "suç mu", "hukuki", "kanun", "ceza"], c: "Evet, siber zorbalık Türk Ceza Kanunu kapsamında suçtur. Tehdit, hakaret ve kişisel verilerin paylaşılması gibi eylemler hapis veya para cezasına yol açabilir." },
  { k: ["kanıt", "ekran görüntüsü", "ispat", "delil"], c: "Ekran görüntüsü alarak tarih ve saat bilgisinin göründüğünden emin ol. Bu kanıtları güvenli bir yerde sakla; şikâyet sürecinde çok işine yarayacak." },
  { k: ["engelle", "engellemek", "blokla"], c: "Seni rahatsız eden kişiyi platformda engelleyerek iletişimi kesebilirsin. Engelleme sonrası 'Bildir' seçeneğini de kullanmayı unutma." },
  { k: ["aileme söylemeli", "aileye söyle", "ebeveyn", "anneme", "babama"], c: "Evet, güvendiğin bir aile büyüğüne durumu anlatmak en doğru adımdır. Aile desteği bu süreçte en önemli güç kaynaklarından biridir." },
  { k: ["tehdit", "tehdit ediliyor", "tehdit alıyorum"], c: "Tehdit ciddi bir durumdur. Hemen bir yetişkine haber ver ve gerekirse en yakın emniyet müdürlüğüne ya da egm.gov.tr üzerinden siber suçlar birimine başvur." },
  { k: ["alo 183", "183", "psikolojik destek", "destek hattı"], c: "ALO 183, Türkiye'de 7/24 ücretsiz aranabilen Aile ve Sosyal Hizmetler Hattı'dır. Çocuk ve gençlere yönelik psikolojik destek ve yönlendirme sağlar." },
  { k: ["158", "btk", "bilgi teknolojileri", "ihbar.gov"], c: "BTK ALO 158 hattı veya ihbar.gov.tr üzerinden çevrimiçi taciz ve zararlı içerikleri şikâyet edebilirsin." },
  { k: ["okul", "öğretmen", "rehber", "müdür"], c: "Rehber öğretmenine veya okul müdürüne durumu anlat. Okul, zorbalığa karışan öğrencilere yönelik önlem almakla yükümlüdür." },
  { k: ["dışlama", "gruptan atmak", "görmezden", "dışlanıyorum"], c: "Birini kasıtlı olarak çevrimiçi gruplardan dışlamak da bir siber zorbalık türüdür. Durumu bir yetişkine veya platform yöneticisine bildir." },
  { k: ["kimlik hırsızlığı", "hesap ele geçirme", "sahte hesap"], c: "Birisinin hesabını ele geçirerek onun adına paylaşım yapmak kimlik hırsızlığıdır ve suçtur. Şifrelerini düzenli değiştir, iki faktörlü doğrulamayı etkinleştir." },
  { k: ["fotoğraf", "video", "ifşa", "paylaşmak", "izinsiz"], c: "Birinin özel fotoğraf veya videolarını izinsiz paylaşmak hem suçtur hem de ciddi bir siber zorbalık türüdür. Hemen bir yetişkine ve yetkililere bildir." },
  { k: ["sosyal medya", "instagram", "twitter", "tiktok"], c: "Sosyal medyada zorbalığa uğrarsan o kişiyi engelle, içeriği şikayet et ve ekran görüntüsü al. Gerekirse platformun destek merkeziyle iletişime geç." },
  { k: ["oyun", "online oyun", "gaming"], c: "Online oyunlarda zorbalık da siber zorbalıktır. Oyunun şikayet sistemini kullan, o oyuncuyu sessize al veya engelle." },
  { k: ["depresyon", "kendimi kötü", "üzgün", "ağlıyorum"], c: "Siber zorbalık ciddi psikolojik etkilere yol açabilir. Kendini kötü hissediyorsan bunu içinde tutma. Bir yetişkine anlat ya da ALO 183'ü ara." },
  { k: ["nasıl korunurum", "korunma", "önlem", "güvende"], c: "Güçlü şifreler kullan. Kişisel bilgilerini herkesle paylaşma. Gizlilik ayarlarını kontrol et. Tanımadığın kişilerin isteklerini kabul etme." },
  { k: ["merhaba", "selam", "hey", "hi"], c: "Merhaba! Siber zorbalıkla ilgili aklına takılan her şeyi sorabilirsin. Örneğin: 'Siber zorbalık nedir?', 'Ne yapmalıyım?', 'Nasıl şikayet ederim?' gibi sorular sorabilirsin." },
  { k: ["teşekkür", "sağ ol", "tamam", "anladım"], c: "Rica ederim! Başka soruların olursa buradayım. Unutma, yalnız değilsin." },
];

function askAI() {
  const inputEl = document.getElementById("ai-input");
  const input = inputEl.value.toLowerCase().trim();
  const responseBox = document.getElementById("ai-response");
  if (!input) return;
  inputEl.value = "";
  const match = qaList.find(item => item.k.some(k => input.includes(k)));
  responseBox.innerText = match
    ? match.c
    : "Bu konuda sana yardımcı olmak isterim. Soruyu biraz farklı yazabilir misin? Örneğin: 'siber zorbalık nedir', 'ne yapmalıyım' gibi sorular sorabilirsin.";
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("ai-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") askAI();
  });
});

const surveyQuestions = [
  "Bir arkadaşının fotoğrafını izinsiz paylaşıp alay etmek ne tür bir davranıştır?",
  "Birine sürekli istemediği hâlde mesaj atmak ne tür bir davranıştır?",
  "Birini çevrimiçi sohbet grubundan kasıtlı olarak dışlamak ne tür bir davranıştır?",
];

let sIndex = 0;
const qBox = document.getElementById("surveyQuestion");

function renderQuestion() {
  if (sIndex < surveyQuestions.length) {
    qBox.innerText = surveyQuestions[sIndex];
  } else {
    document.getElementById("survey").style.display = "none";
  }
}

renderQuestion();

function answerSurvey(val) {
  sIndex++;
  renderQuestion();
}

function toggleChat() {
  document.querySelector('.ai-widget').classList.toggle('open');
}  { k: ["siber zorbalık nedir", "tanım", "ne demek"], c: "Siber zorbalık; internet, sosyal medya, mesajlaşma uygulamaları veya oyun platformları aracılığıyla bir kişiye yönelik kasıtlı, tekrarlayan ve zarar verici davranışlardır. Hakaret, tehdit, dışlama ve ifşa etme gibi biçimlerde görülür." },
  { k: ["ne yapmalıyım", "zorbalığa uğruyorum", "yardım"], c: "Güvendiğin bir yetişkine (ebeveyn veya öğretmen) anlat. Zorba kişiyi engelle ve bildir. Mesajların ekran görüntüsünü alarak kanıtları sakla. Cevap verme — bu çoğu zaman zorbalığı büyütür." },
  { k: ["nasıl şikayet", "şikayet etmek", "ihbar"], c: "Bulunduğun platformda 'Şikayet Et' butonunu kullanabilirsin. Ayrıca ihbar.gov.tr adresinden veya ALO 158 hattını arayarak BTK'ya bildirebilirsin." },
  { k: ["cezası", "suç mu", "hukuki", "kanun"], c: "Evet, siber zorbalık Türk Ceza Kanunu kapsamında suçtur. Tehdit, hakaret ve kişisel verilerin paylaşılması gibi eylemler hapis veya para cezasına yol açabilir." },
  { k: ["kanıt", "ekran görüntüsü", "ispat"], c: "Ekran görüntüsü alarak tarih ve saat bilgisinin göründüğünden emin ol. Bu kanıtları güvenli bir yerde sakla; şikâyet sürecinde çok işine yarayacak." },
  { k: ["engelle", "engellemek"], c: "Seni rahatsız eden kişiyi platformda engelleyerek iletişimi kesebilirsin. Engelleme sonrası 'Bildir' seçeneğini de kullanmayı unutma." },
  { k: ["aileme söylemeli", "aileye söyle", "ebeveyn"], c: "Evet, güvendiğin bir aile büyüğüne durumu anlatmak en doğru adımdır. Aile desteği bu süreçte en önemli güç kaynaklarından biridir." },
  { k: ["tehdit", "tehdit ediliyor"], c: "Tehdit ciddi bir durumdur. Hemen bir yetişkine haber ver ve gerekirse en yakın emniyet müdürlüğüne ya da egm.gov.tr üzerinden siber suçlar birimine başvur." },
  { k: ["alo 183", "183", "psikolojik destek", "destek hattı"], c: "ALO 183, Türkiye'de 7/24 ücretsiz aranabilen Aile ve Sosyal Hizmetler Hattı'dır. Çocuk ve gençlere yönelik psikolojik destek ve yönlendirme sağlar." },
  { k: ["158", "btk", "bilgi teknolojileri"], c: "BTK (Bilgi Teknolojileri ve İletişim Kurumu) ALO 158 hattı veya ihbar.gov.tr üzerinden çevrimiçi taciz ve zararlı içerikleri şikâyet edebilirsin." },
  { k: ["okul", "öğretmen", "rehber"], c: "Rehber öğretmenine veya okul müdürüne durumu anlat. Okul, zorbalığa karışan öğrencilere yönelik önlem almakla yükümlüdür." },
  { k: ["dışlama", "gruptan atmak", "görmezden"], c: "Birini kasıtlı olarak çevrimiçi gruplardan dışlamak da bir siber zorbalık türüdür. Buna maruz kalıyorsan durumu bir yetişkine veya platform yöneticisine bildir." },
  { k: ["kimlik hırsızlığı", "hesap ele geçirme", "sahte hesap"], c: "Birisinin hesabını ele geçirerek onun adına paylaşım yapmak kimlik hırsızlığıdır ve suçtur. Şifrelerini düzenli değiştir, iki faktörlü doğrulamayı etkinleştir." },
  { k: ["fotoğraf", "video", "ifşa", "paylaşmak"], c: "Birinin özel fotoğraf veya videolarını izinsiz paylaşmak hem suçtur hem de ciddi bir siber zorbalık türüdür. Bu durumu hemen bir yetişkine ve yetkililere bildir." },
  { k: ["merhaba", "selam", "merhabalar", "hey"], c: "Merhaba! Siber zorbalıkla ilgili aklına takılan her şeyi sorabilirsin. Sana yardımcı olmaya çalışacağım." },
  { k: ["teşekkür", "sağ ol", "tamam"], c: "Rica ederim! Başka soruların olursa buradayım." },
];

function askAI() {
  const inputEl = document.getElementById("ai-input");
  const input = inputEl.value.toLowerCase().trim();
  const responseBox = document.getElementById("ai-response");
  if (!input) return;
  inputEl.value = "";

  const match = qaList.find(item => item.k.some(k => input.includes(k)));
  responseBox.innerText = match
    ? match.c
    : "Bu konuda sana yardımcı olabilirim. Sorunu biraz daha açık yazabilir misin? Örneğin: 'siber zorbalık nedir', 'ne yapmalıyım', 'nasıl şikayet ederim' gibi sorular sorabilirsin.";
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("ai-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") askAI();
  });
});

/* SURVEY */
const surveyQuestions = [
  { soru: "Bir arkadaşının fotoğrafını izinsiz paylaşıp alay etmek ne tür bir davranıştır?", dogru: "Zorbalık" },
  { soru: "Birine sürekli istemediği hâlde mesaj atmak ne tür bir davranıştır?", dogru: "Zorbalık" },
  { soru: "Birini çevrimiçi sohbet grubundan kasıtlı olarak dışlamak ne tür bir davranıştır?", dogru: "Zorbalık" },
];
let sIndex = 0;
const surveyOverlay = document.getElementById("survey");
const qBox = document.getElementById("surveyQuestion");

function renderQuestion() {
  if (sIndex < surveyQuestions.length) {
    qBox.innerText = surveyQuestions[sIndex].soru;
  } else {
    surveyOverlay.style.display = "none";
  }
}
renderQuestion();

function answerSurvey(val) {
  sIndex++;
  renderQuestion();
}

function toggleChat() {
  document.querySelector('.ai-widget').classList.toggle('open');
}

function openInstagram() {
  window.open("https://www.instagram.com/yanki.2026/", "_blank");
}
