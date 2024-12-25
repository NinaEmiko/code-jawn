import { PropsWithChildren, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { STYLES } from '@/assets/styles';
import React from 'react';

export function Collapsible({ children, title, openComponent }: PropsWithChildren & { title: string, openComponent: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const [componentInitialized, setComponentInitialized] = React.useState(false);

  useEffect(() => {
    if (!componentInitialized) {
      if (title === openComponent && !componentInitialized) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      setComponentInitialized(true)
    }
  })

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
          <IconSymbol
            name="chevron.right"
            size={25}
            weight="medium"
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
            style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
          />
        <View style={styles.titleContainer}>
          <Text style={styles.listItem}>{title}</Text>
        </View>
        
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  content: {
    marginTop: 6,
  },
  listItem: {
    fontSize: STYLES.FONT_SIZE_TITLE,
    color: STYLES.ORANGE,
    paddingTop: 5,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  titleContainer: {
    // flex: 1, 
    // alignItems: "center",
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
});
