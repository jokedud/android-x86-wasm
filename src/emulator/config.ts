/**
 * VM configuration. Everything here is user-overridable from the UI; the
 * defaults keep the repo free of binary artifacts by loading v86's WASM and
 * the SeaBIOS/VGA BIOS from jsDelivr (CORS + HTTP Range enabled).
 */

export type GuestImageKind =
  | "none"
  | "bootsector"
  | "cdrom"
  | "hda"
  | "linux";

export interface GuestImageConfig {
  kind: GuestImageKind;
  url: string;
  initrdUrl?: string;
  cmdline?: string;
  streaming: boolean;
}

export interface VmConfig {
  memoryMiB: number;
  wasmUrl: string;
  biosUrl: string;
  vgaBiosUrl: string;
  guestImage: GuestImageConfig;
}

const V86_VERSION = "0.5.461";

export const DEFAULT_WASM_URL = `https://cdn.jsdelivr.net/npm/v86@${V86_VERSION}/build/v86.wasm`;
export const DEFAULT_BIOS_URL = "https://cdn.jsdelivr.net/gh/copy/v86/bios/seabios.bin";
export const DEFAULT_VGA_BIOS_URL = "https://cdn.jsdelivr.net/gh/copy/v86/bios/vgabios.bin";

export const DEFAULT_CONFIG: VmConfig = {
  memoryMiB: 384,
  wasmUrl: DEFAULT_WASM_URL,
  biosUrl: DEFAULT_BIOS_URL,
  vgaBiosUrl: DEFAULT_VGA_BIOS_URL,
  guestImage: { kind: "none", url: "", streaming: false },
};

// Internet Archive serves these public historical images over HTTPS with
// CORS enabled. They are loaded only after the user taps a preset.
export const ANDROID_DONUT_ISO =
  "https://archive.org/download/android-x86-9.0-r2_202306/android-x86-1.6-r2.iso";
export const ANDROID_FROYO_ISO =
  "https://archive.org/download/android-x86-9.0-r2_202306/android-x86-2.2-r2-eeepc.iso";

export const SUGGESTED_IMAGES: { label: string; kind: GuestImageKind; url: string }[] = [
  {
    label: "▶ LOAD Android 1.6-r2 Donut (CORS mirror, 52 MB)",
    kind: "cdrom",
    url: ANDROID_DONUT_ISO,
  },
  {
    label: "▶ LOAD Android 2.2-r2 Froyo (CORS mirror, 71 MB)",
    kind: "cdrom",
    url: ANDROID_FROYO_ISO,
  },
];
