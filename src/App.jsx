import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [fullname, setFullname] = useState("Henry Micheal");
  const [amount, setAmount] = useState("300");
  const [amountInCrypto, setAmountInCrypto] = useState("200")
  const [receiptType, setReceiptType] = useState("withdrawal");
  const [paymentType, setPaymentType] = useState("Bitcoin");
  const [walletId, setWalletId] = useState("1feqpwptxbnfoaD9qjRRpaqaschw1xct");
  const [time, setTime] = useState("7/18/2024 12:35pm")
  const [chainAmount, setChainAmount] = useState("0.002356 BTC")

  const downloadItem = useRef(null);
 

  const handleDownload = (e) => {
    e.preventDefault();
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
      <section
        className="bg-white mx-auto text-lg px-6 py-8"
        ref={downloadItem}
      >
        <header className="py-8">
          <div className="flex justify-center items-center">
            <img src="https://download-receipt.vercel.app/ITFG-LOGO.png" alt="" className="w-[70%]" />
          </div>
        </header>
        <main>
          <h1
            className="text-3xl text-blue-800 text-center font-bold mb-10
        "
          >
            {receiptType === "withdrawal"
              ? "Withdrawal Request Completed"
              : "Deposit Completed"}
          </h1>

          <p className="mb-5">
            <strong>Dear {fullname},</strong>
          </p>
          {receiptType === "withdrawal" && (
            <p className="mb-8">
              We are pleased to inform you that your{" "}
              <strong>withdrawal request</strong> from your investment account
              has been successfully processed. Below are the details of your
              withdrawal:
            </p>
          )}

          {receiptType === "deposit" && (
            <p className="mb-8">
              Your deposit has been confirmed. Below are the details of your
              deposit:
            </p>
          )}

          {receiptType === "withdrawal" && (
            <div className="mb-8">
              <p>
                <strong>Withdrawal Amount(USD): </strong> ${amount}
              </p>
              <p>
                <strong>Chain Amount: </strong> {chainAmount}
              </p>
              <p>
                <strong>Chain Type: </strong> {paymentType}
              </p>
              <p>
                <strong>Date of Withdrawal: </strong>
                {time}
              </p>
              <p>
                <strong>Wallet ID: </strong> {walletId}
              </p>
            </div>
          )}
          {receiptType === "deposit" && (
            <div className="mb-8">
              <p>
                <strong>Deposit Amount(USD): </strong> ${amountInCrypto}
              </p>
              <p>
                <strong>Chain Amount: </strong> {chainAmount}
              </p>
              <p>
                <strong>Chain Type: </strong> {paymentType}
              </p>
              <p>
                <strong>Deposit Address: </strong> {walletId}
              </p>
              <p>
                <strong>Date: </strong>
                {time}
              </p>
              
            </div>
          )}

          <p>
            If you need further assistance, please feel free to contact
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
            <label htmlFor="" className="font-bold mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullname}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Receipt Type
            </label>
            <select
              value={receiptType}
              onChange={(e) => setReceiptType(e.target.value)}
              className="border border-gray-600 w-full p-3 rounded-sm"
            >
              <option value="withdrawal">Withdrawal</option>
              <option value="deposit">Deposit</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Chain Amount
            </label>
            <input
              type="text"
              placeholder="Enter Chain Amount"
              value={chainAmount}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setChainAmount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Chain Type
            </label>
            <input
              type="text"
              placeholder="Enter Payment Type"
              value={paymentType}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setPaymentType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Date and Time
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={time}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          {receiptType === "withdrawal" && 
          
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Amount
            </label>
            <input
              type="text"
              placeholder="Enter Amount"
              value={amount}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          }
          {receiptType === "deposit" && <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Amount
            </label>
            <input
              type="text"
              placeholder="Enter Amount in crypto value"
              value={amountInCrypto}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setAmountInCrypto(e.target.value)}
            />
          </div>}
          
          
          <div>
            <label htmlFor="" className="font-bold mb-2 block">
              Wallet ID
            </label>
            <input
              type="text"
              placeholder="Enter Wallet Id"
              value={walletId}
              className="border border-gray-600 w-full p-3 rounded-sm"
              onChange={(e) => setWalletId(e.target.value)}
            />
          </div>
          <button
            onClick={handleDownload}
            className="border py-3 bg-blue-900 text-white uppercase"
          >
            download
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
