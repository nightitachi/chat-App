import React from "react";

const Converstion = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-50 rounded">
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div class="avatar offline">
          <div class="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-co">
          <p className=" font-bold text-gray-200 ">Ali Belhrak</p>
          <span className="text-xl">👻</span>
        </div>
      </div>
      <div className="divider my-0 py-1 h-1 "></div>
    </>
  );
};

export default Converstion;
