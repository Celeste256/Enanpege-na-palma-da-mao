import React, { useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Destaques from '../../screens/Destaques';
import Noticias from '../../screens/Noticias';
import Agenda from '../../screens/Agenda';
import Location from '../../screens/Location';
import Palestrantes from '../../screens/Palestrantes';
import Faq from '../../screens/Faq';
import Perfil from '../../screens/Perfil';

const { width: windowWidth } = Dimensions.get('window');
const iconWidth = windowWidth / 4;

type Route = {
  key: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  component: JSX.Element;
};

const routes: Route[] = [
  { key: 'destaques', icon: 'home', component: <Destaques navigation={undefined} /> },
  { key: 'noticias', icon: 'newspaper', component: <Noticias navigation={undefined} /> },
  { key: 'agenda', icon: 'calendar', component: <Agenda navigation={undefined} /> },
  { key: 'localizacao', icon: 'map', component: <Location /> },
  { key: 'palestrantes', icon: 'people', component: <Palestrantes navigation={undefined} /> },
  { key: 'faq', icon: 'help-circle', component: <Faq navigation={undefined} /> },
  { key: 'perfil', icon: 'person', component: <Perfil /> },
];

export default function IOSOnlyTabs() {
  const screenScrollRef = useRef<ScrollView>(null);
  const iconScrollRef = useRef<ScrollView>(null);

  const handleScrollTo = (index: number) => {
    screenScrollRef.current?.scrollTo({ x: index * windowWidth, animated: true });
    iconScrollRef.current?.scrollTo({ x: Math.max(0, (index - 1) * iconWidth), animated: true });
  };

  const handleScreenScroll = (event: any) => {
    const pageIndex = Math.round(event.nativeEvent.contentOffset.x / windowWidth);
    iconScrollRef.current?.scrollTo({ x: Math.max(0, (pageIndex - 1) * iconWidth), animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Telas */}
      <ScrollView
        ref={screenScrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScreenScroll}
      >
        {routes.map((route, index) => (
          <View key={route.key} style={{ width: windowWidth }}>
            {route.component}
          </View>
        ))}
      </ScrollView>

      {/* Rodapé com ícones */}
      <View style={styles.tabBar}>
        <ScrollView
          ref={iconScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={iconWidth}
          decelerationRate="fast"
          contentContainerStyle={styles.iconContainer}
        >
          {routes.map((route, index) => (
            <TouchableOpacity key={route.key} onPress={() => handleScrollTo(index)} style={{ width: iconWidth, alignItems: 'center' }}>
              <Ionicons name={route.icon} size={28} color={'gray'} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
