// Pusat data topik panjang-ekor untuk Panduan Ngarai Sianok.
// Semua isi disusun berdasarkan catatan verifikasi 19 Oktober 2026 (lihat research-notes.md)
// dan prinsip E-E-A-T: tidak ada ulasan, harga, jam, atau jarak yang dibuat-buat.
// Angka operasional yang belum diverifikasi selalu ditandai "konfirmasikan".

export type TopicGroup = 'objek' | 'kunjungan' | 'sekitar' | 'kuliner' | 'rintis';

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  kicker: string;
  h1: string;
  lead: string;
  updated: string;
  facts?: { label: string; value: string }[];
  sections: TopicSection[];
  faqs: TopicFaq[];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  ready: boolean;
  title: string;
  description: string;
  content: TopicContent;
  related: string[];
}

export const TOPIC_GROUP_LABELS: Record<TopicGroup, string> = {
  objek: 'Bentang & Pengetahuan',
  kunjungan: 'Rencana Kunjungan',
  sekitar: 'Destinasi Sekitar',
  kuliner: 'Kuliner & Kopi',
  rintis: 'Rute & Itinerari',
};

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['objek', 'kunjungan', 'sekitar', 'kuliner', 'rintis'];

// Tanggal tinjauan seluruh topik baru.
const UPDATED = '28 Oktober 2026';

// Nilai terverifikasi yang dipakai berulang (sumber: Maps 19 Okt 2026 + Dinas Pariwisata Bukittinggi).
const RATING = '4,6 / 5 dari sekitar 4.980 ulasan Google Maps (Oktober 2026)';
const TAMAN_PANORAMA = 'Taman Jl. Panorama, Kayu Kubu, Kec. Guguk Panjang, Kota Bukittinggi, Sumatera Barat 26136';

export const TOPICS: Topic[] = [
  // ===================== A. OBJEK & PENGETAHUAN =====================
  {
    slug: 'perbedaan-panorama-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Perbedaan Panorama Ngarai Sianok, Taman Panorama & Lubang Japang',
    description: 'Jelaskan nama yang sering tertukar: Panorama Ngarai Sianok, Ngarai Sianok, Taman Panorama, dan Lubang Japang adalah ruang kunjungan berbeda dengan pintu, jam, dan tiket yang tidak sama.',
    content: {
      kicker: 'Klarifikasi nama',
      h1: 'Panorama, Taman, dan Lubang Japang bukan hal yang sama',
      lead: 'Di sekitar lembah ini ada beberapa nama yang sering tertukar. Memahami batasnya membantu Anda merencanakan waktu, pintu masuk, dan anggaran dengan benar.',
      updated: UPDATED,
      facts: [
        { label: 'Ngarai Sianok', value: 'Lembah geologi yang luas, bukan satu tiket masuk' },
        { label: 'Taman Panorama', value: 'Titik pandang dengan jam & tarif sendiri' },
        { label: 'Lubang Japang', value: 'Terowongan Perang Dunia II, akses terpisah' },
      ],
      sections: [
        {
          heading: 'Ngarai Sianok adalah bentang alam, bukan gerbang tiket',
          paragraphs: [
            'Ngarai Sianok adalah lembah hijau bertembok tebing curam yang membelah lanskap di sisi Bukittinggi. Ia adalah fitur geologi yang membentang luas, bukan satu objek berpagar dengan loket tunggal. Menyebut "masuk ke Ngarai Sianok" bisa menyesatkan karena tidak ada satu pintu yang mencakup seluruh lembah.',
            'Kunjungan ke lembah biasanya dilakukan dari titik pandang resmi atau dari jalur desa di sekitarnya. Masing-masing punya pengelola, akses, dan aturan yang berbeda.',
          ],
        },
        {
          heading: 'Taman Panorama adalah titik pandang',
          paragraphs: [
            'Taman Panorama (sering juga disebut Panorama Ngarai Sianok atau Sianok Valley Panoramic di peta) adalah area pandang yang dibangun di tepi ngarai, di Jalan Panorama, Kayu Kubu. Dari sini Anda melihat lembah, sungai, dan sawah di bawah tebing.',
            'Jam dan tarif yang tercantum untuk "Taman Panorama" berlaku untuk titik pandang ini, bukan untuk seluruh lembah atau terowongan di dekatnya.',
          ],
        },
        {
          heading: 'Lubang Japang butuh verifikasi terpisah',
          paragraphs: [
            'Lubang Japang adalah terowongan peninggalan Perang Dunia II yang sering digabung dalam satu entri dengan Taman Panorama oleh Dinas Pariwisata. Namun pintu masuk, pembukaan, dan kebutuhan pendamping tidak otomatis sama dengan taman terbuka.',
            'Tanyakan kepada petugas apakah kunjungan terowongan tersedia pada hari kedatangan Anda, dan jangan menganggap tiket taman otomatis mencakup terowongan.',
          ],
          callout: 'Aturan praktis: perlakukan Taman Panorama, Lubang Japang, dan lembah secara umum sebagai tiga rencana akses berbeda. Jangan menyamakan jam, tiket, atau fasilitasnya.',
        },
      ],
      faqs: [
        { q: 'Nama apa yang paling tepat dicari di Google Maps?', a: 'Gunakan "Taman Panorama", "Panorama Ngarai Sianok", atau "Sianok Valley Panoramic". Ketiganya menunjuk ke titik pandang di Jalan Panorama, Kayu Kubu, Bukittinggi.' },
        { q: 'Apakah tiket Taman Panorama berlaku untuk seluruh Ngarai Sianok?', a: 'Tidak. Tarif yang tercantum untuk Taman Panorama & Lubang Japang berlaku untuk ruang kunjungan tersebut; cakupan pasti, batas usia, dan biaya tambahan tidak dijelaskan, jadi konfirmasikan di loket.' },
        { q: 'Bisakah saya langsung masuk ke Lubang Japang dari Taman Panorama?', a: 'Belum tentu. Lokasi, pembukaan, dan ketentuan masuk terowongan perlu dikonfirmasi terpisah; berada di kawasan taman tidak menjamin akses ke terowongan.' },
      ],
    },
    related: ['tiket-taman-panorama', 'jam-buka-taman-panorama', 'lubang-japang', 'sejarah-ngarai-sianok'],
  },
  {
    slug: 'sejarah-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Sejarah & Latar Geografis Ngarai Sianok',
    description: 'Latar belakang Ngarai Sianok: lembah yang terbentuk oleh proses geologi dan erosi sungai, serta perannya dalam lanskap Bukittinggi dan sejarah Minangkabau.',
    content: {
      kicker: 'Latar belakang',
      h1: 'Sejarah dan geografi Ngarai Sianok',
      lead: 'Ngarai Sianok bukan buatan tangan, melainkan hasil proses geologi ribuan tahun yang menjadi bagian dari memori dan kehidupan masyarakat di Bukittinggi.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Lembah di tepi kota',
          paragraphs: [
            'Ngarai Sianok membelah lanskap di sisi Bukittinggi, memisahkan bagian kota dengan dataran di sekitarnya. Tebing curamnya menjadi batas alami yang sejak lama memengaruhi cara orang bergerak, bertani, dan membangun permukiman di kawasan ini.',
            'Bagi pengunjung, nilai utamanya adalah pandangan: tebing hijau, alur sungai di dasar lembah, dan sawah yang mengisi ruang di antara bukit.',
          ],
        },
        {
          heading: 'Antara geologi dan cerita tutur',
          paragraphs: [
            'Pusat Survei Geologi dalam laporan 8 Oktober 2025 mencatat Ngarai Sianok–Maninjau sebagai salah satu Geopark Nasional yang dievaluasi. Status geopark menekankan konservasi warisan geologi dan edukasi, bukan sekadar pemandangan.',
            'Tradisi Minangkabau kaya akan kaba dan kisah tutur, tetapi panduan ini tidak mengubah cerita lisan yang belum terverifikasi menjadi fakta sejarah. Nikmati kisah lokal sebagai warisan tutur dan perhatikan siapa penutur serta konteksnya.',
          ],
          callout: 'Sumber resmi yang kami telusuri tidak menetapkan satu legenda tertentu sebagai penjelasan asal-usul ngarai. Kami tidak mencantumkan nama tokoh atau tahun mitologis sebagai fakta.',
        },
      ],
      faqs: [
        { q: 'Apakah Ngarai Sianok punya satu kisah asal-usul resmi?', a: 'Tidak ada satu versi resmi yang didukung sumber pemerintah. Cerita tutur Minangkabau ada, tetapi panduan ini tidak menetapkannya sebagai fakta sejarah.' },
        { q: 'Hubungannya dengan Geopark Nasional apa?', a: 'Ngarai Sianok–Maninjau masuk dalam evaluasi Geopark Nasional menurut laporan Pusat Survei Geologi 8 Oktober 2025.' },
        { q: 'Apakah lembah ini masih dipakai warga?', a: 'Ya. Lembah menyatu dengan sistem hidup: vegetasi, aliran air, lahan pertanian, satwa, dan aktivitas masyarakat berada dalam lanskap yang sama.' },
      ],
    },
    related: ['geologi-ngarai-sianok', 'geopark-ngarai-sianok-maninjau', 'perbedaan-panorama-ngarai-sianok'],
  },
  {
    slug: 'geologi-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Proses Geologi Pembentukan Ngarai Sianok',
    description: 'Penjelasan umum bagaimana lembah Ngarai Sianok dan formasi geologi di sekitar Bukittinggi–Maninjau terbentuk, berdasarkan sumber geologi pemerintah.',
    content: {
      kicker: 'Warisan geologi',
      h1: 'Bagaimana Ngarai Sianok terbentuk',
      lead: 'Lembah ini adalah hasil proses geologi jangka panjang. Memahami bentuknya membantu menghargai mengapa tebingnya curam dan mengapa konservasi penting.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Bukan penjelasan lengkap, tetapi kerangka dasar',
          paragraphs: [
            'Pusat Survei Geologi mencatat Ngarai Sianok–Maninjau sebagai geopark nasional yang dievaluasi pada 2025. Status ini menempatkan bentang alam ini dalam kerangka warisan geologi yang perlu dilestarikan, dipelajari, dan dikelola secara berkelanjutan.',
            'Materi pariwisata nasional mengaitkan bentang di Bukittinggi dengan aktivitas gunung api purba Maninjau. Itu adalah ringkasan orientasi, bukan penjelasan lengkap mekanisme geologi atau prakiraan bahaya.',
          ],
          callout: 'Panduan ini tidak memuat angka kedalaman, umur batuan, atau mekanisme erosi spesifik yang tidak didukung sumber resmi. Untuk detail teknis, rujuk publikasi Pusat Survei Geologi.',
        },
        {
          heading: 'Mengapa tebingnya curam',
          paragraphs: [
            'Secara umum, lembah seperti ini terbentuk melalui kombinasi aktivitas tektonik dan erosi air secara bertahap. Hasilnya adalah dinding tebing yang relatif curam dan dasar lembah yang sempit.',
            'Bagi pengunjung, makna praktisnya adalah: pagar dan jalur resmi ada untuk melindungi baik pengunjung maupun lereng. Jangan mencari sudut foto di luar area yang diizinkan.',
          ],
        },
      ],
      faqs: [
        { q: 'Berapa umur Ngarai Sianok?', a: 'Panduan ini tidak mencantumkan angka umur karena tidak didukung sumber resmi yang kami telusuri. Rujuk publikasi geologi pemerintah untuk data teknis.' },
        { q: 'Apakah masih ada aktivitas geologi aktif?', a: 'Lembah adalah sistem alam yang dinamis. Informasi kebencanaan dan penutupan sementara harus diperlakukan sebagai bagian wisata yang bertanggung jawab, bukan sekadar pembatas.' },
        { q: 'Di mana membaca sumber resmi?', a: 'Pusat Survei Geologi (psg.geologi.esdm.go.id) merilis evaluasi Geopark Nasional 2025 yang mencantumkan Ngarai Sianok–Maninjau.' },
      ],
    },
    related: ['sejarah-ngarai-sianok', 'geopark-ngarai-sianok-maninjau', 'keamanan-ngarai-sianok'],
  },
  {
    slug: 'geopark-ngarai-sianok-maninjau',
    group: 'objek',
    ready: true,
    title: 'Apa itu Geopark Ngarai Sianok–Maninjau',
    description: 'Pengantar status geopark nasional Ngarai Sianok–Maninjau: arti bagi konservasi, edukasi, dan cara melihat kunjungan secara bertanggung jawab.',
    content: {
      kicker: 'Geopark nasional',
      h1: 'Geopark Ngarai Sianok–Maninjau',
      lead: 'Status geopark menempatkan lembah ini sebagai warisan geologi bernilai edukasi dan konservasi, bukan sekadar tempat swafoto.',
      updated: UPDATED,
      facts: [
        { label: 'Status', value: 'Tercantum dalam evaluasi Geopark Nasional 2025' },
        { label: 'Sumber', value: 'Pusat Survei Geologi, 8 Oktober 2025' },
        { label: 'Fokus', value: 'Konservasi, edukasi, pengelolaan berkelanjutan' },
      ],
      sections: [
        {
          heading: 'Apa arti status geopark',
          paragraphs: [
            'Geopark adalah kawasan dengan warisan geologi yang dikelola untuk konservasi, edukasi, dan pembangunan berkelanjutan. Ngarai Sianok–Maninjau masuk dalam evaluasi Geopark Nasional menurut laporan Pusat Survei Geologi 8 Oktober 2025.',
            'Bagi pengunjung, ini mengubah cara melihat kunjungan: bukan hanya memotret pemandangan, tetapi juga memahami nilai ilmiah dan pentingnya menjaga kelestarian.',
          ],
        },
        {
          heading: 'Cara berkunjung yang selaras',
          paragraphs: [
            'Ikuti jalur resmi, jaga jarak dari tebing, dan dukung praktik pariwisata yang tidak merusak lanskap. Edukasi di lapangan—plang, pemandu, atau penjelasan petugas—memperkuat pemahaman Anda tentang bentang ini.',
          ],
        },
      ],
      faqs: [
        { q: 'Apakah geopark berarti tiket berbeda?', a: 'Tidak otomatis. Status geopark adalah pengakuan keilmuan dan pengelolaan; tiket dan akses tetap mengikuti aturan Taman Panorama atau pengelola setempat yang harus dikonfirmasi.' },
        { q: 'Di mana membaca sumber resmi?', a: 'Pusat Survei Geologi merilis evaluasi Geopark Nasional 2025 yang mencantumkan Ngarai Sianok–Maninjau.' },
      ],
    },
    related: ['geologi-ngarai-sianok', 'sejarah-ngarai-sianok', 'keamanan-ngarai-sianok'],
  },
  {
    slug: 'waktu-terbaik-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Waktu Terbaik Mengunjungi Panorama Ngarai Sianok',
    description: 'Kapan hari dan musim terbaik melihat Ngarai Sianok: cahaya pagi, kabut, dan tips menghindari kerumunan serta panas.',
    content: {
      kicker: 'Waktu kunjungan',
      h1: 'Kapan waktu terbaik ke Ngarai Sianok',
      lead: 'Titik pandang ini nyaman dikunjungi sepanjang tahun, tetapi waktu datang memengaruhi cahaya, kabut, dan keramaian.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Pagi hari biasanya lebih nyaman',
          paragraphs: [
            'Sekitar awal jam operasional Taman Panorama biasanya lebih nyaman untuk suhu, cahaya yang lembut, dan ruang bila kabut datang. Cahaya pagi juga sering memberi kontras tebing yang bagus untuk foto.',
            'Siang hari bisa panas dan lebih ramai pada akhir pekan dan hari libur. Sore hari memberikan cahaya hangat, tetapi kabut bisa turun dan menutup pandangan.',
          ],
        },
        {
          heading: 'Musim dan cuaca',
          paragraphs: [
            'Bukittinggi beriklim sejuk pegunungan. Musim hujan membawa kabut lebih sering dan permukaan bisa licin; musim kemarau cenderung lebih cerah tetapi tetap bisa berawan.',
            'Pantau prakiraan cuaca hari kedatangan. Jika kabut tebal, nikmati suasananya sebagai bagian dari pengalaman rather than menunggu pandangan terbuka.',
          ],
          callout: 'Saran waktu 45–90 menit untuk taman dan titik pandang adalah perkiraan perencanaan, bukan jam buka resmi atau durasi kunjungan terowongan.',
        },
      ],
      faqs: [
        { q: 'Jam berapa pemandangan paling jernih?', a: 'Tidak ada jaminan, tetapi pagi sering memberi visibilitas lebih baik sebelum kabut siang turun. Konfirmasikan dengan kondisi hari itu.' },
        { q: 'Apakah malam bisa melihat ngarai?', a: 'Titik pandang tidak dirancang untuk kunjungan malam; jam operasional mengikuti ketentuan Taman Panorama yang perlu dikonfirmasi. Jangan mendekati tebing saat gelap.' },
      ],
    },
    related: ['wisata-kabut-ngarai-sianok', 'jam-buka-taman-panorama', 'ngarai-sianok-saat-hujan', 'durasi-kunjungan-ngarai-sianok'],
  },
  {
    slug: 'wisata-kabut-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Kabut & Cuaca Ngarai Sianok: Tips Berkunjung',
    description: 'Karakteristik kabut dan cuaca di Ngarai Sianok, serta cara menikmati kunjungan saat berkabut tanpa mengambil risiko.',
    content: {
      kicker: 'Cuaca & kabut',
      h1: 'Kabut dan cuaca di Ngarai Sianok',
      lead: 'Kabut adalah bagian wajar dari lanskap pegunungan ini. Memahaminya membuat kunjungan lebih aman dan justru lebih berkesan.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Mengapa sering berkabut',
          paragraphs: [
            'Bukittinggi berada di dataran tinggi yang lembap. Udara dingin dan lembap sering membentuk kabut, terutama saat pagi dan sore, yang bisa menutupi dasar lembah.',
            'Bagi banyak pengunjung, kabut justru memberi suasana mistis dan tenang. Bagi yang ingin foto lembah terbuka, datanglah lebih awal dan bersabar.',
          ],
        },
        {
          heading: 'Keamanan saat kabut dan hujan',
          paragraphs: [
            'Saat kabut tebal atau hujan, permukaan bisa licin dan visibilitas menurun. Jauhi tepian tebing, ikuti pembatas serta arahan petugas.',
            'Tunda aktivitas turun ke lembah bila kondisi tidak mendukung. Ruang pandang yang aman lebih penting daripada sudut foto.',
          ],
          callout: 'Jangan menganggap kabut sebagai gangguan saja—ia adalah bagian dari ekosistem ngarai. Nikmati dari area aman.',
        },
      ],
      faqs: [
        { q: 'Apakah kabut berbahaya?', a: 'Kabut sendiri tidak berbahaya, tetapi menurunkan visibilitas dan membuat permukaan licin. Tetap di jalur resmi dan jauhi tebing.' },
        { q: 'Bulan apa paling sering cerah?', a: 'Panduan ini tidak mencantumkan pola bulanan pasti. Pantau prakiraan cuaca hari kedatangan dan datang pagi untuk peluang terbaik.' },
      ],
    },
    related: ['waktu-terbaik-ngarai-sianok', 'ngarai-sianok-saat-hujan', 'keamanan-ngarai-sianok'],
  },
  {
    slug: 'spot-foto-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Spot Foto Terbaik di Panorama Ngarai Sianok',
    description: 'Di mana mengambil foto Ngarai Sianok: sudut dari Taman Panorama, menara pandang, dan etika memotret di tepi tebing.',
    content: {
      kicker: 'Fotografi',
      h1: 'Spot foto Ngarai Sianok',
      lead: 'Titik pandang utama di Taman Panorama memberi beberapa sudut foto yang kuat tanpa perlu mendekati tebing.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Dari area pandang utama',
          paragraphs: [
            'Area Taman Panorama memiliki gardu atau titik pandang yang menghadap lembah. Dari sini Anda mendapatkan tebing, alur sungai, dan sawah dalam satu bingkai.',
            'Waktu terbaik untuk cahaya adalah pagi (cahaya lembut dari timur) dan sore (cahaya hangat). Hindari berdiri di luar pagar untuk mendapatkan sudut; keselamatan lebih utama.',
          ],
        },
        {
          heading: 'Etika memotret',
          paragraphs: [
            'Jangan meminta orang lain—apalagi satwa—dipinggir tebing demi foto. Jaga jarak dari tepi, hormati pengunjung lain, dan jangan merusak vegetasi atau plang.',
            'Jika menggunakan drone, periksa aturan setempat karena area wisata sering memiliki batasan terbang yang harus dipatuhi.',
          ],
        },
      ],
      faqs: [
        { q: 'Apakah boleh pakai drone?', a: 'Periksa aturan pengelola dan regulasi penerbangan setempat sebelum terbang. Panduan ini tidak memverifikasi izin drone untuk area ini.' },
        { q: 'Di mana spot paling ikonik?', a: 'Titik pandang utama Taman Panorama adalah sudut paling umum. Jangan mencari sudut di area tertutup atau tanpa pengaman.' },
      ],
    },
    related: ['panduan-foto-ngarai-sianok', 'waktu-terbaik-ngarai-sianok', 'rute-foto-pagi-ngarai-sianok'],
  },
  {
    slug: 'panduan-foto-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Panduan Fotografi Ngarai Sianok',
    description: 'Tips foto lanskap di Ngarai Sianok: persiapan, waktu, komposisi, dan cara memotret saat kabut atau cahaya sulit.',
    content: {
      kicker: 'Panduan foto',
      h1: 'Panduan memotret Ngarai Sianok',
      lead: 'Lanskap lebar seperti ngarai menantang kamera telepon maupun kamera biasa. Beberapa persiapan meningkatkan hasil.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Persiapan',
          paragraphs: [
            'Bawa air minum, jas hujan lipat, dan alas kaki yang nyaman. Waktu di area pandang bisa lebih lama dari rencana bila Anda menunggu cahaya.',
            'Gunakan mode HDR atau bracketing jika kamera mendukung, karena kontras antara langit terang dan lembah yang teduh bisa tinggi.',
          ],
        },
        {
          heading: 'Komposisi dan cahaya',
          paragraphs: [
            'Coba bingkai tebing sebagai garis diagonal yang membelah foto, dan biarkan sawah atau sungai memberi titik fokus di dasar lembah.',
            'Saat kabut, jangan buang foto: kabut bisa memberi kedalaman dan suasana. Naikkan sedikit ISO bila cahaya redup, dan pegang kamera stabil.',
          ],
          callout: 'Jangan mengorbankan keselamatan demi framing. Semua foto terbaik diambil dari area pandang yang diizinkan.',
        },
      ],
      faqs: [
        { q: 'Kamera apa yang cukup?', a: 'Telepon pintar modern sudah cukup untuk dokumentasi. Untuk lanskap lebar, mode panorama atau lensa sudut lebar membantu.' },
        { q: 'Bagaimana memotret kabut tebal?', a: 'Naikkan ISO seperlunya, pegang stabil, dan biarkan kabut menjadi elemen foto而不是 menunggu langit cerah.' },
      ],
    },
    related: ['spot-foto-ngarai-sianok', 'rute-foto-pagi-ngarai-sianok', 'wisata-kabut-ngarai-sianok'],
  },
  {
    slug: 'keamanan-ngarai-sianok',
    group: 'objek',
    ready: true,
    title: 'Keselamatan & Etika Berkunjung di Ngarai Sianok',
    description: 'Aturan aman di tepi tebing, saat hujan, berinteraksi dengan satwa, dan menjaga kelestarian Ngarai Sianok.',
    content: {
      kicker: 'Keselamatan & etika',
      h1: 'Hormati ngarai sebagai lanskap hidup',
      lead: 'Ngarai bukan panggung kosong. Menjaga keselamatan dan kelestarian membuat kunjungan aman bagi Anda dan generasi berikutnya.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Tepi tebing',
          paragraphs: [
            'Tetap di balik pagar dan jalur resmi. Jangan mencari sudut foto di area yang ditutup atau tidak memiliki pengaman.',
            'Anak-anak harus diawasi di dekat tepian. Jangan meletakkan tas atau barang di tepi yang bisa jatuh ke lembah.',
          ],
        },
        {
          heading: 'Hujan, kabut, dan satwa',
          paragraphs: [
            'Saat hujan lebat, jauhi tepian tebing, ikuti pembatas serta arahan petugas, dan tunda aktivitas turun ke lembah bila kondisi tidak mendukung.',
            'Kera dapat dijumpai di kawasan. Simpan makanan dan barang kecil di dalam tas, jangan memberi makan satwa, dan jaga jarak agar perilaku liar tetap alami.',
          ],
        },
        {
          heading: 'Sampah dan suara',
          paragraphs: [
            'Bawa botol pakai ulang, buang sampah pada tempatnya, dan jaga volume suara agar ruang publik tetap nyaman bagi semua pengunjung.',
          ],
          callout: 'Pagar, jalur resmi, dan arahan petugas adalah bagian dari pengalaman wisata yang bertanggung jawab—bukan sekadar pembatas.',
        },
      ],
      faqs: [
        { q: 'Apakah aman untuk anak?', a: 'Aman di area pandang yang diizinkan asal diawasi. Jangan biarkan anak mendekati tebing tanpa pengawasan.' },
        { q: 'Boleh memberi makan kera?', a: 'Tidak. Memberi makan mengubah perilaku satwa dan meningkatkan konflik. Simpan makanan di tas.' },
        { q: 'Apa yang harus dilakukan saat hujan deras?', a: 'Jauhi tepian, ikuti arahan petugas, dan tunda turun ke lembah bila kondisi tidak mendukung.' },
      ],
    },
    related: ['ngarai-sianok-anak', 'ngarai-sianok-saat-hujan', 'wisata-pengganti-hujan-bukittinggi'],
  },

  // ===================== B. RENCANA KUNJUNGAN =====================
  {
    slug: 'tiket-taman-panorama',
    group: 'kunjungan',
    ready: true,
    title: 'Tiket Masuk Taman Panorama & Lubang Japang',
    description: 'Tarif yang tercantum di halaman Dinas Pariwisata Bukittinggi untuk Taman Panorama & Lubang Japang, dengan penjelasan cakupan yang belum dijelaskan.',
    content: {
      kicker: 'Tiket & tarif',
      h1: 'Tiket Taman Panorama',
      lead: 'Halaman Dinas Pariwisata Kota Bukittinggi yang diperiksa 19 Oktober 2026 mencantumkan tarif untuk entri bertajuk Taman Panorama & Lubang Japang.',
      updated: UPDATED,
      facts: [
        { label: 'Dewasa', value: 'Rp20.000 (Dinas Pariwisata, 19 Okt 2026)' },
        { label: 'Anak', value: 'Rp15.000 (Dinas Pariwisata, 19 Okt 2026)' },
        { label: 'Mancanegara', value: 'Rp25.000 (Dinas Pariwisata, 19 Okt 2026)' },
      ],
      sections: [
        {
          heading: 'Angka dari sumber resmi, dengan catatan',
          paragraphs: [
            'Halaman Dinas Pariwisata berjudul "Taman Panorama & Lubang Japang", diperiksa 19 Oktober 2026, mencantumkan dewasa Rp20.000, anak Rp15.000, dan mancanegara Rp25.000.',
            'Cakupan tiket, batas usia, dan biaya tambahan tidak dijelaskan. Tanyakan di loket sebelum membayar dan jangan menganggap satu harga berlaku untuk taman, seluruh lembah, dan terowongan.',
          ],
          callout: 'Angka di atas berasal dari daftar Dinas Pariwisata pada tanggal pemeriksaan. Tarif dapat berubah; konfirmasikan melalui kanal resmi sebelum berangkat.',
        },
        {
          heading: 'Jangan menyamakan tiket berbeda ruang',
          paragraphs: [
            'Taman Panorama (titik pandang), Lubang Japang (terowongan), dan lembah secara umum adalah ruang kunjungan berbeda. Tiket yang tercantum tidak otomatis mencakup semuanya.',
            'Tanyakan kepada petugas mana yang termasuk dalam tiket Anda, dan apakah kunjungan terowongan tersedia pada hari itu.',
          ],
        },
      ],
      faqs: [
        { q: 'Berapa tiket masuknya sekarang?', a: 'Dinas Pariwisata mencantumkan Rp20.000 dewasa, Rp15.000 anak, Rp25.000 mancanegara (diperiksa 19 Okt 2026). Cakupan dan tambahan belum dijelaskan; konfirmasikan di loket.' },
        { q: 'Apakah tiket sudah termasuk Lubang Japang?', a: 'Entri digabung dalam satu judul di Dinas Pariwisata, tetapi cakupan pasti tidak dijelaskan. Tanyakan petugas apakah terowongan termasuk dan apakah sedang dibuka.' },
        { q: 'Apakah ada tiket untuk seluruh Ngarai Sianok?', a: 'Tidak ada satu tiket yang mencakup seluruh lembah. Tiket berlaku untuk ruang kunjungan tertentu yang harus dikonfirmasi.' },
      ],
    },
    related: ['jam-buka-taman-panorama', 'fasilitas-taman-panorama', 'perbedaan-panorama-ngarai-sianok', 'lubang-japang'],
  },
  {
    slug: 'jam-buka-taman-panorama',
    group: 'kunjungan',
    ready: true,
    title: 'Jam Buka Taman Panorama Ngarai Sianok',
    description: 'Perbedaan jam buka antara Google Maps dan Dinas Pariwisata untuk Taman Panorama, serta saran waktu terbaik berkunjung.',
    content: {
      kicker: 'Jam operasional',
      h1: 'Jam buka Taman Panorama',
      lead: 'Dua sumber memberikan jam berbeda untuk Taman Panorama. Ketahui perbedaannya sebelum berangkat.',
      updated: UPDATED,
      facts: [
        { label: 'Google Maps', value: 'Senin–Kamis & Sabtu–Minggu 09.30–17.30, Jumat tutup' },
        { label: 'Dinas Pariwisata', value: 'Setiap hari 08.00–17.00' },
        { label: 'Sumber', value: 'Diperiksa 19 Oktober 2026' },
      ],
      sections: [
        {
          heading: 'Dua sumber, dua jam',
          paragraphs: [
            'Google Maps (diperiksa 19 Oktober 2026) mencantumkan Taman Panorama buka Senin–Kamis dan Sabtu–Minggu pukul 09.30–17.30, Jumat tutup.',
            'Halaman Dinas Pariwisata mencantumkan setiap hari 08.00–17.00. Kedua sumber berbeda; konfirmasikan jam dan penutupan pada hari kunjungan Anda.',
          ],
          callout: 'Daftar ini untuk titik panorama, bukan seluruh ngarai atau jadwal terowongan. Jangan menyamakan jam berbagai ruang kunjungan.',
        },
        {
          heading: 'Saran waktu datang',
          paragraphs: [
            'Datang lebih awal memberi suhu lebih nyaman, cahaya lembut, dan ruang bila kabut datang. Hindari mengandalkan satu sumber saja—cek peta dan pengelola.',
          ],
        },
      ],
      faqs: [
        { q: 'Jam berapa Taman Panorama buka?', a: 'Maps: Senin–Kamis & Sabtu–Minggu 09.30–17.30, Jumat tutup. Dinas Pariwisata: setiap hari 08.00–17.00. Keduanya berbeda; konfirmasikan hari H.' },
        { q: 'Apakah Jumat tutup?', a: 'Menurut Google Maps, ya. Dinas Pariwisata mencantumkan buka setiap hari. Karena berbeda, tanyakan petugas sebelum datang di hari Jumat.' },
        { q: 'Jam buka berlaku untuk Lubang Japang?', a: 'Belum tentu. Jadwal terowongan perlu dikonfirmasi terpisah.' },
      ],
    },
    related: ['tiket-taman-panorama', 'waktu-terbaik-ngarai-sianok', 'fasilitas-taman-panorama', 'ngarai-sianok-saat-hujan'],
  },
  {
    slug: 'dari-jam-gadang-ke-panorama',
    group: 'kunjungan',
    ready: true,
    title: 'Dari Jam Gadang ke Panorama Ngarai Sianok',
    description: 'Cara menuju Taman Panorama Ngarai Sianok dari Jam Gadang Bukittinggi: jarak, opsi transportasi, dan tips navigasi.',
    content: {
      kicker: 'Akses dari pusat kota',
      h1: 'Dari Jam Gadang ke Panorama Ngarai Sianok',
      lead: 'Jam Gadang adalah landmark pusat kota; Taman Panorama berada di sisi ngarai. Rencanakan rute dari pin Taman Panorama, bukan dari nama ngarai secara umum.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Rencanakan dari pin, bukan dari nama',
          paragraphs: [
            'Gunakan navigasi menuju "Taman Panorama / Ngarai Sianok" di Jalan Panorama, Kayu Kubu. Jangan arahkan ke "Ngarai Sianok" secara umum karena ada beberapa titik pandang di bentang ngarai yang bisa membingungkan.',
            'Jarak atau waktu berjalan tertentu belum diverifikasi oleh panduan ini. Periksa peta hari perjalanan untuk rute pejalan kaki, penyeberangan, dan pintu masuk yang aktif.',
          ],
        },
        {
          heading: 'Opsi transportasi',
          paragraphs: [
            'Dari pusat kota, Anda bisa menggunakan kendaraan pribadi, taksi, atau transportasi daring. Pastikan titik tujuan tertulis "Taman Panorama / Ngarai Sianok" agar tidak tertukar dengan titik pandang lain.',
            'Pada waktu ramai, datang lebih awal karena ruas pusat kota dan area wisata dapat padat. Ikuti rambu parkir resmi.',
          ],
          callout: 'Jangan menyamakan jarak antarkota dengan jarak dari Jam Gadang ke pintu Taman Panorama. Verifikasi rute di peta terkini.',
        },
      ],
      faqs: [
        { q: 'Berapa lama dari Jam Gadang?', a: 'Panduan ini tidak memverifikasi waktu tempuh pasti. Gunakan peta hari perjalanan dan perkirakan lebih awal bila hari ramai.' },
        { q: 'Bisa jalan kaki?', a: 'Mungkin tergantung rute dan kondisi; periksa jalur pejalan kaki dan penyeberangan yang aktif di peta terkini.' },
        { q: 'Arah mana yang benar di navigasi?', a: 'Cari "Taman Panorama, Kayu Kubu, Bukittinggi" agar navigasi menuntun ke pintu yang tepat.' },
      ],
    },
    related: ['jam-gadang', 'parkir-taman-panorama', 'dari-padang-ke-ngarai-sianok'],
  },
  {
    slug: 'dari-padang-ke-ngarai-sianok',
    group: 'kunjungan',
    ready: true,
    title: 'Dari Padang ke Ngarai Sianok & Bukittinggi',
    description: 'Orientasi perjalanan dari Kota Padang ke Bukittinggi dan Ngarai Sianok: koridor darat, bandara, dan tips verifikasi layanan.',
    content: {
      kicker: 'Akses dari Padang',
      h1: 'Dari Padang ke Ngarai Sianok',
      lead: 'Sebagian besar pengunjung dari luar daerah masuk lewat Padang. Koridor Padang–Bukittinggi adalah ruas darat utama.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Koridor darat Padang–Bukittinggi',
          paragraphs: [
            'Indonesia Travel mengenalkan Minangkabau dan koridor Padang–Bukittinggi sebagai orientasi perjalanan. Panduan ini belum memverifikasi layanan, jadwal, atau titik jemput yang aktif; periksa operator berizin dan peta hari perjalanan.',
            'Jangan menyamakan jarak antarkota dengan jarak dari pintu kota Bukittinggi ke pintu Taman Panorama. Keduanya butuh rencana terpisah.',
          ],
        },
        {
          heading: 'Verifikasi sebelum berangkat',
          paragraphs: [
            'Periksa operator yang benar-benar melayani perjalanan ke Bukittinggi pada hari Anda berangkat. Konfirmasikan rute, jadwal, titik turun, dan sambungan menuju Jalan Panorama.',
            'Bila memakai transportasi daring atau taksi, pastikan titik tujuan tertulis "Taman Panorama / Ngarai Sianok".',
          ],
          callout: 'Panduan ini tidak memverifikasi layanan bus, angkot, atau titik jemput tertentu. Konfirmasikan dengan operator berizin.',
        },
      ],
      faqs: [
        { q: 'Ada transportasi langsung Padang–Bukittinggi?', a: 'Koridor darat Padang–Bukittinggi adalah ruas utama, tetapi panduan ini tidak memverifikasi layanan atau jadwal tertentu. Periksa operator berizin.' },
        { q: 'Berapa lama perjalanan?', a: 'Tergantung lalu lintas dan moda. Jangan menyamakan waktu antarkota dengan waktu dari Bukittinggi ke pintu Taman Panorama.' },
        { q: 'Ke mana saya turun?', a: 'Arahkan ke "Taman Panorama, Kayu Kubu, Bukittinggi" agar tidak tertukar dengan titik pandang lain di bentang ngarai.' },
      ],
    },
    related: ['dari-bandara-minangkabau', 'dari-jam-gadang-ke-panorama', 'parkir-taman-panorama'],
  },
  {
    slug: 'dari-bandara-minangkabau',
    group: 'kunjungan',
    ready: true,
    title: 'Dari Bandara Minangkabau ke Bukittinggi & Ngarai Sianok',
    description: 'Orientasi dari Bandara Internasional Minangkabau (BIM) ke Bukittinggi dan Taman Panorama: ruas darat, verifikasi layanan, dan tips.',
    content: {
      kicker: 'Akses dari bandara',
      h1: 'Dari Bandara Minangkabau ke Bukittinggi',
      lead: 'Bandara Internasional Minangkabau (BIM) adalah pintu udara utama. Dari sana perjalanan dilanjutkan lewat ruas darat ke Bukittinggi.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Lanjut dengan darat',
          paragraphs: [
            'Indonesia Travel mengenalkan Minangkabau dan koridor Padang–Bukittinggi sebagai orientasi perjalanan. Dari bandara, perjalanan ke Bukittinggi dilanjutkan dengan moda darat.',
            'Panduan ini belum memverifikasi layanan, jadwal, atau titik jemput yang aktif dari bandara. Periksa operator berizin dan peta hari perjalanan.',
          ],
        },
        {
          heading: 'Sampai di Bukittinggi',
          paragraphs: [
            'Setelah tiba di Bukittinggi, rencanakan rute ke pin Taman Panorama, bukan ke nama ngarai secara umum. Verifikasi sambungan terakhir menuju Jalan Panorama.',
          ],
          callout: 'Jangan menyamakan jarak bandara ke pintu taman dengan waktu total perjalanan. Masing-masing butuh verifikasi terpisah.',
        },
      ],
      faqs: [
        { q: 'Ada transportasi langsung bandara–Bukittinggi?', a: 'Koridor Padang–Bukittinggi adalah ruas utama, tetapi panduan ini tidak memverifikasi layanan atau jadwal tertentu dari bandara. Periksa operator berizin.' },
        { q: 'Berapa lama dari bandara?', a: 'Tergantung lalu lintas dan moda. Verifikasi dengan operator dan jangan menyamakan dengan waktu dalam kota.' },
        { q: 'Ke mana tujuan di navigasi?', a: 'Arahkan ke "Taman Panorama, Kayu Kubu, Bukittinggi" setelah tiba di Bukittinggi.' },
      ],
    },
    related: ['dari-padang-ke-ngarai-sianok', 'dari-jam-gadang-ke-panorama'],
  },
  {
    slug: 'parkir-taman-panorama',
    group: 'kunjungan',
    ready: true,
    title: 'Panduan Parkir di Taman Panorama Ngarai Sianok',
    description: 'Informasi parkir di Taman Panorama: apa yang perlu dikonfirmasikan tentang area, kapasitas, tarif, dan jarak ke pintu.',
    content: {
      kicker: 'Parkir',
      h1: 'Parkir di Taman Panorama',
      lead: 'Informasi parkir belum diverifikasi secara penuh. Berikut hal yang perlu Anda tanyakan dan konfirmasikan saat tiba.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Yang harus dikonfirmasikan',
          paragraphs: [
            'Tanyakan area parkir yang diizinkan, kapasitas, tarif, dan jarak ke pintu yang digunakan. Ketersediaan area parkir belum diverifikasi oleh panduan ini.',
            'Pada waktu ramai (akhir pekan, hari libur), ruang parkir di pusat kota dan area wisata dapat terbatas. Datang lebih awal memberi peluang lebih baik.',
          ],
        },
        {
          heading: 'Tips praktis',
          paragraphs: [
            'Ikuti rambu parkir resmi dan jangan berhenti di bahu jalan yang mengganggu arus. Catat lokasi parkir Anda untuk memudahkan kembali.',
            'Bila membawa kendaraan listrik, verifikasi titik pengisian dan status operasional melalui aplikasi atau jaringan resmi sebelum perjalanan.',
          ],
          callout: 'Panduan ini tidak mencantumkan kapasitas atau tarif parkir tertentu karena belum diverifikasi. Konfirmasikan di lokasi.',
        },
      ],
      faqs: [
        { q: 'Berapa tarif parkir?', a: 'Tarif parkir belum diverifikasi oleh panduan ini. Tanyakan petugas atau lihat papan informasi di lokasi.' },
        { q: 'Apakah parkir luas?', a: 'Ketersediaan belum diverifikasi. Datang lebih awal pada hari ramai untuk peluang lebih baik.' },
        { q: 'Bisa parkir motor?', a: 'Tanyakan area yang diizinkan untuk motor saat tiba; panduan ini tidak memverifikasi kapasitas per jenis kendaraan.' },
      ],
    },
    related: ['fasilitas-taman-panorama', 'tiket-taman-panorama', 'dari-jam-gadang-ke-panorama', 'ngarai-sianok-lansia-akses'],
  },
  {
    slug: 'fasilitas-taman-panorama',
    group: 'kunjungan',
    ready: true,
    title: 'Fasilitas Taman Panorama: Toilet, Mushala & Tempat Istirahat',
    description: 'Fasilitas di Taman Panorama berdasarkan foto petunjuk Mei 2026: toilet, mushala, suvenir, dan catatan bahwa ketersediaan harus dikonfirmasikan.',
    content: {
      kicker: 'Fasilitas',
      h1: 'Fasilitas di Taman Panorama',
      lead: 'Foto papan petunjuk bertanggal Mei 2026 menunjukkan beberapa fasilitas. Foto itu adalah catatan satu waktu, bukan jaminan semua fasilitas aktif saat kunjungan Anda.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Apa yang tercantum di papan petunjuk',
          paragraphs: [
            'Papan petunjuk Mei 2026 menunjukkan arah menuju menara pandang, Lubang Japang, mushala, toilet, suvenir, dan tempat bermain anak.',
            'Keberadaan dan jam akses fasilitas tersebut perlu dikonfirmasikan kepada petugas saat tiba. Jangan menganggap semua aktif hanya karena tercantum di papan.',
          ],
        },
        {
          heading: 'Tips untuk keluarga',
          paragraphs: [
            'Tanyakan lokasi toilet dan mushala yang aktif, jam akses, dan aksesibilitas. Bawa kebutuhan dasar (air minum, tisu) sebagai antisipasi.',
            'Untuk anak, perhatikan area bermain yang ditunjukkan papan; selalu awasi di dekat tepian tebing.',
          ],
          callout: 'Foto petunjuk adalah dokumentasi pada satu waktu. Kondisi fasilitas dapat berubah; tanyakan petugas untuk status terkini.',
        },
      ],
      faqs: [
        { q: 'Apakah ada toilet?', a: 'Papan petunjuk Mei 2026 menyebut toilet, tetapi ketersediaan dan jam akses harus dikonfirmasikan kepada petugas.' },
        { q: 'Ada mushala?', a: 'Papan petunjuk mencantumkan mushala. Tanyakan lokasi dan akses saat tiba.' },
        { q: 'Boleh membawa makanan?', a: 'Boleh, tetapi simpan makanan di tas karena kera dapat dijumpai. Jangan memberi makan satwa.' },
      ],
    },
    related: ['parkir-taman-panorama', 'tiket-taman-panorama', 'ngarai-sianok-anak', 'ngarai-sianok-lansia-akses'],
  },
  {
    slug: 'durasi-kunjungan-ngarai-sianok',
    group: 'kunjungan',
    ready: true,
    title: 'Berapa Lama Berkunjung ke Ngarai Sianok?',
    description: 'Saran durasi untuk Taman Panorama dan titik pandang, serta mengapa turun ke lembah atau masuk terowongan butuh rencana terpisah.',
    content: {
      kicker: 'Durasi',
      h1: 'Berapa lama di Ngarai Sianok',
      lead: 'Sebagai saran perencanaan, alokasikan 45–90 menit untuk titik pandang dan taman.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Saran untuk taman dan titik pandang',
          paragraphs: [
            'Alokasikan 45–90 menit untuk menikmati titik pandang, membaca plang, dan berfoto dari area aman. Ini perkiraan perencanaan, bukan durasi resmi.',
            'Bila Anda juga ingin menjelajahi sekitar (kuliner, toko oleh-oleh, atau destinasi lain di Bukittinggi), tambahkan waktu terpisah.',
          ],
        },
        {
          heading: 'Rencana terpisah untuk lembah dan terowongan',
          paragraphs: [
            'Kunjungan terowongan atau turun ke lembah memerlukan rencana akses dan waktu terpisah, bergantung pembukaan, antrean, dan kondisi hari itu.',
            'Jangan menganggap waktu taman otomatis mencakup kegiatan di luar area pandang.',
          ],
          callout: 'Durasi 45–90 menit adalah saran untuk taman/titik pandang, bukan janji untuk seluruh lembah atau terowongan.',
        },
      ],
      faqs: [
        { q: 'Cukupkah 1 jam?', a: 'Untuk titik pandang dan taman, 45–90 menit biasanya cukup. Tambahkan waktu bila ingin menjelajah lebih jauh.' },
        { q: 'Berapa lama jika masuk Lubang Japang?', a: 'Perlu rencana terpisah; tergantung pembukaan dan kondisi hari itu. Konfirmasikan di lokasi.' },
        { q: 'Bisa sekaligus dengan Jam Gadang?', a: 'Ya, keduanya bisa digabung dalam setengah hari. Lihat panduan rute Ngarai Sianok + Jam Gadang.' },
      ],
    },
    related: ['wisata-setengah-hari-ngarai-sianok-jam-gadang', 'waktu-terbaik-ngarai-sianok', 'rute-taman-panorama-lubang-japang'],
  },
  {
    slug: 'ngarai-sianok-anak',
    group: 'kunjungan',
    ready: true,
    title: 'Berkunjung ke Ngarai Sianok dengan Anak',
    description: 'Tips membawa anak ke Taman Panorama Ngarai Sianok: keamanan tebing, fasilitas, durasi, dan persiapan.',
    content: {
      kicker: 'Keluarga',
      h1: 'Ngarai Sianok dengan anak',
      lead: 'Titik pandang Taman Panorama bisa dikunjungi keluarga, asal pengawasan di tebing dijaga dan persiapan cukup.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Keamanan di tebing',
          paragraphs: [
            'Awasi anak di dekat tepian tebing setiap saat. Jangan biarkan mereka berlari atau mendekati pagar yang rendah tanpa pengawasan.',
            'Gunakan jalur resmi dan jangan mencari sudut foto di area tertutup. Pertimbangkan dewasa yang berpegangan tangan dengan anak di area pandang.',
          ],
        },
        {
          heading: 'Persiapan dan fasilitas',
          paragraphs: [
            'Bawa air minum, topi, dan jas hujan lipat. Tanyakan lokasi toilet dan mushala yang aktif saat tiba.',
            'Area bermain anak tercantum di papan petunjuk Mei 2026, tetapi konfirmasikan ketersediaannya. Jangan beri makan kera yang mungkin dijumpai.',
          ],
          callout: 'Saran waktu 45–90 menit untuk taman cukup untuk anak, asal tidak terlalu lelah. Bawa kebutuhan dasar dan istirahat secukupnya.',
        },
      ],
      faqs: [
        { q: 'Apakah ramah anak?', a: 'Area pandang yang diizinkan ramah anak asal diawasi ketat di tebing. Jangan biarkan anak mendekati tepian tanpa pengawasan.' },
        { q: 'Ada tempat bermain?', a: 'Papan petunjuk Mei 2026 mencantumkannya; konfirmasikan ketersediaan saat tiba.' },
        { q: 'Berapa lama cukup?', a: '45–90 menit untuk taman biasanya cukup untuk keluarga.' },
      ],
    },
    related: ['ngarai-sianok-lansia-akses', 'rute-keluarga-ngarai-sianok', 'fasilitas-taman-panorama', 'keamanan-ngarai-sianok'],
  },
  {
    slug: 'ngarai-sianok-lansia-akses',
    group: 'kunjungan',
    ready: true,
    title: 'Aksesibilitas Lansia & Mobilitas di Taman Panorama',
    description: 'Pertimbangan aksesibilitas untuk lansia dan pengunjung dengan kebutuhan mobilitas di Taman Panorama Ngarai Sianok.',
    content: {
      kicker: 'Aksesibilitas',
      h1: 'Lansia & akses mobilitas',
      lead: 'Taman Panorama memiliki area pandang, tetapi akses untuk lansia dan kebutuhan mobilitas khusus perlu dikonfirmasikan.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Tanyakan jalur yang sesuai',
          paragraphs: [
            'Tanyakan jalur bebas tangga, permukaan, tempat istirahat, dan fasilitas yang aktif. Jangan menganggap akses taman dan terowongan setara untuk kebutuhan mobilitas.',
            'Lubang Japang adalah terowongan; aksesnya kemungkinan tidak ramah kursi roda atau pengunjung dengan mobilitas terbatas. Konfirmasikan sebelum merencanakan.',
          ],
        },
        {
          heading: 'Tips kunjungan',
          paragraphs: [
            'Datang di waktu lebih sepi (pagi hari kerja) untuk ruang lebih nyaman. Bawa pendamping bila diperlukan.',
            'Istirahat secara berkala dan hindari berdiri terlalu lama di tepi terbuka bila berangin.',
          ],
          callout: 'Panduan ini tidak memverifikasi ketersediaan jalur khusus disabilitas. Tanyakan pengelola untuk kondisi hari itu.',
        },
      ],
      faqs: [
        { q: 'Apakah ada jalur khusus disabilitas?', a: 'Belum diverifikasi. Tanyakan pengelola tentang jalur bebas tangga dan fasilitas yang aktif.' },
        { q: 'Apakah Lubang Japang bisa diakses kursi roda?', a: 'Kemungkinan tidak, karena terowongan. Konfirmasikan sebelum merencanakan.' },
        { q: 'Kapan waktu paling nyaman?', a: 'Pagi hari kerja biasanya lebih sepi dan nyaman.' },
      ],
    },
    related: ['ngarai-sianok-anak', 'parkir-taman-panorama', 'fasilitas-taman-panorama', 'keamanan-ngarai-sianok'],
  },
  {
    slug: 'ngarai-sianok-saat-hujan',
    group: 'kunjungan',
    ready: true,
    title: 'Apakah Ngarai Sianok Bisa Dikunjungi Saat Hujan?',
    description: 'Pertimbangan mengunjungi Taman Panorama saat hujan: kabut, permukaan licin, dan kapan sebaiknya menunda.',
    content: {
      kicker: 'Cuaca',
      h1: 'Ngarai Sianok saat hujan',
      lead: 'Kunjungan tetap mungkin saat hujan ringan, tetapi ada batasan keselamatan yang perlu dihormati.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Hujan ringan vs lebat',
          paragraphs: [
            'Saat hujan ringan, Anda masih bisa menikmati titik pandang dengan jas hujan. Kabut mungkin turun dan menutup pandangan—nikmati sebagai suasana.',
            'Saat hujan lebat, jauhi tepian tebing, ikuti pembatas serta arahan petugas, dan tunda aktivitas turun ke lembah bila kondisi tidak mendukung.',
          ],
        },
        {
          heading: 'Permukaan licin',
          paragraphs: [
            'Jalur dan area pandang bisa licin saat basah. Gunakan alas kaki dengan cengkeraman baik dan hindari berlari.',
            'Bila petir atau angin kencang, lebih baik menunda kunjungan ke area terbuka.',
          ],
          callout: 'Pandangan bisa tertutup kabut saat hujan—itu wajar. Jangan mengambil risiko di tebing demi foto.',
        },
      ],
      faqs: [
        { q: 'Boleh berkunjung saat hujan?', a: 'Hujan ringan bisa, dengan jas hujan dan hati-hati permukaan licin. Hujan lebat sebaiknya ditunda di area tebing.' },
        { q: 'Apakah pemandangan tertutup?', a: 'Sering ya, karena kabut. Itu bagian dari lanskap pegunungan; nikmati dari area aman.' },
        { q: 'Ada alternatif saat hujan?', a: 'Lihat panduan wisata pengganti hujan Bukittinggi untuk opsi indoor.' },
      ],
    },
    related: ['wisata-kabut-ngarai-sianok', 'wisata-pengganti-hujan-bukittinggi', 'keamanan-ngarai-sianok', 'waktu-terbaik-ngarai-sianok'],
  },

  // ===================== C. DESTINASI SEKITAR =====================
  {
    slug: 'lubang-japang',
    group: 'sekitar',
    ready: true,
    title: 'Lubang Japang Bukittinggi: Sejarah & Cara Mengunjungi',
    description: 'Lubang Japang adalah terowongan Perang Dunia II dekat Taman Panorama. Pelajari latar sejarah, akses, dan mengapa kunjungan perlu dikonfirmasi.',
    content: {
      kicker: 'Sejarah & terowongan',
      h1: 'Lubang Japang',
      lead: 'Lubang Japang adalah peninggalan terowongan dari masa Perang Dunia II, sering digabung dalam satu entri dengan Taman Panorama oleh Dinas Pariwisata.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Latar Perang Dunia II',
          paragraphs: [
            'Materi pariwisata nasional mengenalkan terowongan ini sebagai peninggalan masa Perang Dunia II. Interpretasi sejarah perang sebaiknya dilakukan dengan bahasa yang menghormati pengalaman manusia.',
            'Panduan ini tidak mengulang angka, fungsi ruang, atau kisah dramatis yang tidak memiliki dukungan sumber memadai.',
          ],
        },
        {
          heading: 'Akses terpisah dari taman',
          paragraphs: [
            'Lokasi pintu, pembukaan, tiket, serta kebutuhan pendamping harus dikonfirmasikan terpisah. Berada di Taman Panorama tidak menjamin bisa langsung masuk terowongan.',
            'Tanyakan apakah kunjungan terowongan tersedia sebelum menyusun rute. Bila diizinkan masuk, ikuti jalur, interpretasi, dan arahan petugas.',
          ],
          callout: 'Jangan menganggap akses terowongan sama dengan taman terbuka. Verifikasi status hari H sebelum datang.',
        },
      ],
      faqs: [
        { q: 'Apakah Lubang Japang buka setiap hari?', a: 'Pembukaan dan ketentuan masuk perlu dikonfirmasi terpisah; jangan menganggap sama dengan jam Taman Panorama.' },
        { q: 'Termasuk tiket Taman Panorama?', a: 'Entri digabung dalam satu judul di Dinas Pariwisata, tetapi cakupan pasti tidak dijelaskan. Tanyakan petugas.' },
        { q: 'Apakah aman untuk anak?', a: 'Terowongan butuh pengawasan ketat. Konfirmasikan akses dan arahan petugas sebelum membawa anak.' },
      ],
    },
    related: ['perbedaan-panorama-ngarai-sianok', 'tiket-taman-panorama', 'rute-taman-panorama-lubang-japang', 'sejarah-ngarai-sianok'],
  },
  {
    slug: 'janjang-koto-gadang',
    group: 'sekitar',
    ready: true,
    title: 'Janjang Koto Gadang (Great Wall of Koto Gadang)',
    description: 'Tangga panjang Koto Gadang yang menjadi jalur pejalan kaki dan spot foto, serta cara memasukkannya dalam rute dari Ngarai Sianok.',
    content: {
      kicker: 'Destinasi sekitar',
      h1: 'Janjang Koto Gadang',
      lead: 'Janjang Koto Gadang adalah rangkaian tangga panjang yang menghubungkan area dan populer sebagai jalur pejalan kaki serta spot foto.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Apa itu janjang Koto Gadang',
          paragraphs: [
            'Julukan "Great Wall of Koto Gadang" merujuk pada tangga panjang yang menjadi ciri kawasan Koto Gadang. Ini bukan objek berbayar tunggal, melainkan jalur dan lanskap permukiman.',
            'Bagi pengunjung, nilainya ada pada berjalan kaki menyusuri tangga, melihat rumah adat, dan mendapat sudut foto kota dari ketinggian.',
          ],
        },
        {
          heading: 'Menjadikannya bagian rute',
          paragraphs: [
            'Koto Gadang berada di sisi lain lembah relatif terhadap Taman Panorama. Jarak, rute, dan waktu tempuh belum diverifikasi; periksa peta hari perjalanan bila ingin menggabungkannya.',
            'Janjang membutuhkan tenaga dan hati-hati di tangga licin saat hujan. Gunakan alas kaki yang sesuai.',
          ],
          callout: 'Alamat, jarak, dan kondisi masuk Koto Gadang belum diverifikasi ulang oleh panduan ini. Cek peta dan pengelola sebelum merencanakan.',
        },
      ],
      faqs: [
        { q: 'Berapa tiket masuk Janjang Koto Gadang?', a: 'Ini adalah jalur dan permukiman, bukan objek berbayar tunggal menurut panduan ini. Tidak ada tiket yang kami verifikasi.' },
        { q: 'Jauh dari Taman Panorama?', a: 'Berada di sisi lain lembah; jarak dan rute belum diverifikasi. Periksa peta hari perjalanan.' },
        { q: 'Cocok untuk lansia?', a: 'Tangga panjang butuh tenaga. Pertimbangkan kondisi fisik dan hindari saat hujan licin.' },
      ],
    },
    related: ['koto-gadang', 'desa-wisata-kayukubu', 'wisata-sehari-ngarai-sianok-koto-gadang'],
  },
  {
    slug: 'jam-gadang',
    group: 'sekitar',
    ready: true,
    title: 'Jam Gadang Bukittinggi & Hubungannya dengan Ngarai Sianok',
    description: 'Jam Gadang sebagai landmark pusat kota Bukittinggi dan cara menggabungkannya dengan kunjungan Ngarai Sianok dalam satu rute.',
    content: {
      kicker: 'Landmark kota',
      h1: 'Jam Gadang',
      lead: 'Jam Gadang adalah menara jam ikonik di pusat Bukittinggi dan titik referensi bagi hampir semua rute wisata kota.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Simbol pusat kota',
          paragraphs: [
            'Jam Gadang menjadi patokan arah dan titik kumpul. Dari sini, banyak destinasi termasuk Taman Panorama diakses dengan mudah melalui ruas kota.',
            'Sebagai landmark terbuka, Jam Gadang bisa dilihat kapan saja tanpa tiket, tetapi fasilitas dan area sekitar mengikuti kondisi ruang publik setempat.',
          ],
        },
        {
          heading: 'Gabungkan dengan Ngarai Sianok',
          paragraphs: [
            'Karena letaknya di pusat, Jam Gadang sering menjadi awal rute sebelum atau sesudah Taman Panorama. Alokasikan waktu terpisah untuk masing-masing.',
            'Lihat panduan rute setengah hari Ngarai Sianok + Jam Gadang untuk susunan yang masuk akal.',
          ],
          callout: 'Jam operasional dan akses area sekitar Jam Gadang mengikuti ruang publik kota; panduan ini tidak memverifikasi tiket atau jam khusus.',
        },
      ],
      faqs: [
        { q: 'Apakah Jam Gadang gratis?', a: 'Sebagai landmark terbuka, bisa dilihat tanpa tiket. Panduan ini tidak memverifikasi tiket atau jam khusus area dalam.' },
        { q: 'Berapa lama dari Jam Gadang ke Ngarai Sianok?', a: 'Waktu tempuh belum diverifikasi; rencanakan dari pin Taman Panorama, bukan dari nama ngarai umum.' },
        { q: 'Bisa dikunjungi malam?', a: 'Area sekitar bisa dilewati malam, tetapi pastikan kondisi ruang publik dan keamanan setempat.' },
      ],
    },
    related: ['wisata-setengah-hari-ngarai-sianok-jam-gadang', 'dari-jam-gadang-ke-panorama', 'benteng-fort-de-kock'],
  },
  {
    slug: 'benteng-fort-de-kock',
    group: 'sekitar',
    ready: true,
    title: 'Benteng Fort de Kock Bukittinggi',
    description: 'Fort de Kock sebagai benteng bersejarah Bukittinggi dan pertimbangan memasukkannya dalam rute dari Ngarai Sianok.',
    content: {
      kicker: 'Sejarah kolonial',
      h1: 'Benteng Fort de Kock',
      lead: 'Fort de Kock adalah benteng peninggalan masa lalu yang sering disebut dalam panduan wisata Bukittinggi.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Latar sejarah',
          paragraphs: [
            'Benteng ini menjadi bagian dari narasi sejarah Bukittinggi. Panduan ini tidak memverifikasi tahun pendirian atau detail fungsi militer tertentu; rujuk sumber resmi bila membutuhkan data teknis.',
            'Sebagai kandidat destinasi terpisah, lokasi, jarak, tiket, dan akses belum diverifikasi oleh panduan ini. Periksa peta dan pengelola.',
          ],
        },
        {
          heading: 'Menjadikannya bagian rute',
          paragraphs: [
            'Fort de Kock dapat digabung dengan Jam Gadang dan Taman Panorama dalam satu hari, tergantung jarak yang Anda verifikasi di peta.',
            'Jangan menganggap semua objek bersejarah Bukittinggi berada dalam satu tiket atau satu area.',
          ],
          callout: 'Lokasi, jarak, tiket, dan akses Fort de Kock belum diverifikasi oleh panduan ini. Konfirmasikan melalui peta dan pengelola.',
        },
      ],
      faqs: [
        { q: 'Berapa tiket Fort de Kock?', a: 'Belum diverifikasi oleh panduan ini. Periksa peta dan pengelola setempat.' },
        { q: 'Dekat dengan Ngarai Sianok?', a: 'Sebagai destinasi terpisah; jarak dan rute belum diverifikasi. Periksa peta hari perjalanan.' },
        { q: 'Apa hubungannya dengan Jembatan Limpapeh?', a: 'Keduanya sering disebut berdekatan dalam panduan kota; verifikasi hubungan dan akses di peta.' },
      ],
    },
    related: ['jembatan-limpapeh', 'jam-gadang', 'wisata-sejarah-setengah-hari'],
  },
  {
    slug: 'jembatan-limpapeh',
    group: 'sekitar',
    ready: true,
    title: 'Jembatan Limpapeh Bukittinggi',
    description: 'Jembatan Limpapeh sebagai penghubung area wisata Bukittinggi dan cara memasukkannya dalam rute jalan kaki.',
    content: {
      kicker: 'Destinasi sekitar',
      h1: 'Jembatan Limpapeh',
      lead: 'Jembatan Limpapeh sering disebut sebagai penghubung antararea wisata di Bukittinggi, termasuk ke arah benteng.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Peran sebagai penghubung',
          paragraphs: [
            'Jembatan ini membantu menghubungkan titik-titik wisata kota. Bagi pengunjung, nilainya ada pada jalur jalan kaki dan sudut pandang kota.',
            'Sebagai kandidat destinasi terpisah, lokasi, jarak, dan akses belum diverifikasi oleh panduan ini. Periksa peta dan pengelola.',
          ],
        },
        {
          heading: 'Dalam rute kota',
          paragraphs: [
            'Bisa dijadikan bagian jalan kaki dari Jam Gadang atau Fort de Kock. Alokasikan waktu terpisah dan verifikasi jalur pejalan kaki yang aktif.',
          ],
          callout: 'Alamat, jarak, dan kondisi masuk belum diverifikasi ulang. Cek peta dan pengelola sebelum merencanakan.',
        },
      ],
      faqs: [
        { q: 'Apakah ada tiket?', a: 'Sebagai jembatan penghubung, panduan ini tidak memverifikasi tiket. Periksa kondisi ruang publik setempat.' },
        { q: 'Dekat dengan Fort de Kock?', a: 'Sering disebut berdekatan; verifikasi jarak dan akses di peta.' },
        { q: 'Bisa dilalui malam?', a: 'Tergantung ruang publik kota; periksa kondisi setempat.' },
      ],
    },
    related: ['benteng-fort-de-kock', 'jam-gadang', 'wisata-sejarah-setengah-hari'],
  },
  {
    slug: 'taman-ngarai-maaram',
    group: 'sekitar',
    ready: true,
    title: 'Taman Ngarai Maaram: Titik Pandang Lain',
    description: 'Taman Ngarai Maaram sebagai alternatif titik pandang ngarai dan perbandingannya dengan Taman Panorama.',
    content: {
      kicker: 'Titik pandang alternatif',
      h1: 'Taman Ngarai Maaram',
      lead: 'Selain Taman Panorama, ada titik pandang lain seperti Taman Ngarai Maaram yang juga menawarkan pemandangan lembah.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Titik pandang berbeda',
          paragraphs: [
            'Bentang ngarai memiliki beberapa titik pandang. Taman Ngarai Maaram adalah salah satunya, dengan sudut dan suasana yang bisa berbeda dari Taman Panorama.',
            'Lokasi, jarak, jam, tiket, dan akses belum diverifikasi oleh panduan ini. Periksa peta dan pengelola sebelum merencanakan kunjungan.',
          ],
        },
        {
          heading: 'Memilih antara titik pandang',
          paragraphs: [
            'Jika waktu terbatas, Taman Panorama adalah titik pandang utama yang paling sering dirujuk. Titik lain dapat dipertimbangkan bila Anda ingin variasi sudut.',
          ],
          callout: 'Jangan menganggap semua titik pandang memiliki jam dan tiket sama. Verifikasi masing-masing secara terpisah.',
        },
      ],
      faqs: [
        { q: 'Lebih bagus dari Taman Panorama?', a: 'Ini preferensi. Taman Panorama adalah titik pandang utama paling umum dirujuk; titik lain memberi variasi sudut.' },
        { q: 'Berapa tiketnya?', a: 'Belum diverifikasi oleh panduan ini. Periksa peta dan pengelola.' },
        { q: 'Jauh dari Taman Panorama?', a: 'Jarak dan rute belum diverifikasi; periksa peta hari perjalanan.' },
      ],
    },
    related: ['perbedaan-panorama-ngarai-sianok', 'waktu-terbaik-ngarai-sianok'],
  },
  {
    slug: 'rumah-kelahiran-bung-hatta',
    group: 'sekitar',
    ready: true,
    title: 'Rumah Kelahiran Bung Hatta Bukittinggi',
    description: 'Museum Rumah Kelahiran Bung Hatta sebagai destinasi sejarah dan cara memasukkannya dalam rute dari Ngarai Sianok.',
    content: {
      kicker: 'Museum sejarah',
      h1: 'Rumah Kelahiran Bung Hatta',
      lead: 'Rumah Kelahiran Bung Hatta adalah museum yang memperlihatkan memorabilia tokoh proklamator Indonesia asal Sumatera Barat.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Nilai sejarah',
          paragraphs: [
            'Museum ini menjadi destinasi edukasi sejarah kemerdekaan. Sebagai kandidat museum terpisah, alamat, pembukaan, tiket, dan izin masuk belum diverifikasi oleh panduan ini.',
            'Periksa alamat, jam buka, dan tiket melalui peta dan pengelola sebelum merencanakan kunjungan.',
          ],
        },
        {
          heading: 'Dalam rute sejarah',
          paragraphs: [
            'Dapat digabung dengan Fort de Kock dan Jam Gadang dalam wisata sejarah setengah hari. Verifikasi jarak dan rute di peta.',
          ],
          callout: 'Alamat, pembukaan, tiket, dan izin masuk belum diverifikasi. Konfirmasikan melalui peta dan pengelola.',
        },
      ],
      faqs: [
        { q: 'Berapa tiket masuk?', a: 'Belum diverifikasi oleh panduan ini. Periksa peta dan pengelola.' },
        { q: 'Buka setiap hari?', a: 'Jam buka belum diverifikasi; konfirmasikan sebelum datang.' },
        { q: 'Dekat dengan Ngarai Sianok?', a: 'Sebagai destinasi terpisah; verifikasi jarak dan rute di peta.' },
      ],
    },
    related: ['wisata-sejarah-setengah-hari', 'benteng-fort-de-kock', 'jam-gadang'],
  },
  {
    slug: 'desa-wisata-kayukubu',
    group: 'sekitar',
    ready: true,
    title: 'Desa Wisata Kayu Kubu di Tepi Ngarai',
    description: 'Kayu Kubu sebagai desa di tepi ngarai dengan akses ke Taman Panorama, serta potensi wisata budaya dan alam.',
    content: {
      kicker: 'Desa di tepi ngarai',
      h1: 'Desa Wisata Kayu Kubu',
      lead: 'Kayu Kubu adalah nama kelurahan tempat Taman Panorama berada, di tepi Ngarai Sianok. Ini menghubungkan pengunjung dengan lanskap desa dan lembah.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Di mana Kayu Kubu',
          paragraphs: [
            'Alamat Taman Panorama berada di Kayu Kubu, Kecamatan Guguk Panjang, Bukittinggi. Artinya titik pandang berada dalam permukiman desa di tepi ngarai.',
            'Interaksi dengan warga, kuliner sederhana, dan jalur desa ke arah lembah adalah bagian dari pengalaman di sini.',
          ],
        },
        {
          heading: 'Wisata budaya dan alam',
          paragraphs: [
            'Sebagai desa di tepi ngarai, Kayu Kubu menyatu dengan sistem hidup lembah: sawah, vegetasi, dan aktivitas masyarakat. Hormati rumah warga dan jangan masuk area privat.',
            'Jangan menganggap desa ini objek berbayar; nikmati sebagai bagian dari lanskap yang hidup.',
          ],
          callout: 'Alamat dan kondisi masuk desa belum diverifikasi ulang. Taman Panorama adalah titik kunjungan resmi yang harus Anda tuju.',
        },
      ],
      faqs: [
        { q: 'Apakah Kayu Kubu objek wisata berbayar?', a: 'Tidak. Ini adalah desa tempat Taman Panorama berada. Titik kunjungan resmi adalah Taman Panorama.' },
        { q: 'Apa menarik di sana?', a: 'Lanskap desa di tepi ngarai, kuliner sederhana, dan akses ke titik pandang. Hormati area privat warga.' },
        { q: 'Bagaimana menuju Taman Panorama dari desa?', a: 'Taman Panorama berada di Jalan Panorama, Kayu Kubu; arahkan navigasi ke alamat tersebut.' },
      ],
    },
    related: ['perbedaan-panorama-ngarai-sianok', 'janjang-koto-gadang'],
  },
  {
    slug: 'koto-gadang',
    group: 'sekitar',
    ready: true,
    title: 'Koto Gadang: Kerajinan Perak & Budaya Minangkabau',
    description: 'Koto Gadang sebagai pusat kerajinan perak dan budaya, serta rencana perjalanan dari Ngarai Sianok.',
    content: {
      kicker: 'Budaya & kerajinan',
      h1: 'Koto Gadang',
      lead: 'Koto Gadang dikenal sebagai pusat kerajinan perak dan salah satu nagari dengan warisan budaya Minangkabau yang kuat.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Kerajinan perak',
          paragraphs: [
            'Koto Gadang memiliki tradisi kerajinan perak yang diwariskan turun-temurun. Pengunjung dapat melihat proses dan membeli karya sebagai oleh-oleh, dengan verifikasi harga dan keaslian di tempat.',
            'Panduan ini tidak memverifikasi toko tertentu, harga, atau jam buka. Belanja berdasarkan kebutuhan dan tawar dengan sopan.',
          ],
        },
        {
          heading: 'Menjadikannya hari di Koto Gadang',
          paragraphs: [
            'Koto Gadang berada di sisi lain lembah relatif terhadap Taman Panorama. Jarak, rute, dan waktu tempuh belum diverifikasi; periksa peta hari perjalanan bila menggabungkannya dengan Ngarai Sianok.',
            'Lihat panduan wisata sehari Ngarai Sianok + Koto Gadang untuk susunan rute.',
          ],
          callout: 'Alamat, jarak, dan kondisi masuk Koto Gadang belum diverifikasi ulang. Cek peta dan pengelola sebelum merencanakan.',
        },
      ],
      faqs: [
        { q: 'Apa oleh-oleh khas Koto Gadang?', a: 'Kerajinan perak adalah yang paling dikenal. Verifikasi keaslian dan harga di tempat.' },
        { q: 'Jauh dari Ngarai Sianok?', a: 'Berada di sisi lain lembah; jarak dan rute belum diverifikasi. Periksa peta hari perjalanan.' },
        { q: 'Boleh belajar membuat perak?', a: 'Tergantung pengrajin setempat; panduan ini tidak memverifikasi sesi tertentu.' },
      ],
    },
    related: ['janjang-koto-gadang', 'wisata-sehari-ngarai-sianok-koto-gadang', 'oleh-oleh-khas-bukittinggi'],
  },

  // ===================== D. KULINER =====================
  {
    slug: 'sarapan-dekat-ngarai-sianok',
    group: 'kuliner',
    ready: true,
    title: 'Sarapan Dekat Ngarai Sianok & Taman Panorama',
    description: 'Panduan netral mencari sarapan di sekitar Taman Panorama dan Bukittinggi: jenis hidangan, area yang umum, dan tips memilih.',
    content: {
      kicker: 'Kuliner pagi',
      h1: 'Sarapan dekat Ngarai Sianok',
      lead: 'Tidak ada daftar restoran resmi yang kami verifikasi. Berikut panduan netral mencari sarapan di sekitar Bukittinggi dan Taman Panorama.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Jenis sarapan umum',
          paragraphs: [
            'Sarapan di Bukittinggi sering berupa nasi, roti, atau hidangan ringan khas Minangkabau. Warung dan kedai kecil di sekitar area wisata biasanya buka lebih awal untuk menyambut pengunjung.',
            'Cari berdasarkan kebutuhan: kebersihan tampak, informasi harga yang jelas, dan lokasi yang masuk akal dari rute Anda.',
          ],
        },
        {
          heading: 'Cara memilih secara netral',
          paragraphs: [
            'Periksa harga sebelum memesan dan tanyakan bahan bila memiliki alergi. Pilih tempat dengan praktik kebersihan yang terlihat baik.',
            'Sesuaikan dengan waktu: bila Anda datang pagi ke Taman Panorama, sarapan di area sekitar terlebih dahulu agar tidak terburu-buru.',
          ],
          callout: 'Panduan ini tidak mencantumkan nama restoran, alamat, atau harga tertentu karena belum diverifikasi. Cari di peta terkini dan tanyakan penjual.',
        },
      ],
      faqs: [
        { q: 'Di mana sarapan terdekat?', a: 'Gunakan peta hari perjalanan untuk menemukan warung di sekitar Taman Panorama; panduan ini tidak memverifikasi nama tertentu.' },
        { q: 'Apa hidangan pagi khas?', a: 'Nasi, roti, atau hidangan ringan Minangkabau. Tanyakan penjual untuk bahan dan harga.' },
        { q: 'Berapa kisaran harga?', a: 'Panduan ini tidak memverifikasi harga. Periksa dan tanyakan di tempat.' },
      ],
    },
    related: ['makan-siang-dekat-taman-panorama', 'kedai-kopi-dekat-ngarai-sianok', 'nasi-kapau-los-lambuang'],
  },
  {
    slug: 'makan-siang-dekat-taman-panorama',
    group: 'kuliner',
    ready: true,
    title: 'Makan Siang Dekat Taman Panorama Ngarai Sianok',
    description: 'Panduan netral mencari makan siang di sekitar Taman Panorama: jenis hidangan, tips memilih, dan menyambung rute.',
    content: {
      kicker: 'Kuliner siang',
      h1: 'Makan siang dekat Taman Panorama',
      lead: 'Setelah menikmati titik pandang, Anda mungkin ingin makan siang. Berikut panduan netral tanpa rekomendasi merek tertentu.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Opsi hidangan',
          paragraphs: [
            'Hidangan utama di Bukittinggi biasanya berbasis nasi dengan lauk Minangkabau. Warung dan rumah makan di sekitar pusat kota mudah ditemukan.',
            'Pilih berdasarkan kebersihan, informasi harga, kebutuhan diet, dan jarak dari rute Anda—tanpa preferensi merek tertentu.',
          ],
        },
        {
          heading: 'Menyambung rute',
          paragraphs: [
            'Bila Anda melanjutkan ke Jam Gadang atau Fort de Kock, cari makan siang di jalur tersebut agar tidak bolak-balik.',
            'Tanyakan bahan, porsi, dan harga kepada penjual sebelum memesan.',
          ],
          callout: 'Panduan ini tidak mencantumkan nama restoran atau harga tertentu karena belum diverifikasi. Gunakan peta terkini.',
        },
      ],
      faqs: [
        { q: 'Di mana makan siang terdekat?', a: 'Gunakan peta hari perjalanan; panduan ini tidak memverifikasi nama tertentu.' },
        { q: 'Hidangan apa yang umum?', a: 'Nasi dengan lauk Minangkabau. Tanyakan penjual untuk bahan dan harga.' },
        { q: 'Apakah ada tempat makan di dalam Taman Panorama?', a: 'Fasilitas belum diverifikasi; tanyakan petugas tentang ketersediaan warung di area.' },
      ],
    },
    related: ['sarapan-dekat-ngarai-sianok', 'nasi-kapau-los-lambuang', 'kedai-kopi-dekat-ngarai-sianok'],
  },
  {
    slug: 'itiak-lado-mudo',
    group: 'kuliner',
    ready: true,
    title: 'Itiak Lado Mudo: Hidangan Khas Minangkabau',
    description: 'Penjelasan kuliner tentang Itiak Lado Mudo (itik cabai hijau) sebagai hidangan Minangkabau, cara mengenalinya, dan tips mencari.',
    content: {
      kicker: 'Hidangan khas',
      h1: 'Itiak Lado Mudo',
      lead: 'Itiak Lado Mudo adalah hidangan Minangkabau berupa daging itik yang dimasak dengan cabai hijau. Ini salah satu masakan yang sering dicari di Bukittinggi.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Apa itu Itiak Lado Mudo',
          paragraphs: [
            'Nama berasal dari "itiak" (itik/bebek) dan "lado mudo" (cabai hijau). Hidangan ini dimasak dengan santan dan cabai hijau sehingga memberi rasa gurih pedas.',
            'Bagi pengunjung, ini adalah cara mengenal cita rasa Minangkabau yang khas. Tanyakan level pedas dan bahan penyedap bila perlu.',
          ],
        },
        {
          heading: 'Cara mencari secara netral',
          paragraphs: [
            'Hidangan ini tersedia di berbagai rumah makan Minangkabau di Bukittinggi. Pilih berdasarkan kebersihan, harga jelas, dan ulasan yang Anda percaya.',
            'Panduan ini tidak memverifikasi restoran tertentu atau harga. Tanyakan penjual tentang porsi dan harga sebelum memesan.',
          ],
          callout: 'Tidak ada restoran tertentu yang kami rekomendasikan. Cari di peta terkini dan verifikasi harga di tempat.',
        },
      ],
      faqs: [
        { q: 'Apa bedanya dengan gulai itik?', a: 'Perbedaan utama ada pada penggunaan cabai hijau segar而不是 cabai merah kering; rasa dan tampilan berbeda.' },
        { q: 'Di mana menemukannya?', a: 'Rumah makan Minangkabau di Bukittinggi. Panduan ini tidak memverifikasi nama tertentu.' },
        { q: 'Pedasnya bisa disesuaikan?', a: 'Tergantung penjual; tanyakan level pedas saat memesan.' },
      ],
    },
    related: ['nasi-kapau-los-lambuang', 'makan-siang-dekat-taman-panorama', 'oleh-oleh-khas-bukittinggi'],
  },
  {
    slug: 'nasi-kapau-los-lambuang',
    group: 'kuliner',
    ready: true,
    title: 'Nasi Kapau & Los Lambuang Bukittinggi',
    description: 'Penjelasan tentang Nasi Kapau dan Los Lambuang sebagai hidangan dan tradisi makan di Bukittinggi, serta tips netral mencari.',
    content: {
      kicker: 'Hidangan & tradisi',
      h1: 'Nasi Kapau & Los Lambuang',
      lead: 'Nasi Kapau dan Los Lambuang adalah bagian dari tradisi hidangan Minangkabau di Bukittinggi. Keduanya sering dicari pengunjung.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Nasi Kapau',
          paragraphs: [
            'Nasi Kapau merujuk pada hidangan nasi dengan beragam lauk khas Kapau, disajikan secara bertingkat di etalase. Pengunjung memilih lauk sesuai selera.',
            'Ciri khasnya adalah lauk beragam dengan kuah gulai. Tanyakan isi dan harga tiap lauk sebelum menyusun piring.',
          ],
        },
        {
          heading: 'Los Lambuang',
          paragraphs: [
            'Los Lambuang adalah nama yang sering dikaitkan dengan tradisi makan di Bukittinggi. Panduan ini tidak memverifikasi restoran tertentu yang memakai nama itu.',
            'Cari berdasarkan kebersihan, harga jelas, dan lokasi yang masuk akal dari rute Anda.',
          ],
          callout: 'Panduan ini tidak mencantumkan nama restoran, alamat, atau harga tertentu karena belum diverifikasi. Verifikasi di tempat.',
        },
      ],
      faqs: [
        { q: 'Apa itu Nasi Kapau?', a: 'Hidangan nasi dengan beragam lauk gulai khas Kapau, disajikan bertingkat. Pilih lauk sesuai selera.' },
        { q: 'Di mana menemukannya?', a: 'Rumah makan Padang/Minangkabau di Bukittinggi. Panduan ini tidak memverifikasi nama tertentu.' },
        { q: 'Berapa harga?', a: 'Tergantung lauk; tanyakan dan periksa harga sebelum memesan.' },
      ],
    },
    related: ['itiak-lado-mudo', 'makan-siang-dekat-taman-panorama', 'oleh-oleh-khas-bukittinggi'],
  },
  {
    slug: 'kedai-kopi-dekat-ngarai-sianok',
    group: 'kuliner',
    ready: true,
    title: 'Kedai Kopi Dekat Ngarai Sianok & Bukittinggi',
    description: 'Panduan netral menemukan kedai kopi di sekitar Taman Panorama dan Bukittinggi, serta budaya kopi lokal.',
    content: {
      kicker: 'Kopi',
      h1: 'Kedai kopi dekat Ngarai Sianok',
      lead: 'Bukittinggi memiliki budaya kopi yang hidup. Berikut panduan netral menemukan kedai kopi tanpa rekomendasi merek tertentu.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Budaya kopi lokal',
          paragraphs: [
            'Sumatera Barat memiliki tradisi kopi yang kuat. Kedai kopi di Bukittinggi menjadi tempat beristirahat sekaligus menikmati kopi lokal.',
            'Tanyakan asal biji dan cara penyajian bila tertarik; banyak kedai menyajikan kopi tubruk maupun seduh.',
          ],
        },
        {
          heading: 'Menemukan kedai secara netral',
          paragraphs: [
            'Gunakan peta hari perjalanan untuk menemukan kedai di sekitar area wisata dan pusat kota. Pilih berdasarkan kenyamanan, harga, dan ulasan yang Anda percaya.',
            'Panduan ini tidak memverifikasi nama kedai atau harga tertentu.',
          ],
          callout: 'Tidak ada kedai tertentu yang kami rekomendasikan. Cari di peta terkini dan verifikasi jam serta harga di tempat.',
        },
      ],
      faqs: [
        { q: 'Di mana kedai kopi terdekat?', a: 'Gunakan peta hari perjalanan; panduan ini tidak memverifikasi nama tertentu.' },
        { q: 'Kopi apa yang khas?', a: 'Kopi lokal Sumatera Barat; tanyakan penyajian di kedai.' },
        { q: 'Buka pagi?', a: 'Tergantung kedai; verifikasi jam di tempat.' },
      ],
    },
    related: ['sarapan-dekat-ngarai-sianok', 'makan-siang-dekat-taman-panorama', 'oleh-oleh-khas-bukittinggi'],
  },
  {
    slug: 'oleh-oleh-khas-bukittinggi',
    group: 'kuliner',
    ready: true,
    title: 'Oleh-oleh Khas Bukittinggi: Keripik Sanjai & Lainnya',
    description: 'Panduan netral oleh-oleh khas Bukittinggi seperti keripik sanjai, serta tips membeli dan memverifikasi keaslian.',
    content: {
      kicker: 'Oleh-oleh',
      h1: 'Oleh-oleh khas Bukittinggi',
      lead: 'Keripik sanjai adalah salah satu oleh-oleh paling dikenal dari Bukittinggi. Berikut panduan netral berbelanja.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Keripik sanjai',
          paragraphs: [
            'Keripik sanjai terbuat dari singkong yang diiris tipis dan digoreng, sering dengan baluran pedas atau manis. Ini oleh-oleh khas yang mudah dibawa.',
            'Beli di toko oleh-oleh atau pasar tradisional. Periksa kemasan, kebersihan, dan tanggal produksi bila penting bagi Anda.',
          ],
        },
        {
          heading: 'Tips membeli',
          paragraphs: [
            'Bandingkan harga antartoko, tanyakan komposisi (terutama bila ada alergi), dan simpan dengan baik agar tidak hancur dalam perjalanan.',
            'Selain sanjai, Bukittinggi juga dikenal dengan beragam makanan kering dan kerajinan. Pilih sesuai kebutuhan, bukan karena ajakan saja.',
          ],
          callout: 'Panduan ini tidak memverifikasi toko tertentu atau harga. Belanja berdasarkan kebutuhan dan verifikasi di tempat.',
        },
      ],
      faqs: [
        { q: 'Apa oleh-oleh paling khas?', a: 'Keripik sanjai adalah yang paling dikenal. Ada pula ragam makanan kering dan kerajinan.' },
        { q: 'Di mana membeli?', a: 'Toko oleh-oleh atau pasar tradisional Bukittinggi. Panduan ini tidak memverifikasi toko tertentu.' },
        { q: 'Bagaimana menjaga keaslian?', a: 'Bandingkan harga, periksa kemasan dan tanggal, serta beli di tempat yang tampak terpercaya.' },
      ],
    },
    related: ['koto-gadang', 'nasi-kapau-los-lambuang', 'itiak-lado-mudo'],
  },

  // ===================== E. RUTE & ITINERARI =====================
  {
    slug: 'rute-taman-panorama-lubang-japang',
    group: 'rintis',
    ready: true,
    title: 'Rute Taman Panorama + Lubang Japang',
    description: 'Susunan rute mengunjungi Taman Panorama dan Lubang Japang: urutan, waktu, dan mengapa akses terowongan perlu dikonfirmasi.',
    content: {
      kicker: 'Rute singkat',
      h1: 'Rute Taman Panorama + Lubang Japang',
      lead: 'Karena keduanya sering digabung dalam satu entri Dinas Pariwisata, menyusun rute bersama masuk akal—asalkan Anda verifikasi akses terowongan.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Urutan yang masuk akal',
          paragraphs: [
            'Mulai dari Taman Panorama untuk menikmati titik pandang dan membaca plang edukasi. Tanyakan petugas apakah Lubang Japang sedang dibuka dan bagaimana aksesnya.',
            'Bila terowongan tersedia, ikuti jalur, interpretasi, dan arahan petugas. Jangan asumsikan tiket taman otomatis mencakup terowongan.',
          ],
        },
        {
          heading: 'Waktu',
          paragraphs: [
            'Alokasikan 45–90 menit untuk taman. Tambahkan waktu terpisah bila terowongan dibuka, tergantung antrean dan kondisi hari itu.',
            'Bawa air minum dan jas hujan lipat. Awasi anak di dekat tebing.',
          ],
          callout: 'Jangan menyamakan jam dan tiket taman dengan terowongan. Verifikasi status hari H sebelum datang.',
        },
      ],
      faqs: [
        { q: 'Apakah bisa langsung ke terowongan dari taman?', a: 'Tergantung akses hari itu. Tanyakan petugas; jangan asumsikan satu tiket mencakup keduanya.' },
        { q: 'Berapa total waktu?', a: '45–90 menit untuk taman, plus waktu terpisah bila terowongan dibuka.' },
        { q: 'Cocok untuk anak?', a: 'Taman ya, asal diawasi di tebing. Terowongan butuh konfirmasi dan pengawasan ketat.' },
      ],
    },
    related: ['tiket-taman-panorama', 'jam-buka-taman-panorama', 'lubang-japang', 'durasi-kunjungan-ngarai-sianok'],
  },
  {
    slug: 'wisata-setengah-hari-ngarai-sianok-jam-gadang',
    group: 'rintis',
    ready: true,
    title: 'Wisata Setengah Hari: Ngarai Sianok + Jam Gadang',
    description: 'Rute setengah hari menggabungkan Taman Panorama Ngarai Sianok dan Jam Gadang dengan urutan, waktu, dan istirahat.',
    content: {
      kicker: 'Setengah hari',
      h1: 'Setengah hari: Ngarai Sianok + Jam Gadang',
      lead: 'Dua ikon Bukittinggi ini bisa dikunjungi dalam setengah hari bila disusun dengan urutan yang masuk akal.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Saran urutan',
          paragraphs: [
            'Datang pagi ke Taman Panorama untuk cahaya dan ruang lebih baik, alokasikan 45–90 menit. Lalu menuju Jam Gadang di pusat kota untuk foto landmark dan istirahat.',
            'Gunakan navigasi ke pin Taman Panorama, bukan ke nama ngarai umum, agar tidak tertukar dengan titik pandang lain.',
          ],
        },
        {
          heading: 'Waktu dan istirahat',
          paragraphs: [
            'Sisipkan makan ringan atau kopi di antara keduanya. Periksa lalu lintas pusat kota yang bisa padat saat ramai.',
            'Bila membawa anak atau lansia, beri waktu istirahat lebih banyak dan hindari terburu-buru.',
          ],
          callout: 'Jarak dan waktu tempuh antarkeduanya belum diverifikasi; rencanakan dari peta hari perjalanan dan berangkat lebih awal.',
        },
      ],
      faqs: [
        { q: 'Cukupkah 4–5 jam?', a: 'Umumnya cukup untuk dua titik dengan istirahat, asal tidak antre lama. Sesuaikan dengan kondisi hari itu.' },
        { q: 'Mulai dari mana?', a: 'Pagi di Taman Panorama lalu Jam Gadang lebih masuk akal untuk cahaya dan keramaian.' },
        { q: 'Bisa ditambah Fort de Kock?', a: 'Bisa bila waktu mencukupi; verifikasi jarak di peta.' },
      ],
    },
    related: ['jam-gadang', 'dari-jam-gadang-ke-panorama', 'durasi-kunjungan-ngarai-sianok', 'wisata-sejarah-setengah-hari'],
  },
  {
    slug: 'wisata-sejarah-setengah-hari',
    group: 'rintis',
    ready: true,
    title: 'Wisata Sejarah Setengah Hari di Bukittinggi',
    description: 'Rute sejarah menghubungkan Jam Gadang, Fort de Kock, Jembatan Limpapeh, dan Rumah Kelahiran Bung Hatta dengan catatan verifikasi.',
    content: {
      kicker: 'Rute sejarah',
      h1: 'Wisata sejarah setengah hari',
      lead: 'Bukittinggi kaya akan lapis sejarah. Rute ini menghubungkan beberapa titik tanpa mengklaim satu tiket mencakup semuanya.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Titik yang bisa dihubungkan',
          paragraphs: [
            'Jam Gadang sebagai patokan awal, lalu Fort de Kock dan Jembatan Limpapeh sebagai jalur berdekatan, serta Rumah Kelahiran Bung Hatta sebagai tujuan edukasi.',
            'Alamat, jarak, tiket, dan jam buka masing-masing belum diverifikasi oleh panduan ini. Periksa peta dan pengelola untuk setiap titik.',
          ],
        },
        {
          heading: 'Menyusun waktu',
          paragraphs: [
            'Alokasikan waktu per titik dan sisipkan istirahat. Jangan menganggap semua objek bersejarah dalam satu area atau satu tiket.',
            'Gunakan transportasi daring atau taksi bila jarak antartitik terasa jauh setelah Anda verifikasi di peta.',
          ],
          callout: 'Rute ini adalah saran susunan, bukan jaminan lokasi dekat atau akses terkini. Verifikasi tiap tujuan secara terpisah.',
        },
      ],
      faqs: [
        { q: 'Berapa titik dalam rute ini?', a: 'Empat titik umum: Jam Gadang, Fort de Kock, Jembatan Limpapeh, Rumah Kelahiran Bung Hatta. Verifikasi masing-masing.' },
        { q: 'Apakah satu tiket?', a: 'Tidak. Panduan ini tidak memverifikasi tiket gabungan; tiap objek butuh konfirmasi sendiri.' },
        { q: 'Cukup setengah hari?', a: 'Tergantung jarak dan antrean yang Anda verifikasi di peta.' },
      ],
    },
    related: ['jam-gadang', 'benteng-fort-de-kock', 'jembatan-limpapeh', 'rumah-kelahiran-bung-hatta'],
  },
  {
    slug: 'wisata-sehari-ngarai-sianok-koto-gadang',
    group: 'rintis',
    ready: true,
    title: 'Wisata Sehari: Ngarai Sianok + Koto Gadang',
    description: 'Rute sehari menggabungkan Taman Panorama dan Koto Gadang, dengan catatan bahwa keduanya berada di sisi lembah yang berbeda.',
    content: {
      kicker: 'Sehari penuh',
      h1: 'Sehari: Ngarai Sianok + Koto Gadang',
      lead: 'Rute ini menggabungkan pemandangan alam dan budaya kerajinan dalam satu hari.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Dua sisi lembah',
          paragraphs: [
            'Taman Panorama dan Koto Gadang berada di sisi lembah yang berbeda. Jarak, rute, dan waktu tempuh belum diverifikasi; periksa peta hari perjalanan.',
            'Mulai dari Taman Panorama pagi hari, lalu lanjut ke Koto Gadang untuk melihat kerajinan perak dan budaya nagari.',
          ],
        },
        {
          heading: 'Waktu dan logistik',
          paragraphs: [
            'Siapkan waktu istirahat dan makan di antara. Bawa uang tunai untuk belanja kerajinan dan tanyakan keaslian serta harga di tempat.',
            'Gunakan transportasi yang Anda verifikasi tersedia untuk menyeberangi lembah.',
          ],
          callout: 'Rute ini adalah saran susunan; jarak dan akses belum diverifikasi. Verifikasi di peta sebelum berangkat.',
        },
      ],
      faqs: [
        { q: 'Berapa lama total?', a: 'Satu hari penuh dengan istirahat. Waktu tempuh antarsisi lembah belum diverifikasi.' },
        { q: 'Bisa naik janjang Koto Gadang?', a: 'Janjang butuh tenaga; pertimbangkan kondisi fisik dan hindari saat hujan licin.' },
        { q: 'Apa oleh-oleh?', a: 'Kerajinan perak Koto Gadang. Verifikasi keaslian dan harga di tempat.' },
      ],
    },
    related: ['koto-gadang', 'janjang-koto-gadang', 'durasi-kunjungan-ngarai-sianok', 'wisata-sehari-pertama-bukittinggi'],
  },
  {
    slug: 'wisata-sehari-pertama-bukittinggi',
    group: 'rintis',
    ready: true,
    title: 'Rute Sehari Pertama di Bukittinggi',
    description: 'Saran rute pertama kali ke Bukittinggi yang mencakup Taman Panorama, Jam Gadang, dan kuliner, dengan verifikasi jarak.',
    content: {
      kicker: 'Untuk pertama kali',
      h1: 'Sehari pertama di Bukittinggi',
      lead: 'Bagi pengunjung perdana, rute ini memberi gambaran utama kota: alam, landmark, dan cita rasa lokal.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Susunan dasar',
          paragraphs: [
            'Pagi: Taman Panorama untuk pemandangan ngarai (45–90 menit). Siang: Jam Gadang dan makan khas Minangkabau di pusat kota. Sore: keliling singkat atau belanja oleh-oleh.',
            'Sesuaikan dengan cuaca dan energi. Jangan memaksakan terlalu banyak titik dalam satu hari.',
          ],
        },
        {
          heading: 'Tips pertama kali',
          paragraphs: [
            'Verifikasi rute dan lalu lintas di peta hari perjalanan. Datang lebih awal untuk menghindari kerumunan di pusat kota.',
            'Gunakan titik pandang resmi (Taman Panorama)而非 nama ngarai umum saat navigasi.',
          ],
          callout: 'Jarak dan waktu antartitik belum diverifikasi; rencanakan dari peta dan berangkat lebih awal.',
        },
      ],
      faqs: [
        { q: 'Cukup satu hari untuk Bukittinggi?', a: 'Cukup untuk gambaran utama. Perlu hari lebih bila ingin mendalam ke tiap objek.' },
        { q: 'Mulai dari mana?', a: 'Taman Panorama pagi lalu pusat kota untuk Jam Gadang dan kuliner.' },
        { q: 'Wajib ke Ngarai Sianok?', a: 'Sangat disarankan sebagai ikon alam Bukittinggi; Taman Panorama adalah titik pandang utamanya.' },
      ],
    },
    related: ['wisata-sehari-ngarai-sianok-koto-gadang', 'wisata-setengah-hari-ngarai-sianok-jam-gadang', 'dari-padang-ke-ngarai-sianok'],
  },
  {
    slug: 'rute-keluarga-ngarai-sianok',
    group: 'rintis',
    ready: true,
    title: 'Rute Keluarga ke Ngarai Sianok',
    description: 'Rute ramah keluarga ke Taman Panorama dengan perhatian keamanan tebing, fasilitas, dan istirahat.',
    content: {
      kicker: 'Rute keluarga',
      h1: 'Rute keluarga Ngarai Sianok',
      lead: 'Taman Panorama bisa dikunjungi keluarga asal pengawasan di tebing dijaga dan waktu disusun santai.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Susunan ramah anak',
          paragraphs: [
            'Datang pagi agar tidak terlalu panas. Alokasikan 45–90 menit di titik pandang dengan istirahat cukup.',
            'Awasi anak di dekat tebing setiap saat. Bawa air minum, topi, dan jas hujan lipat.',
          ],
        },
        {
          heading: 'Fasilitas dan makan',
          paragraphs: [
            'Tanyakan lokasi toilet dan mushala yang aktif saat tiba. Sisipkan makan ringan di antara kunjungan.',
            'Jangan beri makan kera yang mungkin dijumpai; simpan makanan di tas.',
          ],
          callout: 'Saran waktu adalah perkiraan perencanaan. Fasilitas harus dikonfirmasikan kepada petugas.',
        },
      ],
      faqs: [
        { q: 'Aman untuk balita?', a: 'Aman di area pandang yang diizinkan asal diawasi ketat di tebing.' },
        { q: 'Ada toilet?', a: 'Papan petunjuk Mei 2026 menyebutnya; konfirmasikan ketersediaan saat tiba.' },
        { q: 'Berapa lama cukup?', a: '45–90 menit untuk taman biasanya cukup untuk keluarga.' },
      ],
    },
    related: ['ngarai-sianok-anak', 'fasilitas-taman-panorama', 'ngarai-sianok-lansia-akses'],
  },
  {
    slug: 'wisata-pengganti-hujan-bukittinggi',
    group: 'rintis',
    ready: true,
    title: 'Wisata Pengganti Saat Hujan di Bukittinggi',
    description: 'Opsi kunjungan indoor di Bukittinggi bila hujan deras, dengan catatan bahwa Taman Panorama tetap bisa dikunjungi saat hujan ringan.',
    content: {
      kicker: 'Rute cuaca',
      h1: 'Pengganti hujan di Bukittinggi',
      lead: 'Saat hujan deras, geser ke opsi yang lebih terlindung. Taman Panorama sendiri masih bisa dikunjungi saat hujan ringan.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Bila hujan deras',
          paragraphs: [
            'Pertimbangkan museum atau area tertutup seperti Rumah Kelahiran Bung Hatta, atau menjelajah kuliner dan kerajinan di pusat kota.',
            'Alamat, jam, dan akses setiap opsi belum diverifikasi; periksa peta dan pengelola sebelum pergi.',
          ],
        },
        {
          heading: 'Taman Panorama saat hujan ringan',
          paragraphs: [
            'Hujan ringan masih memungkinkan kunjungan dengan jas hujan dan hati-hati permukaan licin. Kabut bisa menutup pandangan—nikmati sebagai suasana.',
            'Hujan lebat di area tebing sebaiknya ditunda. Utamakan ruang aman dan arahan petugas.',
          ],
          callout: 'Jangan mengambil risiko di tebing demi foto saat cuaca buruk. Pilih opsi terlindung bila perlu.',
        },
      ],
      faqs: [
        { q: 'Boleh ke Ngarai Sianok saat hujan?', a: 'Hujan ringan bisa; hujan lebat sebaiknya ditunda di area tebing.' },
        { q: 'Opsi indoor apa?', a: 'Museum seperti Rumah Kelahiran Bung Hatta atau kuliner/kerajinan kota. Verifikasi masing-masing di peta.' },
        { q: 'Apakah kabut menutup pandangan?', a: 'Sering ya; itu wajar di lanskap pegunungan.' },
      ],
    },
    related: ['ngarai-sianok-saat-hujan', 'wisata-kabut-ngarai-sianok', 'rumah-kelahiran-bung-hatta'],
  },
  {
    slug: 'rute-foto-pagi-ngarai-sianok',
    group: 'rintis',
    ready: true,
    title: 'Rute Foto Pagi di Ngarai Sianok',
    description: 'Rute pagi untuk fotografer ke Taman Panorama: waktu, cahaya, perlengkapan, dan etika memotret.',
    content: {
      kicker: 'Rute foto',
      h1: 'Rute foto pagi Ngarai Sianok',
      lead: 'Pagi memberi cahaya lembut dan ruang lebih baik untuk memotret lembah sebelum kabut siang turun.',
      updated: UPDATED,
      sections: [
        {
          heading: 'Mengapa pagi',
          paragraphs: [
            'Cahaya pagi dari timur memberi kontras tebing yang bagus. Area biasanya lebih sepi sehingga lebih nyaman membidik.',
            'Datang mendekati awal jam operasional Taman Panorama. Verifikasi jam melalui peta dan pengelola karena dua sumber berbeda.',
          ],
        },
        {
          heading: 'Perlengkapan dan etika',
          paragraphs: [
            'Bawa air minum, jas hujan lipat, dan alas kaki nyaman. Gunakan mode HDR bila kamera mendukung karena kontras langit–lembah tinggi.',
            'Jangan memotret di luar pagar demi sudut. Hormati pengunjung lain dan jangan ganggu satwa.',
          ],
          callout: 'Semua foto terbaik diambil dari area pandang yang diizinkan. Keselamatan lebih utama dari framing.',
        },
      ],
      faqs: [
        { q: 'Jam berapa terbaik?', a: 'Mendekati awal jam operasional Taman Panorama; verifikasi karena dua sumber berbeda.' },
        { q: 'Perlu tripod?', a: 'Opsional. Area bisa berangin; pegang kamera stabil bila tidak pakai tripod.' },
        { q: 'Boleh drone?', a: 'Periksa aturan pengelola dan regulasi penerbangan setempat sebelum terbang.' },
      ],
    },
    related: ['spot-foto-ngarai-sianok', 'panduan-foto-ngarai-sianok', 'waktu-terbaik-ngarai-sianok'],
  },
];

// ---------- Helper functions ----------
export function topicExists(slug: string): boolean {
  return TOPICS.some((t) => t.slug === slug && t.ready);
}

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug && t.ready);
}

export function topicSlugs(): string[] {
  return TOPICS.filter((t) => t.ready).map((t) => t.slug);
}

export function getTopicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.ready && t.group === group);
}

export const REVIEWED_RATING = RATING;
export const ADDRESS_TAMAN_PANORAMA = TAMAN_PANORAMA;
