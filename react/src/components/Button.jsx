export default function Button({ text = "Submit" }) {
  return (
    <>
      <button className="text-bold border">{text}</button>
    </>
  );
}
