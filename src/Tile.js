export default function tile(props) {
  return (
    <div id={props.location} class="tile">
      {props.piece}
    </div>
  );
}
