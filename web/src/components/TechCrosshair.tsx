export default function TechCrosshair({ bgColor = "var(--c-black)" }: { bgColor?: string }) {
  return (
    <div className="relative grid h-[20px] w-[20px] place-items-center">
      <div className="absolute h-[1px] w-full" style={{ background: bgColor }} />
      <div className="absolute h-full w-[1px]" style={{ background: bgColor }} />
    </div>
  );
}
