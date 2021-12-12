import * as React from 'react';
import Svg, { Path, Defs, Style } from 'react-native-svg';

function EventStatusTag(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="37"
         height="37"
         viewBox="0 0 37 37">
         <Defs></Defs>
         <Path
            fill="#5050a5"
            class="a"
            d="M0,0H37a0,0,0,0,1,0,0V32a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V0A0,0,0,0,1,0,0Z"
         />
      </Svg>
   );
}

export default EventStatusTag;
