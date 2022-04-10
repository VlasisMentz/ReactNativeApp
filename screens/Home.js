import { useState } from 'react';
import { Text, View, FlatList, SafeArea } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NFTCard, FocusedStatusBar, HomeHeader } from '../components/';
import { COLORS, NFTData } from '../constants';

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
}

export default Home;
