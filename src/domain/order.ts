export type Order = {
  client: Object;
  shop: string;
  total: number;
};

export function createOrder({total} : any): Order {
  return {
    client: {
      "name": "Martin",
      "lastName": "Veliz",
    },
    shop: "volva",
    total: total,
  };
}