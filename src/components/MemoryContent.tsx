// src/components/MemoryContent.tsx
import React from 'react';

interface Props {
  caption: string;
  note: string;
}

export default function MemoryContent({ caption, note }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-600 mb-2">
        {caption}
      </h2>
      <p className="text-base leading-relaxed text-gray-700">
        {note}
      </p>
    </div>
  );
}
