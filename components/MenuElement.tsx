import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuElement = ({
  icon,
  title,
  url,
  key,
  isCollapsed,
  label,
  disabled,
  toggleDrawer
}: menuItems) => {

  const path = usePathname();

  const isActive = url === path;

  return (
    <div
      className={classNames({
        "flex flex-col items-center w-full py-1 md:p-2 hover:bg-[#c8e3ad80] ease-in-out duration-200 rounded-md":
          !isCollapsed,
        "flex flex-col items-center w-full py-1 hover:bg-[#c8e3ad80] ease-in-out duration-200 md:p-2 rounded-full":
          isCollapsed,
        "opacity-50 cursor-not-allowed": disabled,
        "bg-[#c8e3ad]": isActive && !disabled, // Active background color
      })}
      key={key}
    >
      {disabled ? (
        <div className="flex gap-3 items-center py-1 w-full text-sm text-linkColor">
          {isCollapsed ? (
            <p className="flex justify-center text-sm items-center w-full">{icon}</p>
          ) : (
            <p>{icon}</p>
          )}
          {!isCollapsed && (
            <div className="ease-in-out duration-150 text-sm text-linkColor flex justify-between gap-1 items-center">
              <p className="text-sm">{title}</p>
              {label && (
                <p className="bg-greenLight px-[4px] rounded-sm text-[0.5rem]">
                  {label}
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={url}
          className="flex gap-3 items-center w-full ease-in-out duration-200 text-normal text-linkColor hover:text-linkColor"
          onClick={toggleDrawer}
        >
          {isCollapsed ? (
            <p className="flex justify-center items-center w-full">{icon}</p>
          ) : (
            <p>{icon}</p>
          )}
          {!isCollapsed && (
            <div className="ease-in-out duration-150 text-normal text-linkColor flex justify-between gap-1 items-center">
              <p className="text-sm">{title}</p>
              {label && (
                <p className="bg-greenLight px-[4px] py-1 ml-4 rounded-sm text-[0.5rem]">
                  {label}
                </p>
              )}
            </div>
          )}
        </Link>
      )}
    </div>
  );
};

export default MenuElement;
