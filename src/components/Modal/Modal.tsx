import React, { ReactNode } from 'react';
import {
  card,
  getRandomNumberInRange,
} from '../../types/customTypes/customTypes';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  addVirtualCard: (card: card) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  addVirtualCard,
  children,
}) => {
  if (!isOpen) return null;

  const handleAddCard = (card: card) => {
    addVirtualCard(card);
  };

  const imageURL = [
    'https://st4.depositphotos.com/29108198/31538/v/450/depositphotos_315382906-stock-illustration-red-abstract-background-gradient-vector.jpg',
    'https://plus.unsplash.com/premium_photo-1668104454432-69c53f7196fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
        <div className="flex justify-center">
          <button
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
            onClick={() => {
              handleAddCard({
                name: 'VIKAS SHARMA',
                number: '1234 5678 9101 1121',
                valid: '01/25',
                expiry: '12/30',
                imageUrl: imageURL[getRandomNumberInRange(0, 2)],
              });
              onClose();
            }}
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
