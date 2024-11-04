import "bootstrap/dist/css/bootstrap.min.css";
// import "@mdi/font/css/materialdesignicons.min.css";
import localFont from "next/font/local";
import "./globals.css";
import { ContextProvider } from "./context/contextProvider";
import BootstrapClient from "@/components/BootstrapClient.js";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import "animate.css";
import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import { GalleryContextProvider } from "./context/galleryContext";
import AlbumService from "./api/services/AlbumService";
import LayoutClient from "./LayoutClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({ params, searchParams }, parent) {
  let ogImage = "";

  try {
    const { data } = await AlbumService.getAll();
    const customArray = Object.values(data?.data || {});
    ogImage = customArray[0]?.image || "";
    console.log(ogImage);
  } catch (error) {
    console.error("Error fetching album data:", error);
  }

  return {
    title: {
      template: "%s | IGL GROUP - Leading Group of Company in Bangladesh",
      default: "IGL GROUP - Leading Group of Company in Bangladesh",
    },
    openGraph: {
      images: ogImage,
    },
  };
}

export default function RootLayout({ children }) {
  // const [ogImage, setOgImage] = useState(null);
  // const { toasts } = useToasterStore();
  // const TOAST_LIMIT = 1;

  // // Enforce Limit
  // useEffect(() => {
  //   toasts
  //     .filter((t) => t.visible) // Only consider visible toasts
  //     .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
  //     .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  // }, [toasts]);

  // useEffect(() => {
  // AlbumService.getAll()
  //   .then(({ data }) => {
  //     let obj = data?.data;
  //     const customArray = Object.keys(obj).map((key) => obj[key]);
  //     setOgImage(customArray[0]?.image);
  //   })
  //   .catch((err) => {
  //     console.log("album api error", err);
  //   });

  //   function openNav() {
  //     document.getElementById("myNav").style.height = "100%";
  //   }

  //   function closeNav() {
  //     document.getElementById("myNav").style.height = "0%";
  //   }
  // }, []);

  return (
    <html lang="en">
      <head>
        {/* <title>IGL GROUP - Leading Group of Company in Bangladesh</title> */}
        {/* <base href="https://www.web.iglgroup.org" /> */}
        {/* <base href="http:://localhost:3000/" /> */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/icon.png"
        />
        <link href="assets/img/icon.png" rel="icon" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* <!-- Robots - allow indexing, adjust if needed --> */}
        <meta name="robots" content="index, follow" />

        {/* social media seo */}
        <meta
          property="og:title"
          content="IGL GROUP - Leading Group of Company in Bangladesh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IGL Group" />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta property="og:url" content="https://www.web.iglgroup.org" />
        <meta
          property="og:description"
          content="Our Vision is all of Bangladeshi small or large company IT (Software, Website, CCTV Camera, ERP Solution etc) development with friendly cost. Which cost is comport and easy to pay."
        />
        <meta
          name="keywords"
          content="IGL Group, IGL Host, IGL Network, Felna Tech, Student Visa, Felna DMA, CCTV Setup, Access Control"
        />
        <meta
          name="description"
          content="Our Vision is all of Bangladeshi small or large company IT (Software, Website, CCTV Camera, ERP Solution etc) development with friendly cost. Which cost is comport and easy to pay."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:title" content="IGL Group" />
        <meta
          name="twitter:description"
          content="Our Vision is all of Bangladeshi small or large company IT (Software, Website, CCTV Camera, ERP Solution etc) development with friendly cost. Which cost is comport and easy to pay."
        />
        <meta name="twitter:image" content="Product Image" />
        <meta name="family" content="Arial" />
        {/* <!--For Only property Start--> */}
        {/* <meta property="fb:app_id" content="1973296469592243" /> */}
        {/* <meta property="product:brand" content="IGL Group" />
        <meta property="product:availability" content="Product Status:*" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:amount" content="Price*" />
        <meta property="product:price:currency" content="BDT" />
        <meta property="product:retailer_item_id" content="Product Code*" />
        <meta property="product:category" content="Category" /> */}
        {/* <!--For Only property End--> */}
        <meta
          httpEquiv="developer"
          content="Powered by : IGL Web Ltd
     Web address : http://www.iglweb.com"
        />
        <meta
          name="google-site-verification"
          content="BoUHQawe7j_Y9sQUu2QU_JI_LOqFAHEBscb1ZpXpXR8"
        />

        {/* <!--For Only Site--> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <!--pinterest.com --> */}
        <meta
          name="p:domain_verify"
          content="adf0d2f2df45f0e94f8dae92607ad22e"
        />
        {/* <!--pinterest.com --> */}
      </head>
      <body className={`${geistSans.variable} geistMono.variable} mt-5 pt-4`}>
        <GalleryContextProvider>
          <ContextProvider>{children}</ContextProvider>
        </GalleryContextProvider>

        <BootstrapClient />
        <LayoutClient />
      </body>
    </html>
  );
}
