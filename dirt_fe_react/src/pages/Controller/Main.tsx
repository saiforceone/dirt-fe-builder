import React from 'react';

const Main = (): React.ReactNode => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#02111B] to-[#30292F]">
      <div className="flex flex-col container mx-auto md:max-w-5xl gap-y-8 text-center h-full p-4 ">
        <h1 className="text-4xl text-blue-800">Controller Main</h1>
      </div>
    </div>
  );
};

export default Main;
