interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 relative inline-block">
        {title}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full -mb-2" />
      </h2>
    </div>
  );
};

export default SectionHeader;