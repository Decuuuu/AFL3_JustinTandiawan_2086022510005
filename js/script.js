// js/script.js

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // INTERAKSI HALAMAN 1: HOME PAGE
    // ==========================================
    const btnWorks = document.getElementById('btnWorks');
    
    // Jika tombol "View My Works" ditemukan (berarti sedang di Home Page)
    if (btnWorks) {
        btnWorks.addEventListener('click', function(event) {
            // Memunculkan alert interaksi sederhana sebelum diarahkan ke halaman project
            alert("Halo Justin! Mengarahkan ke halaman portofolio project kamu...");
        });
    }

    // ==========================================
    // INTERAKSI HALAMAN 2: CONTACT PAGE
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    // Jika form kontak ditemukan (berarti sedang di Contact Page)
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah reload halaman
            event.stopPropagation();

            if (!contactForm.checkValidity()) {
                // Jika form belum diisi dengan benar
                contactForm.classList.add('was-validated');
            } else {
                // Jika form valid, tampilkan Alert Bootstrap
                alertPlaceholder.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        <strong>Berhasil!</strong> Pesan Anda telah terkirim ke email Justin.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                
                // Reset form setelah berhasil
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }
        }, false);
    }

});