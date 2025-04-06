import React from "react";

const BusImage = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_L1GngmciVPlN18XJHCMzf7htqaa_aBH21g&s"
          alt="bus images"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>

      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://lesscarmorelife.com/wp-content/uploads/2023/03/img_6042-1.jpg?w=1024"
          alt="bus images"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>

      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://c8.alamy.com/comp/2B488DY/nuwara-eliya-sri-lanka-03212019colorful-bus-for-public-transportruwan-motors-2B488DY.jpg"
          alt="bus images"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>

      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOP9-3PN7Pj9dJUpbGcf4V8WwuFX5ywBxAQ&s"
          alt="bus images"
          className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
    </div>
  );
};

export default BusImage;
