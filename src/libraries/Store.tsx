import { load } from "@tauri-apps/plugin-store";

export async function getStore(setStore: Function, name: string, autoSave: boolean) {
    const store = await load(name, { autoSave: autoSave });
    setStore(store);
}