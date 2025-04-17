function kirimKeWhatsApp() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
    var alamat = document.getElementById("alamat").value;
    var gender = document.getElementById("gender").value;
    var lahir = document.getElementById("lahir").value;

    var pesan = `Halo! Ada data baru:\n\n` +
                `Nama: ${nama}\n` +
                `Email: ${email}\n` +
                `Telepon: ${telepon}\n` +
                `Alamat: ${alamat}\n` +
                `Jenis Kelamin: ${gender}\n` +
                `Tanggal Lahir: ${lahir}`;

    var nomorWA = "082372456892"; // ← Ganti dengan nomor kamu

    var url = `https://wa.me/${082372456892}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}
