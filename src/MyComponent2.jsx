// function MyComponent(props) {
//   // return <h1>my component</h1>;
//   return (
//     <>
//       <h1>{props.title}</h1>
//       <h2>{props.subTitle}</h2>
//     </>
//   );
// }

function MyComponent2(props) {
  return (
    <>
      <h1>{props.children}</h1>
    </>
  );
}

export default MyComponent2;
