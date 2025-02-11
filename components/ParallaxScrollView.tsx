import type { PropsWithChildren, ReactElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation, DrawerActions } from '@react-navigation/native';

const HEADER_HEIGHT = 50;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerText: string;
  assets: ['./assets/fonts/'];
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  headerText,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const navigation = useNavigation(); 

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>

          <ThemedView style={styles.header_prop}>
            <ThemedText type="title">{headerText}</ThemedText>
          </ThemedView>
          
          {headerImage}

          <TouchableOpacity
            style={styles.hamburger}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Open the menu
          >
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>

        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  header_prop: {
    left: 60,
    height: 50,
    width: 100,
    bottom: -7,
    position: 'absolute',
    backgroundColor: '#d3c98b',
    fontFamily: 'KleeOne-Regular',
  },
  hamburger: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});