import type { NextPage } from "next";
import Header from "../components/Header/Header";
import HomeMain from "../components/home/Home";
import Footer from "../components/Footer/footer";
import PriceMain from "../components/Price/PriceMain";
import Header1 from "../components/Header/Header1";

const Pricing: NextPage = () => {
  return (
    <>
      <Header />
      {/* <Header1 /> */}
      <PriceMain />
      <Footer />
    </>
  );
};

export default Pricing;

// export async function getServerSideProps(context: any) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_REACT_APP_BASE_URL}/count`
//   );
//   var data = await res.json();
//   console.log("1111111111", data);
//   if (data) {
//     return {
//       redirect: {
//         permanent: false,
//         // destination: "https://wibes.co.in/",
//         destination:
//           "https://wa.me/+918320627743?text=Hello!!%0AI%20am.....%20Can%20I%20get%20more%20information%20about%20your%20workspace%20and%20event%20area?",
//       },
//       props: { data },
//     };
//   } else {
//     return {
//       redirect: {
//         permanent: false,
//         // destination: "https://wibes.co.in/",
//         destination:
//           "https://wa.me/+918320627743?text=Hello!!%0AI%20am.....%20Can%20I%20get%20more%20information%20about%20your%20workspace%20and%20event%20area?",
//       },
//       props: { data },
//     };
//   }
// }
