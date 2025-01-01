export const Navbar = () => {
  return (
    <div className="flex flex-row justify-center text-lg font-medium mt-4">
      <button className="hover:bg-slate-100 hover:border-b-4 border-blue-950 transition-all py-4 px-8">زنانه</button>
      <button className="hover:bg-slate-100 hover:border-b-4 border-blue-950 transition-all py-4 px-8">مردانه</button>
      <button className="hover:bg-slate-100 hover:border-b-4 border-blue-950 transition-all py-4 px-8">بچگانه</button>
      <button className="hover:bg-slate-100 hover:border-b-4 border-blue-950 transition-all py-4 px-8">سفر</button>
    </div>
  );
};
