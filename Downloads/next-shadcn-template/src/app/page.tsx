'use client';
import Card, { CardProps, CardContent } from '@/components/Card';
import PageTitle from './../components/PageTitle';
import { DollarSign, Users, ShoppingCart } from 'lucide-react';
import MyBarChart from '@/components/BarChart';
import SalesCard, { SalesProps } from '@/components/SalesCard';

export default function Dashboard() {
  const cardData: CardProps[] = [
    {
      label: 'Total Sales',
      icon: DollarSign,
      amount: '$50,230',
      description: 'Total revenue generated',
    },
    {
      label: 'New Users',
      icon: Users,
      amount: '1,200',
      description: 'Users registered this month',
    },
    {
      label: 'Orders',
      icon: ShoppingCart,
      amount: '750',
      description: 'Total orders placed',
    },
    {
      label: 'Active Subscriptions',
      icon: Users,
      amount: '320',
      description: 'Active subscribers',
    },
  ];

  // Example sales data
  const usersSalesData: SalesProps[] = [
    {
      name: 'Leo',
      email: 'john.doe@example.com',
      saleAmount: '5,000',
    },
    {
      name: 'Aidan',
      email: 'jane.smith@example.com',
      saleAmount: '3,200',
    },
    {
      name: 'Kimberly',
      email: 'alice.brown@example.com',
      saleAmount: '4,700',
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            label={data.label}
            icon={data.icon}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 transition-all lg:grid-cols-2 gap-8">
        <CardContent>
          <h3 className="p-4 text-lg font-bold">Additional Info</h3>
          <MyBarChart />
        </CardContent>

        <CardContent>
          <h3 className="p-4 text-lg font-bold">Recent Sales</h3>
          <p>You made 200 sales this month</p>
          <div className="grid gap-4 mt-4">
            {usersSalesData.map((user, index) => (
              <SalesCard key={index} name={user.name} email={user.email} saleAmount={user.saleAmount} />
            ))}
          </div>
        </CardContent>
      </section>
    </div>
  );
}
