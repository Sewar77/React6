
export default function Header() {
  return (
    <>
      <div className="bg-red-900 h-20 snap-x content-center p-4">
        <nav className="flex flex-row flex-wrap justify-between">
          <div className="">
            <h3 className="text-[40px] text-white">Logo</h3>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-3 text-white">
            <a href="home">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Menu</a>
          </div>
        </nav>
      </div>
    </>
  );
}
