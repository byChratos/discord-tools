import { load, Store } from "@tauri-apps/plugin-store";

export async function getValueFromStore(storeName: string, key: string): Promise<string | undefined> {
    const store: Store = await load(storeName, { autoSave: false });
    const storeValue: string | undefined = await store.get(key);
    store.close();
    return storeValue;
}