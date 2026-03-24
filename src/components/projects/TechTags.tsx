interface TechTagsProps {
  tags: string[];
}

export default function TechTags({ tags }: TechTagsProps) {
  return (
    <div className="tech-tags">
      {tags.map(tag => (
        <span key={tag} className="tech-tag">{tag}</span>
      ))}
    </div>
  );
}
