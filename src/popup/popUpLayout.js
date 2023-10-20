import React from "react";

const PopupLayout = (props) => {
  return (
    <div
      class="fixed inset-0 flex items-center justify-center z-50 bg-black  bg-opacity-90 "
      id="popup"
    >
      <div class=" flex justify-center items-center  p-2   rounded-lg  w-[100%]  text-center">
        {props.children}
        
      </div>
    </div>
  );
};

export default PopupLayout;