import React, { useState } from 'react';
import { virtualCardProps } from '../../types/customTypes/customTypes';



const VirtualCard: React.FC<virtualCardProps> = ({card}) => {
  return (
    <div className="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src={card.imageUrl}
            />
            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div>
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">{card.name}</p>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">
                  {card.number}
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-xs">Valid</p>
                    <p className="font-medium tracking-wider text-sm">{card.valid}</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">{card.expiry}</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default VirtualCard;
