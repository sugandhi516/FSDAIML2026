import ICard from "./ICard";

function ICardGallery() {
  const students = [
    {
      pic: "cat",
      roll: "80808",
      name: "Rohit",
      branch: "CSE-AIML",
    },
    {
      pic: "cat",
      roll: "400",
      name: "chaman",
      branch: "CSE-AIML",
    },
    {
      pic: "cat",
      roll: "401",
      name: "Rahul",
      branch: "CSE-AIML",
    },
    {
      pic: "cat",
      roll: "402",
      name: "priya",
      branch: "CSE-AIML",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {students.map((ele) => (
        <ICard key={ele.roll} data={ele} />
      ))}
    </div>
  );
}

export default ICardGallery;