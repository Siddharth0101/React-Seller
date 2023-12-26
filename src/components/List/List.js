function List(prop) {
  return (
    <div>
      {prop.userData.map((user) => (
        <div key={user.id}>
          <span>
            {" "}
            {`${user.productId} -- ${user.sellingPrice} -- ${user.productName}`}
          </span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default List;
