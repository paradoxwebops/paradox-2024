export default function LoadingEventCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="w-full h-[300px] bg-gray-300 animate-pulse rounded-3xl"
          ></div>
        ))}
    </div>
  );
}
