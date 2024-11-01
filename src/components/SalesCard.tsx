'use client';

import React from 'react';
import Image from 'next/image';

export type SalesProps = {
    name: string;
    email: string;
    saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
    return (
        <li className="flex items-center gap-4 p-4 border-b border-gray-200 last:border-b-0">
            {/* Avatar Section */}
            <Image
                width={50}
                height={50}
                src={`https://api.dicebear.com/9.x/notionists-neutral/svg?seed=${props.name}`} // Unique avatar based on name
                alt={`Avatar for ${props.name}`}
                className="rounded-full" // Make the image circular
                priority
            />
            
            {/* Sales Information Section */}
            <div>
                <p className="text-sm font-medium text-gray-800">{props.name}</p>
                <p className="text-xs text-gray-500">{props.email}</p>
                <p className="text-sm font-semibold text-green-600">${props.saleAmount}</p>
            </div>
        </li>
    );
}
