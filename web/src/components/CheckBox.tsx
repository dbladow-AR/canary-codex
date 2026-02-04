export default function CheckBox({ checked = true }: { checked?: boolean }) {
  return (
    <div className="font-tech flex h-5 w-5 items-center justify-center border border-black bg-black text-[var(--c-acid)] text-sm">
      {checked ? "✓" : ""}
    </div>
  );
}
