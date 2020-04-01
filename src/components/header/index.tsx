import * as React from "react";
import { HomeService } from "../../modules/home/home.service";

interface IProps {}

const logo = require("../../assets/images/logo.png");

const Header: React.FC<IProps> = props => {
  const [onlines, setOnlines] = React.useState<number>();
  const [retry, setRetry] = React.useState<number>(0);
  const [error, setError] = React.useState<Error>();

  React.useEffect(() => {
    let id = setInterval(() => {
      setRetry(retry + 1);
      setOnlines(undefined);
    }, 10000);

    return () => clearInterval(id);
  });

  React.useEffect(() => {
    const _load = async () => {
      const onlines = await HomeService.getUsersOnlineCount();

      setOnlines(onlines.usersOnline);
    };

    try {
      _load();
    } catch (e) {
      setError(e);
    }
  }, [retry]);

  return (
    <>
      <div className="flex flex-col justify-between items-center h-32 md:h-auto md:flex-row md:w-1/2">
        <div className="md:flex md:flex-1 md:justify-center md:pl-40">
          <img src={logo} alt="Rool logo" />
        </div>
        <div className="transition duration-500 ease-in-out ">
          <div className="font-thin bg-white rounded-full p-3">
            {error && <>{error.message}</>}

            {onlines === undefined
              ? "Carregando..."
              : `${onlines} ${
                  onlines === 1 ? `habbo online` : `habbos online`
                }!`}
          </div>
        </div>
      </div>

      <span className="border-b w-1/2 mt-5 mb-5 border-gray-500" />
    </>
  );
};

export default Header;
