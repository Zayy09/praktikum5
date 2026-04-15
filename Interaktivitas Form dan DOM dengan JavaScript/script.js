// ambil elemen
const form = document.getElementById("formPendaftaran");
const hasil = document.getElementById("hasilPendaftaran");
const nama = document.getElementById("nama");
const popup = document.getElementById("popup");

nama.addEventListener("input", function() {
    if (this.value.length < 3) {
        this.style.border = "2px solid red";
    } else {
        this.style.border = "2px solid green";
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const nohp = document.getElementById("nohp").value;
    const kategori = document.getElementById("kategori").value;

    if (nama.value.length < 3) {
        hasil.innerHTML = "<p style='color:red;'>Nama minimal 3 karakter</p>";
        return;
    }

    if (!email.includes("@")) {
        hasil.innerHTML = "<p style='color:red;'>Email tidak valid</p>";
        return;
    }

    if (nohp.length < 10) {
        hasil.innerHTML = "<p style='color:red;'>No HP minimal 10 digit</p>";
        return;
    }

    if (kategori === "-- Pilih --") {
        hasil.innerHTML = "<p style='color:red;'>Pilih kategori dulu</p>";
        return;
    }

    hasil.innerHTML = `
        <p style="color:green;">Berhasil dikirim!</p>
        <p>${nama.value} - ${email} - ${nohp}</p>
    `;

    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, 3000);

    form.reset();
});