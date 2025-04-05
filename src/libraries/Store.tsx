import { load, Store } from "@tauri-apps/plugin-store";

export async function getValueFromStore(storeName: string, key: string): Promise<string | undefined> {
    const store: Store = await load(storeName, { autoSave: false });
    const storeValue: string | undefined = await store.get(key);
    await store.close();
    return storeValue;
}

export async function storeValueToStore(storeName: string, key: string, value: string): Promise<void> {
    const store: Store = await load(storeName, { autoSave: false });
    await store.set(key, value);
    await store.save();
    await store.close();
}