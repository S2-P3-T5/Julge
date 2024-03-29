import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PAGE_ROUTES } from "@/routes";

interface EditNoticeButtonProps {
  shopId: string;
  noticeId: string;
}

export const EditNoticeButton: React.FC<EditNoticeButtonProps> = ({
  shopId,
  noticeId,
}) => {
  return (
    <Button className="h-[3.8rem] w-full rounded-[0.6rem] border-[0.1rem] border-primary bg-white px-[2rem] py-[1rem] tablet:h-[4.8rem]">
      <Link href={PAGE_ROUTES.parseShopNoticeEditURL(shopId, noticeId)}>
        <span className="text-center text-[1.4rem] font-bold not-italic leading-normal text-primary tablet:text-[1.6rem]">
          공고 편집하기
        </span>
      </Link>
    </Button>
  );
};

export const ApplyNoticeButton = ({ onClick }: any) => {
  return (
    <Button
      onClick={onClick}
      className="h-[3.8rem] w-full rounded-[0.6rem] border-[0.1rem] border-primary bg-primary px-[2rem] py-[1rem] tablet:h-[4.8rem]"
    >
      <span className="text-center text-[1.4rem] font-bold not-italic leading-normal text-white tablet:text-[1.6rem]">
        신청하기
      </span>
    </Button>
  );
};

export const CancelApplyButton = ({ onClick }: any) => {
  return (
    <Button
      onClick={onClick}
      className="h-[3.8rem] w-full rounded-[0.6rem] border-[0.1rem] border-primary bg-white px-[2rem] py-[1rem] tablet:h-[4.8rem]"
    >
      <span className="text-center text-[1.4rem] font-bold not-italic leading-normal text-primary tablet:text-[1.6rem]">
        취소하기
      </span>
    </Button>
  );
};

export const RejectButton = ({ onClick }: any) => {
  return (
    <Button
      onClick={onClick}
      className="flex h-[3.2rem] w-[6.9rem] gap-[0.8rem] rounded-[0.6rem] border-[0.1rem] border-primary bg-white px-[1.2rem] py-[0.8rem] tablet:h-[3.8rem] tablet:w-[9.2rem]"
    >
      <span className="text-center text-[1.2rem] font-normal not-italic leading-[1.6rem] text-primary tablet:text-[1.4rem] tablet:font-bold">
        거절하기
      </span>
    </Button>
  );
};

export const ApproveButton = ({ onClick }: any) => {
  return (
    <Button
      onClick={onClick}
      className="flex h-[3.2rem] w-[6.9rem] gap-[0.8rem] rounded-[0.6rem] border-[0.1rem] border-blue-20 bg-white px-[1.2rem] py-[0.8rem] tablet:h-[3.8rem] tablet:w-[9.2rem]"
    >
      <span className="text-center text-[1.2rem] font-normal not-italic leading-[1.6rem] text-blue-20 tablet:text-[1.4rem] tablet:font-bold">
        승인하기
      </span>
    </Button>
  );
};

export const DisableApplyButton = () => {
  return (
    <Button className="h-[3.8rem] w-full cursor-none rounded-[0.6rem] border-[0.1rem] border-gray-40 bg-gray-40 px-[2rem] py-[1rem] tablet:h-[4.8rem]">
      <span className="text-center text-[1.4rem] font-bold not-italic leading-normal text-white tablet:text-[1.6rem]">
        신청 불가
      </span>
    </Button>
  );
};
