// function MyComponent(props) {
//   // return <h1>my component</h1>;
//   return (
//     <>
//       <h1>{props.title}</h1>
//       <h2>{props.subTitle}</h2>
//     </>
//   );
// }

function MyComponent({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </>
  );
}

export default MyComponent;
