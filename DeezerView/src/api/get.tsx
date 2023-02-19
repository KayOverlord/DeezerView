import {ANDROID_EMULATOR_PATH, IOS_EMULATOR_PATH} from '@env';
import {Platform} from 'react-native';

const get = async (param: string) => {
  const path =
    Platform.OS == 'android' ? ANDROID_EMULATOR_PATH : IOS_EMULATOR_PATH;
  try {
    const apiResponse = await fetch(path + param, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const jsonResponse = await apiResponse.json();
    return jsonResponse;
  } catch (error) {
    console.log('Error: ', error);
  }
};

export default get;
