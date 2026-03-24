interface SqlCodeBlockProps {
  code: string;
}

export default function SqlCodeBlock({ code }: SqlCodeBlockProps) {
  return (
    <pre>
      <code className="language-sql">{code}</code>
    </pre>
  );
}
