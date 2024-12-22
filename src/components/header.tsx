import Image from "next/image";
import User from '../../public/header/user.png';
import SearchIcon from '../../public/header/search.svg';
import SettingsIcon from '../../public/header/settings.svg';
import NotificationsIcon from '../../public/header/notifications.svg';

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full py-5 px-10 items-center border-b">
      <div className="font-inter font-semibold text-[28px] text-primary2">Overview</div>

      <div className="flex flex-row gap-[30] items-center">
        <div className="items-center flex flex-row bg-backgroundPrimary py-4 px-6 rounded-[40] gap-4">
          <SearchIcon color="#718EBF" width={25} height={25}/>

          <input className="font-inter items-center bg-backgroundPrimary placeholder-placeholder text-primaryText" placeholder="Search for somehting" />
        </div>

        <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
          <SettingsIcon color="#718EBF" width={25} height={25} />
        </button>

        <button className="p-3 bg-backgroundPrimary rounded-full flex items-center justify-center">
          <NotificationsIcon color="#FE5C73" width={25} height={25} />
        </button>

        <Image src={User} alt="user image" />
      </div>
    </header>
  );
}
