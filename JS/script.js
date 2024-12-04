// file javascript

// Menghitung BMI
document
  .querySelector(".bg-green-yellow.color-black")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Buat nilai input
    const berat = parseFloat(
      document.getElementById("input-berat-badan").value
    );
    const tinggi = parseFloat(
      document.getElementById("input-tinggi-badan").value
    );
    const usia = parseInt(document.getElementById("input-usia").value);

    // Validasi supaya nilai input adalah angka valid
    if (
      isNaN(berat) ||
      isNaN(tinggi) ||
      isNaN(usia) ||
      tinggi <= 0 ||
      berat <= 0
    ) {
      alert("Masukkan data angka yang valid!");
      return;
    }

    // Konversi tinggi badan menjadi meter
    const meter = tinggi / 100;
    // Hitung proses BMI
    const bmi = berat / (meter * meter);

    // Kategori dari BMI
    let kategori = "";
    if (bmi < 18.5) {
      kategori = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal (ideal)";
    } else if (bmi >= 25.0 && bmi < 29.9) {
      kategori = "Kelebihan Berat Badan";
    } else {
      kategori = "Obesitas";
    }

    // Menampilkan hasil hitung BMI
    document.getElementById("result-calculation").textContent = bmi.toFixed(2);
    document.getElementById(
      "info-result"
    ).textContent = `Artinya: ${kategori}.`;
  });

// Fungsi tombol reset
document
  .querySelector(".bg-alice-blue")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("form").reset();
    document.getElementById("result-calculation").textContent = "0";
    document.getElementById("info-result").textContent =
      "Anda memiliki berat badan";
  });
