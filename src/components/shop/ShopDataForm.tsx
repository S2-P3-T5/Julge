import Link from "next/link";

import ShopImageCard from "@/components/shop/ShopImageCard";
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import BackPageButton from "@/components/ui/BackPageButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { errorMessage } from "@/helpers/validation";

const CATEGORY = [
  "한식",
  "중식",
  "일식",
  "양식",
  "분식",
  "카페",
  "편의점",
  "기타",
];
const ADDRESS = [
  "서울시 종로구",
  "서울시 중구",
  "서울시 용산구",
  "서울시 성동구",
  "서울시 광진구",
  "서울시 동대문구",
  "서울시 중랑구",
  "서울시 성북구",
  "서울시 강북구",
  "서울시 도봉구",
  "서울시 노원구",
  "서울시 은평구",
  "서울시 서대문구",
  "서울시 마포구",
  "서울시 양천구",
  "서울시 강서구",
  "서울시 구로구",
  "서울시 금천구",
  "서울시 영등포구",
  "서울시 동작구",
  "서울시 관악구",
  "서울시 서초구",
  "서울시 강남구",
  "서울시 송파구",
  "서울시 강동구",
];

interface ShopDataFormProps {
  form: any;
  onSubmit: (values: any) => void;
  imgURL: string;
  handleInputImgFile: (value: any) => void;
  buttonText: string;
  modalData: {
    msg: string;
    path: string;
  } | null;
}

export default function ShopDataForm({
  form,
  onSubmit,
  imgURL,
  handleInputImgFile,
  buttonText,
  modalData,
}: ShopDataFormProps) {
  const NUM_REGEX = /^\d+$/;

  return (
    <>
      <div className="flex justify-between">
        <span>가게 정보</span>
        <BackPageButton />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            rules={{
              required: {
                value: true,
                message: errorMessage.REQUIRED_SHOPNAME,
              },
            }}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>가게 이름*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="입력"
                    {...field}
                    onBlur={() => form.trigger("name")}
                  />
                </FormControl>
                <FormMessage className="absolute text-[1.2rem]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{
              required: {
                value: true,
                message: errorMessage.REQUIRED_SHOPCATEGORY,
              },
            }}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>분류*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="입력" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage className="absolute text-[1.2rem]" />
                  <SelectContent>
                    {CATEGORY.map((item) => {
                      return (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{
              required: {
                value: true,
                message: errorMessage.REQUIRED_ADDRESS,
              },
            }}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>주소*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="입력" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage className="absolute text-[1.2rem]" />
                  <SelectContent>
                    {ADDRESS.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{
              required: {
                value: true,
                message: errorMessage.REQUIRED_DETAILED_ADDRESS,
              },
            }}
            name="address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>상세 주소*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="입력"
                    {...field}
                    onBlur={() => form.trigger("address2")}
                  />
                </FormControl>
                <FormMessage className="absolute text-[1.2rem]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{
              required: {
                value: true,
                message: errorMessage.REQUIRED_HOURLYPAY,
              },
              pattern: {
                value: NUM_REGEX,
                message: errorMessage.REQUIRED_NUMBER,
              },
              min: {
                value: 9860,
                message: errorMessage.INVALID_HOURLYPAY,
              },
            }}
            name="originalHourlyPay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>기본 시급*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="입력"
                    {...field}
                    onBlur={() => form.trigger("originalHourlyPay")}
                  />
                </FormControl>
                <FormMessage className="absolute text-[1.2rem]" />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel htmlFor="imgSelector">
              가게 이미지
              <ShopImageCard imgURL={imgURL} />
            </FormLabel>
            <FormControl>
              <Input
                accept=".jpg, .jpeg, .png"
                className="hidden"
                id="imgSelector"
                type="file"
                onChange={handleInputImgFile}
              />
            </FormControl>
          </FormItem>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>가게 설명</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="입력"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={!form.formState.isValid} type="submit">
                {buttonText}
              </Button>
            </AlertDialogTrigger>
            {modalData && (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{modalData.msg}</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Link href={modalData.path}>
                    <AlertDialogAction>확인</AlertDialogAction>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </form>
      </Form>
    </>
  );
}
