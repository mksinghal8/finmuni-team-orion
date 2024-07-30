import CardDataStats from '../components/CardDataStats';
import ChartOne from '../components/Charts/ChartOne';
import ChartThree from '../components/Charts/ChartThree';
import ChartTwo from '../components/Charts/ChartTwo';
import ChatCard from '../components/Chat/ChatCard';
import MapOne from '../components/Maps/MapOne';
import TableOne from '../components/Tables/TableOne';

const Profile = () => {
  return (
    <>
      <div className="bg-white py-2 flex px-4">
        <div className="flex space-x-8 h-42">
          <div className="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
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
          </div>

          <div className="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
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
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default Profile;
