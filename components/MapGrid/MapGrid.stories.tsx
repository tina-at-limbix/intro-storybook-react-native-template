
import { MapGrid, View } from 'react-native-limbix-ui';
import { Dimensions, SafeAreaView } from 'react-native';

import PlainBackgroundSvg from "./PlainBackgroundSvg";
import Tree1 from './Tree1';
import RiverSprite from './RiverSprite';
import Tree2 from './Tree2';
import FireSprite from './FireSprite';

const sprites =   [{
  element: <Tree1 />,
  location: {
    row: 4,
    column: 0,
  },
},
{
  element: <Tree2 />,
  location: {
    row: 2,
    column: 5,
  },
},
{
  element: <FireSprite />,
  location: {
    row: 6,
    column: 4,
  },
},
{
  element: <RiverSprite style={{ width: Dimensions.get('screen').width }} />,
  location: {
    row: 2,
    column: 0,
  },
}];

export default {
  title: "Map Grid",
  component: MapGrid,
  decorators: [
    (Story) => (
      <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#88CFCF',
        alignSelf: 'center',
      }}
      >
        <Story />
      </View>
    </SafeAreaView>
    ),
  ],
  argTypes: {}
};

export const Default = {
  args: {
    gridDimensions: {
      rowCount: 8,
      columnCount: 6,
    },
    sprites,
    BackgroundGraphic: PlainBackgroundSvg,
  },
};


