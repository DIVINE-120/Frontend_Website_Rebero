import React from "react";
import LOGO from "../assets/image/logo.jpeg"

const Navigation = () => {
  const topNav = [
    {
      icon: <ion-icon name="call"></ion-icon>,
      items: "(+250)7899022",
    },
    {
      icon: <ion-icon name="mail"></ion-icon>,
      items: "info@collegeAmizeroDeRebero.com",
    },
  ];
  return (
    <div className=" ">
      <div className="lg:flex md:flex-cols justfy-center bg-primary xl:px-[120px] lg:px-[10px] xl:p-2 lg:p-3 md:p-3 sm:p-3 md:px-10">
        {topNav.map((data) => (
          <div className="flex text-secondary xl:px-3 lg:px-2   ">
          <div className="xl:px-3   ">
          <span className="text-xl ">{data.icon}</span>
          </div>
            <div> <span className="text-white">{data.items}</span></div>

           
          </div>
        ))}

        <div className="xl:px-20 lg:px-[30px] ">
        <p className="text-white  xl:text-xl font-bold underline underline-offset-3">welcome to college De Rebero</p>
        </div>
      </div>
<div className="  border-4 border-secondary bg-textPrimary p-9 " >
<div className="flex  pl-[110px]">
<img src={LOGO} alt="" className="border-2 border-neutral-400 w-40"/>

<div className="xl:px-5 xl:pb-8">
<span className="text-3xl font-bold ">CAR</span>
<p className="xl:text-xl text-zinc-500 font-semibold">College Amizero Don Rebero</p>

</div>
<div className="xl:pl-[500px] lg:pl-[250px]">
<div className="flex w-80 h-10 rounded-full bg-slate-600">
<input type="search" id="search" placeholder="Search" className="w-full bg-transparent rounded-full px-3 py-1 text-white outline-none focus:outline-none " />
<button className=" rounded-full bg-primary px-4 py-2 text-white">Search</button>
</div>
</div>


</div>


</div>


    </div>
  );
};

export default Navigation;
