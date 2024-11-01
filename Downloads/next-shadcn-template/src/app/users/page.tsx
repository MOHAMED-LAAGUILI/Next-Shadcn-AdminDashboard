'use client';

import DataTable, { Column } from "@/components/DataTable";
import Image from 'next/image';

// Define the type for user data
type User = {
  name: string;
  email: string;
  saleAmount: string;
  paymentMethod: string;
};

// User data array
const usersData: User[] = [
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
  { name: 'Leo', email: 'leo@example.com', saleAmount: '$250.00', paymentMethod: "Paypal" },
  { name: 'Aidan', email: 'aidan@example.com', saleAmount: '$450.00', paymentMethod: "Credit Card" },
  { name: 'Kimberly', email: 'kimberly@example.com', saleAmount: '$500.00', paymentMethod: "Debit Card" },
  { name: 'John', email: 'john@example.com', saleAmount: '$300.00', paymentMethod: "Bank Transfer" },
  { name: 'Sarah', email: 'sarah@example.com', saleAmount: '$700.00', paymentMethod: "Cash" },
  { name: 'Mia', email: 'mia@example.com', saleAmount: '$550.00', paymentMethod: "Crypto" },
];

// Define columns for user data
const userColumns: Column<User>[] = [
  {
    header: 'Name',
    accessor: 'name',
    render: (name) => (
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
  { header: 'Email', accessor: 'email' },
  { header: 'Sale Amount', accessor: 'saleAmount' },
  { header: 'Payment Method', accessor: 'paymentMethod' },
];

export default function UserPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <DataTable columns={userColumns} data={usersData} itemsPerPage={8} /> {/* Adjust items per page as needed */}
    </div>
  );
}
