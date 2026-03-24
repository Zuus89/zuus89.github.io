interface SqlCodeBlockProps {
  code: string;
}

export default function SqlCodeBlock({ code }: SqlCodeBlockProps) {
  return (
    <pre className="bg-surface border border-border rounded-md p-4 overflow-x-auto">
      <code className="language-sql text-sm font-mono text-primary">{code}</code>
    </pre>
  );
}
