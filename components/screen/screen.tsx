import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  isNonScrolling,
  KeyboardOffsets,
  offsets,
  presets,
  ScreenPresets,
} from "./screen.presets";
import Box from "../../atoms/box";

interface ScreenProps {
  children?: any;
  style?: StyleProp<ViewStyle>;
  preset?: ScreenPresets;
  backgroundColor?: string;
  statusBar?: "light-content" | "dark-content";
  unsafe?: boolean;
  keyboardOffset?: KeyboardOffsets;
  keyboardShouldPersistTaps?: "handled" | "always" | "never";
}

const isIos = Platform.OS === "ios";

function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.fixed;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <StatusBar barStyle={props.statusBar || "dark-content"} />
      <Box style={[preset.inner, style, insetStyle]}>{props.children}</Box>
    </KeyboardAvoidingView>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : {};
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      behavior={isIos ? "padding" : undefined}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <StatusBar barStyle={props.statusBar || "dark-content"} />
      <Box style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          keyboardShouldPersistTaps={
            props.keyboardShouldPersistTaps || "handled"
          }
        >
          {props.children}
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
}

export function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />;
  } else {
    return <ScreenWithScrolling {...props} />;
  }
}
