import { ChakraProvider, extendTheme, Box, Text } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Box, Text } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "DM Sans, sans-serif",
  },
});

const Mfis = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <NavBar />
        <audio src="audio/sound.mp3" autoPlay loop></audio>
        <Box padding="2rem">
          <Box
            paddingX={{ base: "1rem", md: "3rem", lg: "6rem" }}
            marginBottom="2rem"
          >
            <Text
              fontFamily="heading"
              fontSize={{ base: "2rem", md: "3rem" }}
              textDecoration="underline"
            >
              My Friend <br />
              &nbsp;&nbsp;&nbsp; is Sunshine
            </Text>
            <Box
              margin="1rem"
              fontSize={{ base: "1rem", md: "1.2rem" }}
              textAlign="justify"
            >
              <Text
                className="paragraf1"
                as="p"
                fontStyle="italic"
                fontFamily="body"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Setiap manusia melewati proses
                kehidupan yang metaforis. Bagaimana mereka bermula dari sampah
                tanpa tuan, hingga menjadi berlian sempurna yang didambakan
                banyak orang.
              </Text>
              <br></br>
              <Text
                className="kalimat"
                as="p"
                fontSize={{ base: "0.8rem", md: "1.2rem" }}
                paddingLeft={{ base: "0.5rem", md: "1rem" }}
                paddingRight={{ base: "0.5rem", md: "3rem" }}
                fontFamily="body"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metafora : Proses Tahapan
                Kehidupan <br />
                +Ulat : Dalam Keadaan Jatuh : Fitnah, Benci, Ejekan dan Dianggap
                Sampah. <br />
                +Kepompong : Proses Kebangkitan : Antusiasme, Optimisme Besar,
                Pengakuan Masih Pudar, Didukung Tanpa Modal Apapun. <br />
                +Kupu-kupu : Sukses : Pasti sebuah sosok atau mimpi
              </Text>
              <br />
              <Text
                className="pkalimat"
                as="p"
                fontSize={{ base: "0.8rem", md: "1.2rem" }}
                paddingLeft={{ base: "0.5rem", md: "1rem" }}
                fontStyle="italic"
                fontFamily="body"
              >
                -Sugeng Rianto-
              </Text>
              <br />
              <Text className="paragraf2" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pagi ini masih sama dengan
                pagi-pagi sebelumnya. Aku terduduk di halaman depan dengan
                sandal jepit yang aku taruh tidak jauh dari posisiku biasanya.
                Aku memeluk kedua lututku di sana. Tepatnya di depan pot-pot
                bunga hias yang menemaniku berbincang dan menggerutu mengenai
                masalah dan berbagai pikiran <em>absurd</em> yang menjumpaiku
                setiap harinya. Mulanya, sinar matahari, temanku. Masih malu
                menunjukkan kehangatannya saat itu juga. Tak heran, ini masih
                pukul 07.05 pagi dan dia baru saja terbangun dan bersiap
                melenggang ke arah barat. Dengan badan yang masih bercampur
                dengan mata air di pagi hari, rasa dingin yang menyapa serta
                angin pagi jalanan yang masih sepi, membuatku menggigil. Seolah
                memberi tanda bahwa tubuh ini merespon hawa segar dan dingin
                yang menyatu. Sembari menunggunya memancarkan kehangatannya, aku
                mencoba memerhatikan sekitar sambil menggerutu. “Hmm, oke. Ini
                masih sepi. Tugas-tugasku juga sudah selesai, bantu masak juga
                sudah, lalu apalagi?” berhenti disitu, aku pun memperhatikan
                tiang besi pagar yang berdiri mandiri di sana. Kupikir akan
                terasa nyaman jika menunggu sedikit lebih panas sambil bersandar
                di sana. Tak perlu waktu lama, aku pun langsung memindahkan
                posisiku, kini lebih jauh dari sepasang sandal jepit yang masih
                sedikit basah karena aktivitasku di pagi hari. Kurasa, ini juga
                menjadi salah satu manfaatku berjemur. Sandal jepitku juga akan
                menjadi kering dan hangat. Aku sedikit menyukai sensasi saat
                mengenakannya ketika panas, hahaha. Tapi kadang aku teringat
                dengan saran seseorang untuk tidak menempatkan sandal jepit ke
                sinar matahari langsung. Karena dia berbahan dasar karet, maka
                lama kelamaan akan memuai. Ngomong-ngomong, ini sudah pukul
                07.30 pagi. Sinarnya mulai memancar dengan suhu yang lebih
                tinggi ke arahku. Aku dapat merasakan kehangatannya yang mulai
                menembus ke dalam lapisan kulitku. Nyaman. Tenang. Sambil
                memejamkan mata, aku mengucap rasa syukur di dalam hatiku,
                “Terima kasih, Tuhan dan Alam semesta. Karena masih mengizinkan
                sinar mentari menemaniku dalam kesendirianku.”
              </Text>
              <Text className="paragraf3" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dan akupun mulai hanyut ke
                dalam suasana damai. Aku merasakan kehangatannya menemani jiwaku
                berbincang. Rasa syukur yang tak terucap terus bersuara. Aku
                mulai bernyanyi sendirian untuk mengisi kekosongan di sekitarku.
                Sembari benyanyi kecil, aku mulai memikirkan kesalahan-kesalahan
                dan perbuatan-perbuatan yang seharusnya tidak kulakukan dimasa
                lalu. Bahkan sesekali aku mengecap diriku <em>bodoh</em>, karena
                sudah melakukannya. Rasa malu yang dicampur perasaan tidak
                nyaman membuatku merutuk. Saking fokusnya memikirkan
                kesalahanku, aku bahkan sampai berhenti dari nyanyianku. “Kok
                bisa, ya? Aku berpikir begitu?” Atau “Kok bisa, ya? Aku
                melakukan itu tanpa memikirkan dampaknya dulu?” dan “Kenapa
                nggak terus terang aja, sih? Kenapa harus bohong?” dan
                kenapa-kenapa lainnya. Terus menyalahkan diriku sendiri, walau
                bisa dikatakan aku tidak sepenuhnya salah. Aku selalu memikirkan
                semua masalahku dari saat aku kecil hingga sekarang bahkan
                parahnya bisa di setiap waktu di setiap kegiatanku. Aku
                memikirkannya secara mendalam dan berlebihan. Akibatnya,
                kecemasan dan kecurigaan akan suatu hal semakin parah bahkan
                yang notabene-nya bukan urusanku dan masalahku atau tanggung
                jawabku. Sejujurnya, itu sangat menggangguku. Membuatku bingung
                dan ragu dalam setiap tindakanku. Tidak fokus. Bahkan cenderung
                berubah-ubah. Moodku pun tidak ketinggalan merasakan dampaknya.
                Bisa saja aku bersemangat pagi ini, namun karena terus
                memikirkan hal yang tidak seharusnya, aku jadi sedih, lelah,
                kesal dengan orang-orang disekitarku sehingga lebih memilih
                menyendiri. Ditambah, dengan wajahku yang dari lahir terlihat
                tidak bersahabat-ibuku mencoba mengukir alisku saat aku masih
                bayi dan dia terkejut bahkan tertawa melihat karyanya saat aku
                beranjak dewasa-maka akan semakin banyak orang-orang yang akan
                lebih mudah membenciku dengan cepat. Dan yah, aku sudah mulai
                terbiasa.
              </Text>
              <Text className="paragraf5" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Oke, kembali ke{" "}
                <em>scene</em> berjemur. Ngomong-ngomong, ini sudah setahun
                berlalu sejak terakhir kali aku memeluk lututku sambil tersenyum
                ke arah matahari. Kali ini aku tak sembari memeluk lutut, tapi
                tengah melangkahkan kaki dipinggir jalanan komplek yang sepi.
                Ini masih pukul 05.45 pagi, lihat, bahkan mentari pun masih
                bersembunyi. “Duh, aku lapar..” batinku yang menahan keroncong
                itu terus mengulang eluhan sambil melebarkan pandang,
                kalau-kalau ada Warung nasi sudah pasti aku serbu. Dengan
                catatan, harus murah juga tentunya. Hahaha.
              </Text>{" "}
              <br />
              <Text className="paragraf6" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kini, gadis yang sudah{" "}
                <em>bisa</em> cari uang sendiri itu terus memikirkan nasibnya
                langkah demi langkah. Mengkhawatirkan setiap hasil keputusan
                yang sudah dia buat sebelumnya. Satu tahun pun telah berlalu
                untuk yang kedua kalinya. Kegelisahan, rasa takut, pesimis bisa
                ini dan itu. Pada akhirnya mampu Ia lepaskan. Rantai lingkaran
                setan pun berhasil dilepas satu per satu. Walau tak ditemani
                Mentari, gadis itu sudah dikuatkan dengan banyaknya malaikat
                penjaga bersamanya. Do’a dan pengharap tulus dari dalam lubuk
                hatinya, berhasil menariknya dari sarang iba dan kemalangan yang
                tertancap di dalam alam bawah sadarnya. Gadis itu mulai memahami
                dirinya. Ia mempelajari bagaimana semesta bekerja. Ia berusaha
                membuat kolase cerita dengan warna di sayapnya. Inilah tahap
                persiapan menjadi kupu-kupu yang sudah Ia tunggu-tunggu sedari
                dulu. Yang mulanya tampak bias bak awan yang tak dapat di gapai
                tangan kecilnya, Ia mencoba dengan sepenuh hati menjalaninya.
                Tak dirasa kepahitan demi kepahitan terbayar dengan karma baik
                yang menunggunya. Terasa samar dan manis. Ia telah menuai yang
                Ia tanam. Sekali lagi, tak ada yang tahu apa rahasia semesta.
                Bagaimana semesta menuntun manusia pada bait kehidupannya.
              </Text>{" "}
              <br />
              <Text className="paragraf6" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Harapan yang terus terpatri
                dalam hati kecil gadis ini selalu meyakini bahwa keajaiban,
                keberuntungan, dan kasih sayang semesta selalu berpihak
                kepadanya. Boleh saja pada masa sebelumnya Ia nampak luluh
                lantah, disemai, di gembleng dengan cara semesta. Namun adapun
                masanya Ia berhak atas hasil bagaimana semesta mendidiknya.
              </Text>
            </Box>
          </Box>
        </Box>
        <Footer />
      </>
    </ChakraProvider>
  );
};

export default Mfis;
