function ICard(props) {
  return (
    <div
      style={{
        border: "5px solid brown",
        width: "250px",
        height: "300px",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h2>{props.data.name}</h2>
      <p>Roll No: {props.data.roll}</p>
      <p>Branch: {props.data.branch}</p>
      <p>Photo: {props.data.pic}</p>
    </div>
  );
}

export default ICard;