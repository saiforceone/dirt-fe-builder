import React from 'react';
import { TbShovel } from 'react-icons/tb';
import { FaDiscord, FaGithubAlt } from 'react-icons/fa';

type ControllerBaseProps = {
  controllerName: string;
};

const Main = ({ controllerName }: ControllerBaseProps): React.ReactNode => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#02111B] to-[#30292F]">
      <div className="flex flex-col container mx-auto md:max-w-5xl gap-y-8 text-center h-full p-4 ">
        <TbShovel className="self-center text-white" size={100} />
        <h1 className="text-white text-center text-7xl font-heading">
          Controller/Django App: {controllerName}
        </h1>
        <h3 className="text-3xl text-white font-heading underline">
          General Information
        </h3>
        <div className="flex flex-col self-center gap-y-2 w-2/3">
          <p className="text-white">
            This is the default page for the generated app. Replace the contents
            of this page with whatever you want.
          </p>
          <p className="text-white">
            To change the props that are passed to this inertia view, edit the
            following file:{' '}
            <span className="font-semibold bg-blue-800 px-1 rounded">{`${controllerName}/views.py`}</span>
          </p>
        </div>
        <h3 className="text-3xl text-white font-heading underline">
          Database Information
        </h3>
        <div className="flex flex-col self-center w-2/3">
          <p className="text-white">
            To make use of the models file{' '}
            <span className="font-semibold bg-blue-800 px-1 rounded">{`${controllerName}/models.py`}</span>
            , you will need to add{' '}
            <span className="text-gray-100">{controllerName}</span> to{' '}
            <span className="font-semibold text-white px-1 rounded bg-blue-800">
              INSTALLED_APPS
            </span>{' '}
            in your settings files
          </p>
        </div>
        <h3 className="text-3xl text-white font-heading underline">
          Resources
        </h3>
        <p className="text-white">
          Feeling stuck or have questions? Try the links below
        </p>
        <div className="flex self-center gap-x-8 text-white">
          <a
            className="flex text-white items-center hover:text-white gap-x-2"
            target="_blank"
            href="https://github.com/saiforceone/dirt-cli"
          >
            <FaGithubAlt size={32} /> <span>Git D.I.R.T-y</span>
          </a>
          <a
            className="flex text-white items-center hover:text-white gap-x-2"
            target="_blank"
            href="https://discord.gg/sY3a5VN3y9"
          >
            <FaDiscord size={32} /> Peanut Cart Express on Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
