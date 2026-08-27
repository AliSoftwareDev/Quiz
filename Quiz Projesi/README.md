Kullanıcıların bilgilerini test etmesini sağlayan, dinamik soru yapısına ve anlık skor takibine sahip **Vanilla JavaScript** ile geliştirilmiş interaktif bilgi yarışması uygulaması.

---

## 📸 Ekran Görüntüsü



---

## 🚀 Özellikler

* **Dinamik Soru Yükleme:** Soruların ve şıkların veritabanı veya nesne dizisinden (Array of Objects) dinamik olarak DOM'a aktarılması.
* **Anlık Şık Kontrolü & Skor Hesaplama:** Doğru/yanlış cevapların anında değerlendirilmesi ve kullanıcıya toplam skorun gösterilmesi.
* **Seçim Zorunluluğu:** Kullanıcı bir şık seçmeden sonraki soruya geçilmesini engelleyen doğrulama (validation) mekanizması.
* **Yeniden Başlatma (Restart):** Quiz bitiminde skoru sıfırlayıp testi baştan başlatma seçeneği.
* **Responsive Arayüz:** Mobil ve masaüstü ekranlarda sorunsuz çalışan kart tasarımı.

---

## 🛠️ Teknolojik Mimari

* **HTML5:** Form elemanları, radyo butonları ve semantik yapı.
* **CSS3:** Card layout, Flexbox, custom radio button stilleri ve responsive medya sorguları.
* **Vanilla JavaScript (ES6+):** 
  * Array & Object manipülasyonu
  * DOM seçicileri ve dinamik içerik basma (`innerHTML`, `innerText`)
  * Event Listeners ve koşullu durum yönetimi (State)

---

## 📂 Proje Dosya Yapısı

```text
quiz-app/
│
├── assets/
│   └── preview.png       # Proje ekran görüntüsü
├── index.html            # İskelet ve kart yapısı
├── style.css             # Arayüz ve seçim stilleri
├── script.js             # Soru verileri, skor ve ilerleme mantığı
└── README.md             # Dokümantasyon
💻 Kurulum ve Çalıştırma
Projeyi yerel ortamınızda çalıştırmak için ekstra bir paket kurulumuna (npm vb.) gerek yoktur.

Depoyu klonlayın:

Bash
git clone [https://github.com/AliSoftwareDev/quiz-app.git](https://github.com/AliSoftwareDev/quiz-app.git)
Proje dizinine gidin:

Bash
cd quiz-app
index.html dosyasını tarayıcınızda açın veya VS Code Live Server eklentisi ile çalıştırın.

💡 Algoritma Mantığı (Nasıl Çalışır?)
Uygulama, mevcut soru indeksini (currentQuiz) ve kullanıcının puanını (score) tutan basit bir durum mekanizması üzerine kuruludur:

Soru Yükleme (loadQuiz): Aktif indeks dizideki soruya karşılık gelir, soru metni ve şıklar DOM'a yazdırılır, önceki seçimler temizlenir.

Cevap Kontrolü (getSelected): Seçilen şık ile sorunun correct parametresi karşılaştırılır. Doğruysa score değişkeni artırılır.

İlerleme: currentQuiz bir artırılır. Dizi sonuna gelinmediyse sonraki soru yüklenir; dizi bittiyse ekrana sonuç paneli ve "Yeniden Başlat" butonu basılır.
