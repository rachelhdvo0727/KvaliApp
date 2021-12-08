import * as React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Path, Defs, Style } from 'react-native-svg';

function ChatIcon(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="19"
         viewBox="0 0 20 19">
         <Defs></Defs>
         <Path
            fill={props.fill}
            d="M4,3A2.006,2.006,0,0,0,2,5V17l3-3h9a2.006,2.006,0,0,0,2-2V5a2.006,2.006,0,0,0-2-2ZM18,8v4a4,4,0,0,1-4,4H8v1a2.006,2.006,0,0,0,2,2h9l3,3V10a2.006,2.006,0,0,0-2-2Z"
            transform="translate(-2 -3)"
         />
      </Svg>
   );
}

const styles = StyleSheet.create({
   general: {
      alignSelf: 'center',
      marginVertical: 30,
      marginRight: 15,
   },
});

export default ChatIcon;
