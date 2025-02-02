import { check } from "@tauri-apps/plugin-updater";
import { ask, message } from "@tauri-apps/plugin-dialog";
import { invoke } from "@tauri-apps/api/core";

export async function checkForAppUpdates(onUserClick: boolean) {
    const update = await check();
    if (update === null) {
        await message('No updates available.\nYou are already on the newest version!', { 
            title: 'Update not available',
            kind: 'info',
            okLabel: 'OK'
        });
        return;
    } else if (update?.available) {
        const yes = await ask(`Update to ${update.version} is available!\n\nRelease notes: ${update.body}`, { 
            title: 'Update Available',
            kind: 'info',
            okLabel: 'Update',
            cancelLabel: 'Cancel'
        });
        if (yes) {
            await update.downloadAndInstall();
            // Restart the app after the update is installed by calling the Tauri command that handles restart for your app
            // It is good practice to shut down any background processes gracefully before restarting
            // As an alternative, you could ask the user to restart the app manually
            await invoke("graceful_restart");
        }
    } else if (onUserClick) {
        await message('You are on the latest version. Stay awesome!', { 
            title: 'No Update Available',
            kind: 'info',
            okLabel: 'OK'
        });
    }
}