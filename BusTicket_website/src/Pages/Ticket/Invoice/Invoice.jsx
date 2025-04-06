import React, { useRef } from "react";
import TopLayout from "../../../Components/Layout/Toppage/TopLayout";
import RootLayout from "../../../Components/Layout/RootLayout";
import PassengerInvoice from "./PassengerInvoice/PassengerInvoice";

const Invoice = () => {
  const invoiceRef = useRef(null);

  const handleDownload = async () => {
    if (invoiceRef.current === null) return;

    try {
      const detaUrl = await toPng(invoiceRef.current);

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
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />

            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          Download Button
        </div>
      </RootLayout>
    </div>
  );
};

export default Invoice;
