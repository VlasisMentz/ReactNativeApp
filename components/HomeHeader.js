import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.primary }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image source={assets.vlasis} />
      </View>
    </View>
  );
};

export default HomeHeader;
