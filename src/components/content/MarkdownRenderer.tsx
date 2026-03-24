import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={className || 'markdown-content'}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
