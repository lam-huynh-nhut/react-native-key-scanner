import { EmitterSubscription } from 'react-native';

declare module 'react-native-key-scanner' {
  export default class KeyboardEvent {
    static listenerKeyDown: EmitterSubscription;
    static listenerKeyUp: EmitterSubscription;
    static listenerKeyMultiple: EmitterSubscription;
    static listenerBarcodeScan: EmitterSubscription;

    static onKeyDownListener(cb): void;

    static removeKeyDownListener(): void;

    static onKeyUpListener(cb): void;

    static removeKeyUpListener(): void;

    static onKeyMultipleListener(cb): void;

    static removeKeyMultipleListener(): void;

    static onBarcodeScanner(cb): void;

    static removeBarcodeScanner(): void;

    static setSubmitKeycode(keycode): void;

    static hideKeyboard(): void;
  }
}
