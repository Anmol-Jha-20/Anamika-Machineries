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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
