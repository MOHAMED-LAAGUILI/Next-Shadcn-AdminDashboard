'use client';

import DataTable, { Column } from "@/components/DataTable"; // Import DataTable component
import Image from 'next/image'; // Import Image component
import dayjs from 'dayjs'; // Import dayjs for date formatting

// Define the type for order data
type OrderStatus = 'Shipped' | 'Delivered' | 'Pending' | 'Cancelled'; // Define a type for order statuses

type Order = {
  orderId: string;
  userName: string;
  itemsOrdered: string;
  orderAmount: string;
  orderStatus: OrderStatus; // Use the defined type for orderStatus
  lastOrderDate: string; // Add last order date
};

// Order data array
const ordersData: Order[] = [
  { orderId: 'ORD001', userName: 'Leo', itemsOrdered: 'Item A, Item B', orderAmount: '$250.00', orderStatus: 'Shipped', lastOrderDate: '2024-10-25' },
  { orderId: 'ORD002', userName: 'Aidan', itemsOrdered: 'Item C', orderAmount: '$450.00', orderStatus: 'Pending', lastOrderDate: '2024-10-28' },
  { orderId: 'ORD003', userName: 'Kimberly', itemsOrdered: 'Item D, Item E', orderAmount: '$500.00', orderStatus: 'Delivered', lastOrderDate: '2024-10-30' },
  { orderId: 'ORD004', userName: 'John', itemsOrdered: 'Item F', orderAmount: '$300.00', orderStatus: 'Cancelled', lastOrderDate: '2024-10-20' },
  { orderId: 'ORD005', userName: 'Sarah', itemsOrdered: 'Item G, Item H', orderAmount: '$700.00', orderStatus: 'Pending', lastOrderDate: '2024-10-29' },
  { orderId: 'ORD006', userName: 'Mia', itemsOrdered: 'Item I', orderAmount: '$550.00', orderStatus: 'Shipped', lastOrderDate: '2024-10-25' },
];

// Define columns for order data
const orderColumns: Column<Order>[] = [
  { header: 'Order ID', accessor: 'orderId' },
  { 
    header: 'User Name', 
    accessor: 'userName',
    render: (name: string) => ( // Type here is string
      <div className="flex items-center">
        <Image
          width={50}
          height={50}
          src={`https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${name}`} // Unique avatar based on name
          alt={`Avatar for ${name}`}
          className="rounded-full mr-2" // Make the image circular and add margin
        />
        <b>{name}</b>
      </div>
    ),
  },
  { header: 'Items Ordered', accessor: 'itemsOrdered' },
  { header: 'Order Amount', accessor: 'orderAmount' },
  {
    header: 'Order Status', 
    accessor: 'orderStatus', // This can be a string in the DataTable
    render: (status: string) => { // Accept string
      // Define status styles
      const statusClasses: Record<OrderStatus, string> = {
        Shipped: 'bg-green-500 text-white',
        Delivered: 'bg-blue-500 text-white',
        Pending: 'bg-yellow-500 text-white',
        Cancelled: 'bg-red-500 text-white',
      };

      // Ensure that the string is typed as OrderStatus
      const orderStatus = status as OrderStatus;

      return (
        <span className={`px-2 py-1 rounded ${statusClasses[orderStatus]}`}>
          {orderStatus}
        </span>
      );
    }
  },
  {
    header: 'Last Order Date',
    accessor: 'lastOrderDate',
    render: (date: string) => dayjs(date).format('MMMM D, YYYY'), // Format the date
  },
];

export default function OrderPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Order Data</h1>
      <div className="overflow-x-auto"> {/* Make table responsive */}
        <DataTable columns={orderColumns} data={ordersData} itemsPerPage={2} /> {/* Adjust items per page as needed */}
      </div>
    </div>
  );
}
