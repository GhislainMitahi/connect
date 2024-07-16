"use client";

import * as React from "react";
import Glob from "../svg/Glob";

interface LanguageTriggerProps {
  className?: string;
}

const LanguageTrigger: React.FC<LanguageTriggerProps> = ({ className }) => {
  return (
    <div className={`${className} flex gap-2`}>
      <label htmlFor="country">
        <Glob />
      </label>
      <select
        className="bg-custom-green-night outline-none border-none onFocus-none onBlur-none"
        name="country"
        id="country"
      >
        <option value="english" className="hover:bg-custom-green-oil">
          English
        </option>
        <option value="french" className="hover:bg-custom-green-oil">
          French
        </option>
      </select>
    </div>
  );
};

export default LanguageTrigger;
