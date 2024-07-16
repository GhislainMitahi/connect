import LanguageTrigger from "./LanguageTrigger";
import SeparatorDot from "./SeparatorDot";

const Foot = () => {
  return (
    <div className="flex justify-between w-[100%]">
      <ul className="flex items-center gap-3 text-xs text-custom-gray tracking-wide">
        <li>Terms</li>
        <SeparatorDot />
        <li>Privacy</li>
        <SeparatorDot />
        <li>Docs</li>
        <SeparatorDot />
        <li>Helps</li>
      </ul>
      <LanguageTrigger className="text-xs text-custom-gray" />
    </div>
  );
};

export default Foot;
