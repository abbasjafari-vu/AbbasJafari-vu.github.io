"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta, a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import tw from "tailwind-styled-components";

type Props = { value: any };
export function Code({ value }: Props) {
  const [fontSize, setFontSize] = useState("16px");
  const [styleCode, setStyleCode] = useState(arta);
  return (
    <div
      className="overflow-hidden rounded-2xl shadow shadow-white/30 bg-primary-brown my-5"
      dir="ltr"
    >
      <div className="px-10 py-2 flex items-center gap-2">
        <Select
          onChange={(e) => {
            if (e.target.value === "arta") setStyleCode(arta);
            if (e.target.value === "a11yDark") setStyleCode(a11yDark);
          }}
        >
          <option selected>Theme</option>
          <option value="arta">arta (default)</option>
          <option value="a11yDark">a11yDark</option>
        </Select>
        <Select
          onChange={(e) => {
            // @ts-ignore
            setFontSize(e.target.value);
          }}
        >
          <option selected>Font size</option>
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px (default)</option>
        </Select>
      </div>
      <SyntaxHighlighter
        language={value.language}
        style={styleCode}
        customStyle={{ fontSize }}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
}

const Select = tw.select`bg-primary-brown border border-gray-300 text-white text-xs rounded-lg focus:ring-none focus:border-white py-1 px-3`;
