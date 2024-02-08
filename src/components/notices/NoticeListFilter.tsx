import AddressSelector from "@/components/notices/AddressSelector";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NoticeListFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-[auto] bg-red-30 text-[1.2rem] font-semibold text-white"
          variant="outline"
        >
          상세 필터
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <span>위치</span>
        <AddressSelector />
      </PopoverContent>
    </Popover>
  );
}
