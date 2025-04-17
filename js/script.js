// Scroll aktif menu
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('text-yellow-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-yellow-400');
      }
    });
  });
  
  // Formulir pendaftaran
  const daftarNama = [];
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulir");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        let nama = document.getElementById("nama").value.trim();
        let email = document.getElementById("email").value.trim();
        let telepon = document.getElementById("telepon").value.trim();
        let password = document.getElementById("password").value.trim();
        let konfirmasi = document.getElementById("konfirmasi").value.trim();
        let hasilDiv = document.getElementById("hasil");
  
        if (!nama || !email || !telepon || !password || !konfirmasi) {
          alert("Semua field harus diisi!");
          return;
        }
  
        if (password.length < 9 || konfirmasi.length < 9) {
          alert("Password dan Konfirmasi Password minimal 9 karakter!");
          return;
        }
  
        if (password !== konfirmasi) {
          alert("Password dan Konfirmasi Password tidak cocok!");
          return;
        }
  
        if (daftarNama.includes(nama.toLowerCase())) {
          alert("Nama lengkap sudah pernah digunakan! Harap gunakan nama lain.");
          return;
        }
  
        daftarNama.push(nama.toLowerCase());
  
        let item = document.createElement("div");
        item.classList.add("bg-white", "rounded-xl", "shadow-xl", "text-gray-800", "w-full", "max-w-3xl", "mb-6", "p-6");
  
        item.innerHTML = `
          <h3 class="text-center text-xl font-bold text-[#920010] mb-4">Hasil Pendaftaran</h3>
          <div class="bg-green-100 p-4 rounded-md space-y-4">
            <div class="text-left space-y-2">
              <p><strong>Nama:</strong> ${nama}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>No. WhatsApp:</strong> ${telepon}</p>
              <p><strong>Password:</strong> ${"*".repeat(password.length)}</p>
            </div>
            <div class="self-end text-right">
              <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 delete-btn">Hapus</button>
            </div>
          </div>
        `;
  
        item.querySelector(".delete-btn").addEventListener("click", function () {
          item.remove();
          const index = daftarNama.indexOf(nama.toLowerCase());
          if (index > -1) {
            daftarNama.splice(index, 1);
          }
        });
  
        hasilDiv.appendChild(item);
        form.reset();
      });
    }
  });
  