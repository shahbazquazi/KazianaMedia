import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useAlert } from "react-alert";
import PulseLoader from "react-spinners/PulseLoader";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [budget, setBudget] = useState("");
  const [revenue, setRevenue] = useState("");
  const [loading, setLoading] = useState(false);

  //Alert
  const alert = useAlert();

  const contactFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const myForm = new FormData();

    myForm.set("firstname", firstName);
    myForm.set("lastname", lastName);
    myForm.set("email", email);
    myForm.set("phone", phone);
    myForm.set("website", website);
    myForm.set("budget", budget);
    myForm.set("revenue", revenue);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/contact",
      myForm,
      config
    );
    
    if(data){
      setLoading(false);
    }

    if (data.success === true) {
      alert.success("Contact form submitted successfully");
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setWebsite("");
    setBudget("");
    setRevenue("");
  };
  return (
    <>
      <div className="relative">
        <form
          className="flex flex-col w-1/2 mx-auto bg-black border-2 border-[#d4af37] m-20 rounded-2xl max-[640px]:w-full"
          onSubmit={contactFormSubmit}
        >
          <div>
            <h1 className="text-[#d4af37] text-center font-sans font-bold text-4xl m-10 max-[640px]:text-3xl">
              Allow us to reach YOU
            </h1>
          </div>
          <div>
            <div className="relative m-5">
              <FaUserAlt className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <input
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-lg text-white rounded-lg focus:outline-none "
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=" relative m-5">
              <FaUserAlt className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <input
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" relative m-5">
              <MdEmail className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <input
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" relative m-5">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                placeholder="Phone"
                required
                inputStyle={{
                  backgroundColor: "black",
                  color: "white",
                  borderWidth: "2px",
                  borderColor: "#d4af37",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  borderRadius: "0.5rem",
                  padding: "2.125rem",
                  paddingLeft: "4rem",
                  width: "100%",
                }}
                buttonStyle={{
                  backgroundColor: "black",
                  borderWidth: "2px",
                  borderColor: "#d4af37",
                  borderRadius: "0.5rem",
                }}
                dropdownStyle={{
                  backgroundColor: "black",
                  color: "#d4af37",
                }}
              />
            </div>
            <div className=" relative m-5">
              <TbWorldWww className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <input
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
                type="url"
                placeholder="Website Url (Optional)"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className=" relative m-5">
              <HiCurrencyDollar className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <select
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
                required
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="" disabled>
                  Marketing Budget
                </option>
                <option value="under $500">Under $500</option>
                <option value="$500-$1K">$500 - $1K</option>
                <option value="$1K-$2.5K">$1K - $2.5K</option>
                <option value="$2.5K-$5K">$2.5K - $5K</option>
                <option value="$5K-$10K">$5K - $10K</option>
                <option value="$10K-$25K">$10K - $25K</option>
                <option value="$25K-$50K">$25K - $50K</option>
                <option value="$50K-$100K">$50K - $100K</option>
                <option value="Above $100K">Above $100K</option>
              </select>
            </div>
            <div className=" relative m-5">
              <HiCurrencyDollar className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
              <select
                className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none"
                required
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
              >
                <option value="" disabled>
                  Revenue
                </option>
                <option value="under $10K">Under $10K</option>
                <option value="$10K-$50K">$10K - $50K</option>
                <option value="$50K-$100K">$50K - $100K</option>
                <option value="$100K-$1M">$100K - $1M</option>
                <option value="Above $1M">Above $1M</option>
              </select>
            </div>
          </div>
          <div className=" relative m-5">
            <button
              type="submit"
              className="flex p-5 w-1/2 mx-auto border-2 border-[#d4af37] bg-[#d4af37] text-white items-center justify-center text-xl rounded-lg hover:bg-white hover:text-black"
            >
              Call Me
            </button>
          </div>
          <div>
            {loading ? (<PulseLoader color="#d4af37" className="flex w-20 mx-auto"/>) : ("")}
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
