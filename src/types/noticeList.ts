export type Item = {
  id: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
  closed: boolean;
};

export type ShopItem = {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
};

export type Shop = {
  item: ShopItem;
  href: string;
};

export type Items = {
  item: Item;
  shop: Shop;
};
