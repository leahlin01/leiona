import { ReactNode } from "react";

export default function ({
  imgNode,
  contentNode,
  place,
  onClick,
}: {
  imgNode: ReactNode;
  contentNode: ReactNode;
  place: "left" | "right";
  onClick: () => void;
}) {
  if (place === "left") {
    return (
      <div
        onClick={onClick}
        className="flex justify-evenly flex-wrap py-[40px] gap-[20px] text-[var(--academialam-com-Conifer,#b3eb48)] font-['Outfit'] text-[16px] leading-[31px] tracking-[0px] font-[400] text-left whitespace-normal"
      >
        {imgNode}
        {contentNode}
      </div>
    );
  } else {
    return (
      <div
        onClick={onClick}
        className="flex justify-evenly flex-wrap py-[40px] gap-[20px] text-[var(--academialam-com-Conifer,#b3eb48)] font-['Outfit'] text-[16px] leading-[31px] tracking-[0px] font-[400] text-left whitespace-normal"
      >
        {contentNode}
        {imgNode}
      </div>
    );
  }
}
