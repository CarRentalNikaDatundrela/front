'use client'
function Button({
  children,
  className,
  handleClick,
  carId,
}: {
  children: React.ReactNode;
  className: string;
  handleClick?: (carId: number) => void;
  carId?: number;
}) {
  return (
    <button
      onClick={() => {
        if (handleClick) {
          handleClick(carId ?? 0);
        }
      }}
      className={
        "bg-black rounded-xl text-xl text-white font-bold tracking-wide px-8 py-3 " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
