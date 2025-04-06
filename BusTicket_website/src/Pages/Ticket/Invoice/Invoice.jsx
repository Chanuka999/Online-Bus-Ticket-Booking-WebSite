import React, { useRef } from "react";
import TopLayout from "../../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../../Components/Layout/RootLayout";
import PassengerInvoice from "./PassengerInvoice/PassengerInvoice";
import CompanyInvoice from "./Company/CompanyInvoice";
import { toPng } from "html-to-image";
import download from "downloadjs";

const Invoice = () => {
  const invoiceRef = useRef(null);

  const handleDownload = async () => {
    if (invoiceRef.current === null) return;

    try {
      const dataUrl = await toPng(invoiceRef.current);

      download(dataUrl, "g-tech-invoice-report.png");
    } catch (error) {
      console.log("Error while downloading the invoice", error);
    }
  };
  return (
    <div className="w-full space-y-12 pb-16">
      <TopLayout
        bgImg={
          "https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"
        }
        title={"collect your invoice"}
      />

      <RootLayout className="space y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">
          <div
            ref={invoiceRef}
            className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border-neutral-200 shadow-sm relative"
          >
            <PassengerInvoice />

            <CompanyInvoice />
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />

            <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleDownload}
            className="w-fit px-8 bg-red-600 text-neutral-50 h-14 font-bold text-lg rounded-lg"
          >
            Download Invoice
          </button>
        </div>
      </RootLayout>
    </div>
  );
};

export default Invoice;
