import React from "react";

const Menuitem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div
      style={{ borderRadius: "0 200px 200px 200px" }}
      className="flex space-x-4 items-center p-4 border border-gray-300"
    >
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={image}
        alt={name}
      />
      <div className="flex-1">
        <h3 className="uppercase flex justify-between text-lg font-semibold">
          <span>{name}</span>
          <span className="text-gray-500">------</span>
        </h3>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>
      <p className="text-yellow-500 font-bold">${price}</p>
    </div>
  );
};

export default Menuitem;
