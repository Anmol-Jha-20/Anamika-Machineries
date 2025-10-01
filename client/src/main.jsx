import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AnamikaGallery from "./Pages/GalleryPage.jsx";
import PrintingMachinesPage from "./Pages/ProductPage/PrintingMachine/PrintingMachine.jsx";
import BindingMachinesPage from "./Pages/ProductPage/BindingMachine/BindingMachine.jsx";
import PastingMachinesPage from "./Pages/ProductPage/PastingMachine/PastingMachine.jsx";
import DieCuttingMachinesPage from "./Pages/ProductPage/Die Cutting Machine/DieCuttingMachine.jsx";
import PaperCuttingMachinesPage from "./Pages/ProductPage/Paper Cutting Machine/PaperCuttingMachine.jsx";
import FoldingMachinesPage from "./Pages/ProductPage/Folding Machine/FoldingMachine.jsx";
import TrimmingMachinesPage from "./Pages/ProductPage/Trimming Machine/TrimmingMachine.jsx";
import EightColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/EightColorPrintingMachine.jsx";
import SixColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/SixColorPrintingMachine.jsx";
import FiveColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/FiveColorPrintingMachine.jsx";
import FourColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/FourColorPrintingMachine.jsx";
import DoubleColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/DoubleColorPrintingMachine.jsx";
import SingleColorPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/SingleColorPrintingMachine.jsx";
import WebOffsetPrintingMachine from "./Pages/ProductPage/PrintingMachine/PrintingMachineProducts/WebOffsetPrintingMachine.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <AnamikaGallery />,
      },
      {
        path: "/printing-machine",
        element: <PrintingMachinesPage />,
      },
      {
        path: "/binding-machine",
        element: <BindingMachinesPage />,
      },
      {
        path: "/pasting-machine",
        element: <PastingMachinesPage />,
      },
      {
        path: "/die-cutting-machine",
        element: <DieCuttingMachinesPage />,
      },
      {
        path: "/paper-cutting-machine",
        element: <PaperCuttingMachinesPage />,
      },
      {
        path: "/folding-machine",
        element: <FoldingMachinesPage />,
      },
      {
        path: "/trimming-machine",
        element: <TrimmingMachinesPage />,
      },
      {
        path: "/eight-color-printing-machine",
        element: <EightColorPrintingMachine />,
      },
      {
        path: "/six-color-printing-machine",
        element: <SixColorPrintingMachine />,
      },
      {
        path: "/five-color-printing-machine",
        element: <FiveColorPrintingMachine />,
      },
      {
        path: "/four-color-printing-machine",
        element: <FourColorPrintingMachine />,
      },
      {
        path: "/two-color-printing-machine",
        element: <DoubleColorPrintingMachine />,
      },
      {
        path: "/single-color-printing-machine",
        element: <SingleColorPrintingMachine />,
      },
      {
        path: "/web-offset-printing-machine",
        element: <WebOffsetPrintingMachine />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
