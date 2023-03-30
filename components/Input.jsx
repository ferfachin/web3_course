import React from 'react';

const Input = ({ inputType, title, placeholder, handleclick }) => (
  <div className="mt-10 w-full">
    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">{title}</p>

    {inputType === 'number' ? (
      <div className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row">
        <input
          type="number"
          className="flex w-full dark:bg-nft-black-1 bg-white outline-none"
          placeholder={placeholder}
          onChange={handleclick}
        />
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">ETH</p>
      </div>
    ) : inputType === 'textarea' ? (
      <textarea
        rows={10}
        className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
        placeholder={placeholder}
        onChange={handleclick}
      />
    )
      : (
        <input
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleclick}
        />
      )}

  </div>
);

export default Input;