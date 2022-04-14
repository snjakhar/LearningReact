export default function User(props) {
  const c = 10;
  return (
    <div>
      <button
        onClick={() => {
                  console.log(props)
                  props.countHandle(c)
        }}
      >
        Click
      </button>
    </div>
  );
}
