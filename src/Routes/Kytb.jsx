import { ChakraProvider, extendTheme, Box, Text } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const theme = extendTheme({
  fonts: {
    body: "DM Sans, sans-serif",
    heading: "DM Sans, sans-serif",
  },
});

const Krndn = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <NavBar />

        <Box padding="2rem">
          <Box
            paddingX={{ base: "1rem", md: "3rem", lg: "6rem" }}
            marginBottom="2rem"
          >
            <Text fontFamily="heading" fontSize={{ base: "2rem", md: "3rem" }}>
              Kerinduan yang tak <em>bertuan</em>
            </Text>
            <br />
            <Box
              margin="1rem"
              fontSize={{ base: "1rem", md: "1.2rem" }}
              textAlign="justify"
            >
              <Text className="paragraf1" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuaca hari ini dipenuhi rinai
                hujan lebat tak berspasi. Terus saja tergurai airnya tanpa
                henti. Beberapa hari ini Aku memimpikanmu tak hanya sekali.
              </Text>
              <br />
              <Text className="paragraf2" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerinduan yang tak bertuan..{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Rupanya semesta mengetahui banyaknya
                rindu tak terucap melalui jutaan bahkan milyaran tetesan air
                hujan. Aku mulai bertanya pada hati, apakah di sana Kau pernah
                merasakan kerinduan yang sama denganku walau hanya sekali?
              </Text>{" "}
              <br />
              <Text
                className="kalimat"
                as="p"
                fontSize={{ base: "0.8rem", md: "1.2rem" }}
                paddingLeft={{ base: "0.5rem", md: "5rem" }}
                paddingRight={{ base: "0.5rem", md: "3rem" }}
                fontFamily="body"
                fontStyle="italic"
              >
                "Kerinduan rasanya penuh dengan kecurangan, <br /> selalu saja
                dapat bertambah namun tak bisa dikurangi."
              </Text>
              <br />
              <Text className="paragraf3" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerinduan yang tak bertuan memang
                sudah lahap memakan hati, semakin lama semakin tak tersisa. Aku
                terus berpikir bagaimana hari-harimu kini Kau jalani. Apakah Kau
                menemukan kisah baru yang jauh lebih menyenangkan di kota ibu
                Pertiwi? Bertemu seseorang yang Kau senangi tulus dari lubuk
                hati. Atau seseorang yang membuat beban di kedua pundakmu tak
                terasa lagi. Seseorang yang mampu menaklukan hatimu yang Kau
                kelilingi duri.
              </Text>
              <br />
              <Text className="paragraf5" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Aku menari-nari di atas
                sajak ini sambil membawa sekuntum bunga Matahari. Sambil
                memejamkan mata Aku pun tersenyum. Bayang-bayang itu mulai
                datang lagi.
              </Text>{" "}
              <br />
              <Text className="paragraf6" as="p" fontFamily="body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerinduan tak bertuan. Rasa
                ini akan terus kubawa dalam hati. Sambil menjalani hari seolah
                tak sabar menunggu semesta mempertemukan lagi. Potongan momen
                manis yang kusimpan ini hanya Aku dan Kau yang bisa{" "}
                <em>memahami</em>.
              </Text>{" "}
              <br />
            </Box>
          </Box>
        </Box>
        <Footer />
      </>
    </ChakraProvider>
  );
};

export default Krndn;
