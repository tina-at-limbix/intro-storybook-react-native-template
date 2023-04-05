import * as React from 'react';
import {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

import { LSvg } from 'react-native-limbix-ui';
import { type SVGProps } from 'react-native-limbix-ui';

export default (props: SVGProps): JSX.Element => (
  <LSvg viewBoxWidth={390} viewBoxHeight={844} fill="none" {...props}>
    <G clipPath="url(#PlainBackground_svg__clip0_26_92)">
      <Path fill="#fff" d="M0 0h390v844H0z" />
      <Path fill="#88CFCF" d="M0 0h390v844H0z" />
    </G>
    <Defs>
      <ClipPath id="PlainBackground_svg__clip0_26_92">
        <Path fill="#fff" d="M0 0h390v844H0z" />
      </ClipPath>
    </Defs>
  </LSvg>
);
