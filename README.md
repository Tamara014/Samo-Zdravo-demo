# SAMO ZDRAVO - Websajt

Prirodni smoothie sokovi vrhunskog kvaliteta, bez veštačkih aditiva.

## 📋 Sadržaj

- [Početna stranica](index.html) - Predstavljanje proizvoda
- [O Nama](about.html) - Priča o brendu i osnivaču
- [Nutritivni Program](nutritivni-program.html) - Individualni nutritivni programi
- [Nutri Facts](nutri-facts.html) - Edukativni sadržaj o zdravoj ishrani
- [FAQ](faq.html) - Često postavljena pitanja
- [Blog](blog.html) - Članci o zdravoj ishrani
- [Kontakt](contact.html) - Kontakt forma i informacije

## 🚀 Pokretanje projekta

### Preduslov

Za pokretanje projekta potreban vam je:
- Web server sa PHP podrškom (Apache, Nginx, ili bilo koji drugi)
- PHP 7.0 ili noviji
- Omogućena `mail()` funkcija u PHP-u za slanje emailova

### Instalacija

1. Klonirajte ili preuzmite projekat
2. Postavite fajlove na vaš web server (Apache/Nginx/shared hosting)
3. Proverite da li je PHP `mail()` funkcija omogućena na serveru

### Konfiguracija Email Forme

Email forma koristi FormSubmit.co servis za slanje poruka. Emailovi se šalju na adresu:
**infosamozdravo@gmail.com**

#### Ako želite da promenite email adresu:

1. Otvorite `send-email.php`
2. Pronađite liniju:
   ```php
   $to = 'infosamozdravo@gmail.com';
   ```
3. Zamenite email adresom po vašem izboru

#### Alternativni servis za slanje emailova

Ako vaš hosting ne podržava PHP `mail()` funkciju, možete koristiti eksterne servise:

**1. FormSpree**
- Besplatna opcija za slanje emailova
- Registrujte se na [formspree.io](https://formspree.io)
- Dodajte `action` atribut u formu u `contact.html`:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

**2. EmailJS**
- JavaScript biblioteka za slanje emailova
- Registrujte se na [emailjs.com](https://www.emailjs.com)
- Pratite njihovu dokumentaciju za integraciju

**3. Netlify Forms** (ako hostujete na Netlify)
- Dodajte `netlify` atribut u formu:
  ```html
  <form name="contact" method="POST" data-netlify="true">
  ```

## 📁 Struktura projekta

```
Samo-Zdravo-demo/
│
├── index.html              # Početna stranica
├── about.html              # O nama stranica
├── contact.html            # Kontakt stranica
├── nutritivni-program.html # Nutritivni program
├── nutri-facts.html        # Nutri Facts edukativni sadržaj
├── faq.html                # FAQ stranica
├── blog.html               # Blog stranica
│
├── styles.css              # Glavni CSS fajl
├── contact-split.css       # CSS za kontakt stranicu
├── script.js               # Glavni JavaScript
├── contact.js              # JavaScript za kontakt formu
├── send-email.php          # PHP backend za slanje emailova
│
└── assets/
    ├── images/             # Slike (logotipi, proizvodi, itd.)
    └── videos/             # Video animacije proizvoda
```

## 🎨 Boje proizvoda

Svaki proizvod ima svoju jedinstvenu boju:

- **Imuno**: `#4C1313`
- **Focus**: `#C9AC43`
- **Malina Med**: `#91202F`
- **Relax**: `#DDA30D`
- **Borovnica**: `#674C68`
- **Jabuka**: `#9F9F6A`
- **Malina**: `#91202F`

## 📱 Responsive Design

Websajt je optimizovan za:
- Mobilne uređaje (< 768px)
- Tablete (768px - 1024px)
- Desktop računare (> 1024px)

Specijalne karakteristike:
- Video animacije na desktopu (rotacija proizvoda)
- Statične slike + horizontalni video na mobilnim uređajima
- Hamburger meni za mobilne uređaje
- Full-width hero slika koja se prilagođava ekranu

## 🛠️ Tehnologije

- **HTML5** - Semantički markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript (Vanilla)** - Bez eksternih biblioteka
- **PHP** - Backend za slanje emailova
- **MP4 Video** - Animacije proizvoda

## 📧 Kontakt Email Konfiguracija

### Gmail SMTP (Preporučeno za produkciju)

Ako želite da koristite Gmail SMTP umesto obične `mail()` funkcije:

1. Instalirajte PHPMailer:
   ```bash
   composer require phpmailer/phpmailer
   ```

2. Zamenite sadržaj `send-email.php` sa:
   ```php
   <?php
   use PHPMailer\PHPMailer\PHPMailer;
   require 'vendor/autoload.php';

   $mail = new PHPMailer(true);
   $mail->isSMTP();
   $mail->Host = 'smtp.gmail.com';
   $mail->SMTPAuth = true;
   $mail->Username = 'infosamozdravo@gmail.com';
   $mail->Password = 'your-app-password'; // Koristite App Password
   $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
   $mail->Port = 587;
   ?>
   ```

**Napomena**: Za Gmail, morate kreirati "App Password" u Gmail Security settings.

## 🔒 Bezbednost

- Email validacija na frontendu i backendu
- Sanitizacija svih korisničkih unosa
- CSRF zaštita (preporučeno dodati u produkciji)
- Rate limiting za sprečavanje spam-a (preporučeno dodati)

## 📄 Licenca

© 2025 SAMO ZDRAVO. Sva prava zadržana.

## 👨‍💼 O Osniva programu

**Mladen Dakić**  
Specijalizovani strukovni nutricionista-dijetetičar  
Email: infosamozdravo@gmail.com

---

**Napomena za Development**: 
Za testiranje email funkcionalnosti lokalno, možete koristiti alate kao što su:
- [MailHog](https://github.com/mailhog/MailHog) - Za lokalno testiranje emailova
- [Mailtrap](https://mailtrap.io) - Za testiranje u development okruženju
