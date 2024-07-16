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
        className="bg-custom-green-night outline-none border-none onFocus-none onBlur-none custom-select"
        name="country"
        id="country"
      >
        <option value="english" className="">
          English
        </option>
        <option value="french" className="">
          French
        </option>
      </select>
    </div>
  );
};

export default LanguageTrigger;
