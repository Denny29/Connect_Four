export default function piece(props) {
  let gamePiece;

  if (props.piece === "light") {
    gamePiece = "";
  } else if (props.piece === "dark") {
    gamePiece = "";
  }

  return { gamePiece };
}
