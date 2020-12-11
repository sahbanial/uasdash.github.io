const bool = false;
const isLocal = bool;
const PROTOCOL = isLocal ? "http://" : "http://";
const WS_PROTOCOL = isLocal ? "ws://" : "ws://";
const HOST = isLocal ? "192.168.1.105:8001" : "163.172.249.5:8001";
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