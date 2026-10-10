export default function Product({
  cardBody,
  cardFooter,
  cardImage,
  cardTitle,
}) {
  return (
    <>
      <div className="h-100 border rounded p-3 m-3 w-50 content-center text-center">
        <h3>{cardTitle}</h3>
        <img src={cardImage} alt="" />
        <hr />
        <p>{cardBody}</p>
        <h4>{cardFooter}</h4>
      </div>
    </>
  );
}
