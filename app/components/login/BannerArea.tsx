import React from "react";

function BannerArea() {
  return (
    <div className="bg-loginBg bg-no-repeat bg-cover h-full flex flex-col justify-between py-24 px-12">
      <h1 className="text-center text-5xl font-extrabold drop-shadow-3xl leading-tight">
        Halaman <br />
        Login & Register
      </h1>
      <p className="text-xl text-center drop-shadow-3xl">
        Daftar atau masuk ke akun anda untuk menikmati fitur-fitur eksklusif!
      </p>
    </div>
  );
}

export default BannerArea;
