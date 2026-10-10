export default function HeroSection({ src, text }) {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center h-100 p-2 m-2 mt-3 ">
        <img width={"50%"} height={"30%"} src={src} alt="" />
        <p className="content-center text-xl w-[50%]">{text}</p>
      </div>
    </>
  );
}
