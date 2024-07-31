import { useState } from 'react';
import CardDataStats from '../components/CardDataStats';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import ChatCard from '../components/Chat/ChatCard';
import MapOne from '../components/Maps/MapOne';
import Modal from '../components/Modal/Modal';
import TableOne from '../components/Tables/TableOne';
import VirtualCard from '../components/VirtualCard/VirtualCard';
import AddCardForm from '../components/VirtualCard/AddCardForm';
import { card } from '../types/customTypes/customTypes';

const Profile = () => {
  const imageURL = [
    'https://st4.depositphotos.com/29108198/31538/v/450/depositphotos_315382906-stock-illustration-red-abstract-background-gradient-vector.jpg',
    'https://plus.unsplash.com/premium_photo-1668104454432-69c53f7196fc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [virtualCardsArray, setVirtualCardsArray] = useState<card[]>([
    {
      name: 'VIKAS SHARMA',
      number: '6576 5643 8765 6543',
      valid: '07/24',
      expiry: '07/34',
      imageUrl: 'https://i.imgur.com/kGkSg1v.png'
    },
  ]);

  const addVirtualCard = (card: card) => {
    setVirtualCardsArray((prevCards) => [...prevCards, card]);
  };


  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} addVirtualCard={addVirtualCard}>
        <AddCardForm />
      </Modal>
      <div className="bg-white py-2 flex px-4">
        <div className="flex space-x-8 h-42">
          {virtualCardsArray.map((card, index) => (
            <VirtualCard key={index} card={card} />
          ))}

          {/* <VirtualCard /> */}

          {/* <div className="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/Zi6v09P.png"
            />
            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div>
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">Karthik P</p>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">
                  4642 3489 9867 7632
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-xs">Valid</p>
                    <p className="font-medium tracking-wider text-sm">11/15</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">03/25</p>
                  </div>
                  <div>
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <button
            className="self-start px-4 py-2 bg-blue-600 text-white rounded mt-16"
            onClick={openModal}
          >
            Add Card
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <TableOne />
        </div>
        {/* <ChartTwo /> */}
      </div>
    </>
  );
};

export default Profile;
