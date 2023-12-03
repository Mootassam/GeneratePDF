import { useState } from "react";
import "./App.css";
import Renderer from "./pages/Renderer";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <PDFDownloadLink document={<Renderer />} fileName="FORM">
      {({ loading }) =>
        loading ? (
          <button>Loading Document ...</button>
        ) : (
          <button>Downlaod</button>
        )
      }
    </PDFDownloadLink>
  );
}

export default App;
