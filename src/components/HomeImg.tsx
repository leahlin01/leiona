import { ReactNode } from "react";

export default function ({
  src,
  title,
  caption,
  onClick,
  width,
}: {
  src: string;
  title: ReactNode;
  caption: ReactNode;
  onClick?: () => void;
  width?: number;
}) {
  return (
    <div
      className={`flex flex-col items-end bg-[var(--academialam-com-White,#ffffff)]`}
      onClick={() => onClick?.()}
      style={{ maxWidth: width ? width : 651 }}
    >
      <img
        src={src}
        className={`shrink-0  h-[507px]`}
        style={{ maxWidth: width ? width - 50 : 603 }}
      />
      <div
        className={`mx-[0px] mt-[-50px] mb-[0px] shrink-0 flex flex-col items-start pr-[0px] w-[${
          width ? width - 100 + "px" : "543px"
        }] h-[266px] bg-[var(--academialam-com-White-66,var(--color-white-66,#ffffffa8))]`}
      >
        <div className="hover:bg-[#FF006e] w-fit inline-flex flex-col items-start pl-[13px] px-[0px] pt-[14px] py-[7px] bg-[#ffffff01] shadow-[inset_0px_0px_0px_0px_#b33d72] text-[var(--academialam-com-Black,#000000)] text-[50px] leading-[50px] tracking-[-2px] font-[900]">
          {title}
        </div>
        <p className="text-[24px] leading-[21px] w-fit align-middle mx-[0px] mt-[24px] mb-[0px]">
          {caption}
        </p>
      </div>
    </div>
  );
}
