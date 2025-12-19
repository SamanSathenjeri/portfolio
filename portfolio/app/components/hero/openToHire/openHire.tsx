const OpenToHireSection = () => {
  return (
    <div className="flex items-center gap-3 md:mt-10">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
      </span>

      <p className="text-sm md:text-xl font-[400] font-[inter] text-[#7a7c84]">
        Open to hire
      </p>
    </div>
  );
};

export default OpenToHireSection;
