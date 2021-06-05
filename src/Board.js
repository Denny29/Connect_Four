import Piece from "./Pieces.js";
import Tile from "./Tile.js";

let game = ["", "", "", "", "", "", ""
  ,"", "", "", "", "", "", ""
  ,"", "", "", "", "", "", ""
  ,"", "", "", "", "", "", ""
  ,"", "", "", "", "", "", ""
  ,"", "", "", "", "", "", ""];

export default function board() {
  //tile to be called 42 times
  return (
    <div id="board">
      <div id="row1" class="row">
        <Tile location="0" piece={game[0]} />
        <Tile location="1" piece={game[1]} />
        <Tile location="2" piece={game[2]} />
        <Tile location="3" piece={game[3]} />
        <Tile location="4" piece={game[4]} />
        <Tile location="5" piece={game[5]} />
        <Tile location="6" piece={game[6]} />
      </div>
      <div id="row2" class="row">
        <Tile location="7" piece={game[7]} />
        <Tile location="8" piece={game[8]} />
        <Tile location="9" piece={game[9]} />
        <Tile location="10" piece={game[10]} />
        <Tile location="11" piece={game[11]} />
        <Tile location="12" piece={game[12]} />
        <Tile location="13" piece={game[13]} />
      </div>
      <div id="row3" class="row">
        <Tile location="14" piece={game[14]} />
        <Tile location="15" piece={game[15]} />
        <Tile location="16" piece={game[16]} />
        <Tile location="17" piece={game[17]} />
        <Tile location="18" piece={game[18]} />
        <Tile location="19" piece={game[19]} />
        <Tile location="20" piece={game[20]} />
      </div>
      <div id="row4" class="row">
        <Tile location="21" piece={game[21]} />
        <Tile location="22" piece={game[22]} />
        <Tile location="23" piece={game[23]} />
        <Tile location="24" piece={game[24]} />
        <Tile location="25" piece={game[25]} />
        <Tile location="26" piece={game[26]} />
        <Tile location="27" piece={game[27]} />
      </div>
      <div id="row5" class="row">
        <Tile location="28" piece={game[28]} />
        <Tile location="29" piece={game[29]} />
        <Tile location="30" piece={game[30]} />
        <Tile location="31" piece={game[31]} />
        <Tile location="32" piece={game[32]} />
        <Tile location="33" piece={game[33]} />
        <Tile location="34" piece={game[34]} />
      </div>
      <div id="row6" class="row">
        <Tile location="35" piece={game[35]} />
        <Tile location="36" piece={game[36]} />
        <Tile location="37" piece={game[37]} />
        <Tile location="38" piece={game[38]} />
        <Tile location="39" piece={game[39]} />
        <Tile location="40" piece={game[40]} />
        <Tile location="41" piece={game[41]} />
      </div>
    </div>
  );
}
