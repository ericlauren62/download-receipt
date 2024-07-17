import { useRef, useState } from "react";
import logo from "./images/ITFG-LOGO.png";
import * as htmlToImage from "html-to-image";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [fullname, setFullname] = useState("Henry Micheal");
  const [amount, setAmount] = useState("300");
  const [paymentType, setPaymentType] = useState("Bitcoin");
  const [walletId, setWalletId] = useState("1feqpwptxbnfoaD9qjRRpaqaschw1xct");

  const downloadItem = useRef(null);
  const now = new Date();

  // Get individual components of the date and time
  const year = now.getFullYear(); // Full year (e.g., 2024)
  const month = now.getMonth() + 1; // Month (0-11, so add 1 for January to December)
  const day = now.getDate(); // Day of the month (1-31)
  const hours = now.getHours(); // Hours (0-23)
  const minutes = now.getMinutes(); // Minutes (0-59)

  // Format date and time as a string
  const fullDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

  const handleDownload = (e) => {
    e.preventDefault()
    if (downloadItem.current) {
      htmlToImage
        .toPng(downloadItem.current)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.download = "receipt.png";
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
          console.error("Error converting HTML to PNG", error);
        });
    }
  };

  return (
    <>
      <section className="bg-white border" ref={downloadItem}>
        <header className="py-8">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-1/2" />
          </div>
        </header>
        <main className="px-10">
          <h1
            className="text-2xl text-blue-800 text-center font-bold mb-6
        "
          >
            Withdrawal Request <br />
            Completed
          </h1>

          <p>Dear {fullname},</p>
          <p className="mb-5">
            We are pleased to inform you that your{" "}
            <strong>withdrawal request</strong> from your investment account has
            been successfully processed. Below are the details of your
            withdrawal:
          </p>

          <div className="mb-5">
            <p>
              <strong>Withdrawal Amount(USD): </strong> ${amount}
            </p>
            <p>
              <strong>Payment Type: </strong> {paymentType}
            </p>
            <p>
              <strong>Date of Withdrawal: </strong>
              {fullDateTime}
            </p>
            <p>
              <strong>Wallet ID: </strong> {walletId}
            </p>
          </div>

          <p>
            The withdrawn amount should now be reflected in your designated
            account. If you need further assistance, please feel free to contact
            our live support team or email us at{" "}
            <span className="text-blue-900 font-semibold">
              support@indextradefinancialgroup.com
            </span>
          </p>
          <br />
          <p>Thank you for using our investment platform.</p>
          <br />

          <p>Best Regards,</p>
          <p>The Index Trade Financial Group Team</p>

          <div className="text-center my-8">
            <h3 className="font-bold text-lg uppercase text-blue-800 mb-5">
              Stay Connected
            </h3>
            <div className="flex items-center justify-center text-2xl gap-x-4 my-5">
              <FaInstagram />
              <FaDiscord />
              <FaXTwitter />
            </div>
            <p className="mt-8">
              Copyright ©2024 Index Trade Financial Group. <br />
              All rights reserved.
            </p>
          </div>
        </main>
      </section>
      <div className="px-8 my-20">
        <form action="" className="grid gap-y-5">
        <div>
            <label htmlFor="" className="font-bold mb-2 block">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullname}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="" className="font-bold mb-2 block">Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="" className="font-bold mb-2 block">Payment Type</label>
            <input
              type="text"
              placeholder="Enter Payment Type"
              value={paymentType}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setPaymentType(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor="" className="font-bold mb-2 block">Wallet ID</label>
            <input
              type="text"
              placeholder="Enter Wallet Id"
              value={walletId}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setWalletId(e.target.value)}
            />
          </div>
          <button onClick={handleDownload} className="border py-3 bg-blue-900 text-white uppercase">download</button>
        </form>
      </div>
    </>
  );
}

export default App;
