import {ANDROID_EMULATOR_PATH} from '@env';

const get = async (param: string) => {
  try {
    const apiResponse = await fetch(ANDROID_EMULATOR_PATH + param, {
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
