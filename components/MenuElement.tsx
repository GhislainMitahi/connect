import classNames from "classnames";
import Link from "next/link";

const MenuElement = ({
  icon,
  title,
  url,
  key,
  isCollapsed,
  label,
  disabled,
}: menuItems) => {
  return (
    <div
      className={classNames({
        "flex flex-col items-center w-full p-2 hover:bg-[#c8e3ad80] ease-in-out duration-200 rounded-md":
          !isCollapsed,
        "flex flex-col items-center w-full hover:bg-[#c8e3ad80] ease-in-out duration-200 p-2 rounded-full":
          isCollapsed,
        "opacity-50 cursor-not-allowed": disabled,
      })}
      key={key}
    >
      {disabled ? (
        <div className="flex gap-1 items-center w-full text-normal text-linkColor">
          {isCollapsed ? (
            <p className="flex justify-center items-center w-full">{icon}</p>
          ) : (
            <p>{icon}</p>
          )}
          {!isCollapsed && (
            <div className="ease-in-out duration-150 text-normal text-linkColor flex justify-between gap-1 items-center">
              <p>{title}</p>
              {label && (
                <p className="bg-greenLight px-[4px] py-2 rounded-sm text-[0.5rem]">
                  {label}
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={url}
          className="flex gap-1 items-center w-full ease-in-out duration-200 text-normal text-linkColor hover:text-linkColor"
        >
          {isCollapsed ? (
            <p className="flex justify-center items-center w-full">{icon}</p>
          ) : (
            <p>{icon}</p>
          )}
          {!isCollapsed && (
            <div className="ease-in-out duration-150 text-normal text-linkColor flex justify-between gap-1 items-center">
              <p>{title}</p>
              {label && (
                <p className="bg-greenLight px-[4px] py-2 rounded-sm text-[0.5rem]">
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
