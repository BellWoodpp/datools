'use client';

import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps {
  placeholder: string;
  value?: string;
  onSearch: (term: string) => void;
}

export default function Search({ placeholder, value = "", onSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // 等待300毫秒
  const handleSearch = useDebouncedCallback((term: string) => {
    onSearch(term);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => {
          const nextValue = e.target.value;
          setInputValue(nextValue);
          handleSearch(nextValue);
        }}
      />
    </div>
  );
}
