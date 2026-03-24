interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block font-mono text-[0.68rem] font-semibold text-muted uppercase tracking-[0.08em] bg-white/5 border border-glass-border px-3 py-1.5 rounded-sm">
      {label}
    </span>
  );
}
