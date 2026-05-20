interface ToolsSkillsGridProps {
  skills: string[];
  tools: string[];
}

export function ToolsSkillsGrid({ skills, tools }: ToolsSkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Skills */}
      <div className="bg-surface rounded-2xl border border-border p-8">
        <h3 className="font-display text-lg text-ink mb-6">Skills Developed</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white border border-border rounded-full text-sm font-body text-ink hover:border-accent transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-surface rounded-2xl border border-border p-8">
        <h3 className="font-display text-lg text-ink mb-6">Tools Used</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-body text-accent hover:border-accent transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
