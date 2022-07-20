function Displaydata({ getUserData }) {
  return (
    <>
      {getUserData.map((data) => (
        <div key={data.id} className="display-user">
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      ))}
    </>
  );
}

export default Displaydata;
