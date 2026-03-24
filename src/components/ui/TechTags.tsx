import TechTag from './TechTag';

interface TechTagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TechTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <TechTag key={tag} label={tag} />
      ))}
    </div>
  );
}
