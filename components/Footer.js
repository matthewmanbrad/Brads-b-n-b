import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Bradsbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Bradsbnb Plus</p>
        <p>Bradsbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a clone</p>
        <p>Referrals accepted</p>
        <p>matthewmanbrad</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Brad Matthewman</p>
        <p>Presenting</p>
        <p>Bradsbnb</p>
        <p>Personal</p>
        <p>Projects</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust and Safety</p>
        <p>Investors</p>
        <p>Bradsbnb Plus</p>
        <p>Bradsbnb Luxe</p>
      </div>
    </div>
  );
}

export default Footer;
