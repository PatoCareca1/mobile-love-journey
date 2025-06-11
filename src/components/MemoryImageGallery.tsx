interface Props {
  images: string[];
  altText?: string;
}

export default function MemoryImageGallery({ images, altText }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={altText ?? `Memória imagem ${idx + 1}`}
          loading="lazy"
          className="w-full object-cover rounded-lg shadow-sm"
        />
      ))}
    </div>
  );
}
