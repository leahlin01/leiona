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
        className={`shrink-0 overflow-hidden object-cover`}
        style={{
          maxWidth: width ? width - 50 : 603,
          width: width ? width - 50 : 603,
          height: 507,
          maxHeight: 507,
        }}
      />
      <div
        className={`mx-[0px] mt-[-50px] mb-[0px] w-fit shrink-0 flex flex-col items-start h-[266px] bg-[var(--academialam-com-White-66,var(--color-white-66,#ffffffa8))]`}
        style={{ maxWidth: width ? width - 100 : 543 }}
      >
        <div className="hover:bg-[#FF006e] w-full inline-flex flex-col items-start pl-[13px] pr-[20px] pt-[14px] py-[7px] bg-[#ffffff01] shadow-[inset_0px_0px_0px_0px_#b33d72] text-[var(--academialam-com-Black,#000000)] text-[50px] leading-[50px] tracking-[-2px] font-[900]">
          {title}
        </div>
        <p className="text-[24px] leading-[21px] w-full align-middle mx-[0px] mt-[24px] mb-[0px] pr-[20px] ">
          {caption}
        </p>
      </div>
    </div>
  );
}
