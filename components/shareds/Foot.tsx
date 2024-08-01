import LanguageTrigger from "./LanguageTrigger";
import SeparatorDot from "./SeparatorDot";

const Foot = () => {
  return (
    <div className="md:flex justify-between w-[100%] hidden">
      <ul className="flex items-center gap-3 text-sm text-custom-gray tracking-wide">
        <li>Terms</li>
        <SeparatorDot />
        <li>Privacy</li>
        <SeparatorDot />
        <li>Docs</li>
        <SeparatorDot />
        <li>Helps</li>
      </ul>
      <LanguageTrigger className="text-sm text-custom-gray" />
    </div>
  );
};

export default Foot;
