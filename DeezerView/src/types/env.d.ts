declare module '@env' {
    export const ANDROID_EMULATOR_PATH: string;
    export const IOS_EMULATOR_PATH:string
  }

  declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }