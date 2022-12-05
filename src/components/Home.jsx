import React from "react";
import { Navbar, Footer } from "../common";
import {
  Header,
  JoinUs,
  AboutUs,
  Services,
  Why,
  Events,
  PastEvents,
  ContactUs,
} from ".";

const Home = () => {
  return (
    <div className="container-fluid px-5">
      <Navbar />
      <Header />
      <JoinUs />
      <AboutUs />
      <Services />
      <Why />
      <Events />
      <PastEvents />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
