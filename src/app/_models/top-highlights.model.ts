export class Highlights {
  likes: number;
  sales: number;
  comments: number;
  downloads: number;
  members: number;
  purchases: number;
  users_growth: {
    total: number;
    registrations: number;
    bounce_rate: number;
  };
  visits: { today: number; yesterday: number };
  new_visitors: {
    amount: number;
    percentage: number;
  };
  bounce_rate: {
    amount: number;
    percentage: number;
  };
  orders: {
    total: number;
    avg_time: string;
    last_week: number;
  };
  picked_orders: {
    percentage: number;
    basic: number;
    advanced: number;
  };
  total_profit: {
    total: number;
    last_month: number;
    last_week: number;
  };
}
