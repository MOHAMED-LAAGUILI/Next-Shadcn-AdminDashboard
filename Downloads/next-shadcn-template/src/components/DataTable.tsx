// DataTable.tsx

import React, { useState } from 'react'; // Import useState
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the type for the column
export type Column<T> = {
  header: string; // Column header
  accessor: keyof T; // Key of the data object for this column
  render?: (value: T[keyof T]) => React.ReactNode; // Render function for custom rendering
};

// Define the type for the data prop
export type DataTableProps<T> = {
  columns: Column<T>[]; // Array of columns
  data: T[]; // Array of data
  itemsPerPage?: number; // Optional: number of items per page for pagination
};

const DataTable = <T,>({ columns, data, itemsPerPage = 5 }: DataTableProps<T>) => { // Set default itemsPerPage

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index range of the items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // Handler to change the page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full bg-white rounded-lg shadow-md">
        <TableCaption>A list of your recent data.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            {columns.map((column, index) => (
              <TableHead key={index} className="py-3 px-6 text-left">{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => ( // Use paginatedData here
            <TableRow key={index} className="border-b hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <TableCell key={colIndex} className="py-4 px-6 text-gray-600">
                  {column.render 
                    ? column.render(item[column.accessor]) 
                    : item[column.accessor] as unknown as React.ReactNode // Type assertion
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 text-white rounded shadow-md disabled:bg-gray-400 transition duration-200 hover:bg-gray-700"
        >
          Previous
        </button>
        
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-800 text-white rounded shadow-md disabled:bg-gray-400 transition duration-200 hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
