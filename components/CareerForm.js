import React, { useState } from "react";
import { FaUserAlt, FaFilePdf } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useAlert } from "react-alert";
import PulseLoader from "react-spinners/PulseLoader";

function CareerForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [applyFor, setApplyFor] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState("");
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
    myForm.set("applyfor", applyFor);
    myForm.set("experience", experience);
    myForm.append("resume", resume);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "/api/career",
      myForm,
      config
    );

    if(data){
      setLoading(false);
    }

    if(data.success === true){
      alert.success("Career Form submitted successfully");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setApplyFor("");
    setExperience("");
    setResume("");

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
              First Step Towards Growth
            </h1>
          </div>
          <div className="relative m-5">
            <FaUserAlt className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
            <input
              className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-lg text-white rounded-lg focus:outline-none "
              type="text"
              name="firstname"
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
              name="lastname"
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
              name="email"
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
              inputProps={{
                name: "phone",
              }}
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
              dropdownStyle={{ backgroundColor: "black", color: "#d4af37" }}
            />
          </div>
          <div className=" relative m-5">
            <IoIosMan className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
            <select
              className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
              required
              name="applyfor"
              value={applyFor}
              onChange={(e) => setApplyFor(e.target.value)}
            >
              <option value="" disabled>
                Apply For
              </option>
              <option value="web developer">Web Developer</option>
              <option value="graphic designer">Graphic Designer</option>
              <option value="copy writer">Copy Writer</option>
              <option value="content manager">Content Manager</option>
              <option value="social media manager">Social Media Manager</option>
              <option value="seo specialist">SEO Specialist</option>
              <option value="email marketing specialist">
                Email Marketing Specialist
              </option>
              <option value="paid media manager">Paid Media Manager</option>
              <option value="photoshop editor">Photoshop Editor</option>
              <option value="video editor">Video Editor</option>
            </select>
          </div>
          <div className=" relative m-5">
            <SlCalender className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
            <select
              className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
              required
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="" disabled>
                Experience
              </option>
              <option value="0-1yr">0 - 1 yr</option>
              <option value="1-3yrs">1 - 3 yrs</option>
              <option value="3-5yrs">3 - 5 yrs</option>
              <option value="5-10yrs">5 - 10 yrs</option>
              <option value="10+">10 +</option>
            </select>
          </div>
          <div className=" relative m-5">
            <FaFilePdf className="absolute bottom-1/3 mx-5 text-2xl text-[#d4af37] " />
            <label htmlFor="files" className="text-white text-lg">
              Upload your Resume (* File Format: PDF)
            </label>
            <input
              className="p-5 px-16 w-full border-2 border-[#d4af37] bg-black text-white text-lg rounded-lg  focus:outline-none "
              type="file"
              id="files"
              accept="application/pdf"
              name="resume"
              required
              onChange={(e) => {
                  setResume(e.target.files[0])
              }}
            />
          </div>
          <div className=" relative m-5">
            <button
              type="submit"
              className="flex p-5 w-1/2 mx-auto border-2 border-[#d4af37] bg-[#d4af37] text-white items-center justify-center text-xl rounded-lg hover:bg-white hover:text-black"
            >
              Apply Now
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

export default CareerForm;
