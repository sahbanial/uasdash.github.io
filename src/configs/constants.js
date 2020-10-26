const bool = false;
const isLocal = bool;
const PROTOCOL = isLocal ? "http://" : "http://";
const WS_PROTOCOL = isLocal ? "ws://" : "ws://";
const HOST = isLocal ? "192.168.43.82:8001" : "146.59.151.184:8001";
const WS_ENDPOINT = "/subscriptions";
const BASE_URL = `${PROTOCOL}${HOST}`;
const PHOTO_URL = `${PROTOCOL}apilynkbooster.toolynk.fr`;
const WS_URL = `${WS_PROTOCOL}${HOST}${WS_ENDPOINT}`;
const DEFAULT_LANGAGE = "fr";

export {
  BASE_URL,
  WS_URL,
  PHOTO_URL,
};