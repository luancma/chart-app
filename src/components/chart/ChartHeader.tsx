export const ChartHeader = ({ id1, id2 }: { id1: number; id2: number }) => {
  return (
    <div className="flex flex-row items-center justify-around w-full">
      <div className="w-20 rounded border-2 border-slate-300 p-y-8">
        <h2>ID 1</h2>
        <p>{id1 || 0}° C</p>
      </div>
      <div className="w-20 rounded border-2 border-slate-300 p-y-8">
        <h2>ID 2</h2>
        <p>{id2 || 0}° C</p>
      </div>
    </div>
  );
};
