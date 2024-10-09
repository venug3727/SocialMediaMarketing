import React from "react";
import ContactCard from "../component/ContactCard";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Conatct() {
  return (
    <>
      <Header />
      <div className="c">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mt-[60px]">Lets talk with our awesome team</h1>
        <div className="flex flex-wrap justify-center  my-[70px]">
          <ContactCard name="Call" info="08452414554124521457" />
          <ContactCard name="Email" info="ioremipsum@gmail.com" />
          <ContactCard name="Location" info="Bandung digita , Indonesia" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Conatct;
