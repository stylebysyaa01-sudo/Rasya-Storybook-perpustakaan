
const stories = [
  {
    id: 1,
    title: "Surat untuk Hari Esok",
    category: "Inspirasi",
    summary: "Sebuah surat kecil membawa Arga menemukan semangat baru.",
    body: `PAGI ITU

Pagi itu, matahari mulai menyinari jendela kamar milik Arga. Ia membuka matanya dengan perasaan yang sedikit berbeda.

Di atas meja belajarnya, terdapat sebuah amplop putih yang sebelumnya tidak pernah ia lihat.

Dengan penasaran, Arga mengambil amplop tersebut. Pada bagian depannya tertulis sebuah kalimat sederhana.

"Untuk diriku di hari esok."

Arga membuka surat itu perlahan.

Di dalamnya terdapat pesan untuk tidak mudah menyerah dan terus berusaha.

Arga tersenyum. Ia menyadari bahwa masa depan dimulai dari langkah kecil yang dilakukan hari ini.

TAMAT.`
  },
  {
    id: 2,
    title: "Teman di Bangku Belakang",
    category: "Persahabatan",
    summary: "Persahabatan dimulai dari sebuah percakapan sederhana.",
    body: `Hari pertama sekolah membuat Raka merasa canggung.

Ia duduk di bangku depan. Sementara itu, seorang siswa bernama Dimas duduk sendirian di belakang.

Ketika jam istirahat tiba, Raka menghampiri Dimas dan mengajaknya berbicara.

Awalnya mereka merasa malu. Namun, setelah beberapa saat, mereka mulai bercerita tentang hobi dan pelajaran kesukaan.

Sejak hari itu, mereka sering belajar bersama.

Raka belajar bahwa persahabatan tidak harus dimulai dengan sesuatu yang besar.

TAMAT.`
  },
  {
    id: 3,
    title: "Cahaya di Ujung Jalan",
    category: "Kehidupan",
    summary: "Rani belajar menemukan harapan dari hal sederhana.",
    body: `Sore itu Rani berjalan pulang melewati jalan kecil.

Hari yang melelahkan membuatnya ingin segera beristirahat.

Tiba-tiba hujan turun. Rani berteduh di sebuah warung kecil.

Ia melihat tetesan air hujan dan cahaya matahari yang muncul dari balik awan.

Pemandangan itu membuatnya merasa lebih tenang.

Rani kemudian menyadari bahwa setiap hari selalu membawa kesempatan baru.

Ia pulang dengan semangat untuk mencoba lagi esok hari.

TAMAT.`
  },
  {
    id: 4,
    title: "Perpustakaan Saat Hujan",
    category: "Petualangan",
    summary: "Sebuah buku tua membawa Arga menemukan kejutan.",
    body: `Saat hujan turun deras, Arga masuk ke perpustakaan sekolah.

Ia berjalan menuju rak paling pojok dan menemukan sebuah buku tua.

Buku itu berisi cerita tentang taman kota yang ternyata berada dekat rumahnya.

Keesokan harinya, Arga mengunjungi taman tersebut bersama kakaknya.

Mereka menemukan banyak tanaman indah dan papan pesan tentang menjaga lingkungan.

Arga senang karena menemukan pengalaman baru dari sebuah buku.

TAMAT.`
  },
  {
    id: 5,
    title: "Pohon Mangga di Halaman",
    category: "Keluarga",
    summary: "Sebuah pohon mengajarkan arti kesabaran.",
    body: `Di halaman rumah Sinta tumbuh sebuah pohon mangga.

Pohon itu ditanam oleh kakeknya beberapa tahun lalu.

Setiap hari Sinta menyiramnya dan membersihkan rumput di sekitarnya.

Kakek berkata bahwa tanaman membutuhkan waktu untuk tumbuh.

Beberapa bulan kemudian, bunga kecil mulai bermunculan.

Sinta sangat bahagia melihat hasil dari kesabarannya.

Ia belajar bahwa sesuatu yang baik membutuhkan perhatian dan usaha.

TAMAT.`
  }
];

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("bookContainer");
  const search = document.getElementById("searchInput");
  const reader = document.getElementById("reader");
  const readerTitle = document.getElementById("readerTitle");
  const readerCategory = document.getElementById("readerCategory");
  const readerBody = document.getElementById("readerBody");
  const closeButton = document.getElementById("closeReader");
  const emptyMessage = document.getElementById("emptyMessage");

  if (!container || !reader || !readerTitle ||
      !readerCategory || !readerBody || !closeButton) {
    console.error("Ada ID HTML yang belum cocok.");
    return;
  }

  function displayStories(list) {
    container.innerHTML = "";

    if (emptyMessage) {
      emptyMessage.hidden = list.length > 0;
    }

    list.forEach(function (story) {
      const card = document.createElement("div");
      card.className = "book-card";

      const cover = document.createElement("div");
      cover.className = "cover cover-" + story.id;
      cover.textContent = story.title;

      const info = document.createElement("div");
      info.className = "book-info";

      const category = document.createElement("span");
      category.className = "category";
      category.textContent = story.category;

      const title = document.createElement("h3");
      title.textContent = story.title;

      const summary = document.createElement("p");
      summary.textContent = story.summary;

      const button = document.createElement("button");
      button.className = "read-button";
      button.textContent = "Baca Cerita →";
      button.type = "button";

      button.addEventListener("click", function () {
        readerTitle.textContent = story.title;
        readerCategory.textContent = story.category;
        readerBody.textContent = story.body;

        reader.hidden = false;

        reader.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });

      info.appendChild(category);
      info.appendChild(title);
      info.appendChild(summary);
      info.appendChild(button);

      card.appendChild(cover);
      card.appendChild(info);

      container.appendChild(card);
    });
  }

  search.addEventListener("input", function () {
    const keyword = search.value.toLowerCase().trim();

    const filteredStories = stories.filter(function (story) {
      return (
        story.title.toLowerCase().includes(keyword) ||
        story.category.toLowerCase().includes(keyword) ||
        story.summary.toLowerCase().includes(keyword)
      );
    });

    displayStories(filteredStories);
  });

  closeButton.addEventListener("click", function () {
    reader.hidden = true;

    document.getElementById("koleksi").scrollIntoView({
      behavior: "smooth"
    });
  });

  document.getElementById("year").textContent =
    new Date().getFullYear();

  displayStories(stories);
});
