interface JobInfoProps {
  icon: React.ReactNode;
  text: string;
}

function JobInfo({ icon, text }: JobInfoProps) {
  return (
    <div className="flex gap-x-2 items-center">
      {icon}
      {text}
    </div>
  );
}

export { JobInfo };
