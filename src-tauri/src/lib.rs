use chrono::{Local, Datelike, Timelike};
use tauri::command;
use serde::Serialize;

#[derive(Serialize)]
struct Time {
  hour: u32,
  minute: u32,
}

#[derive(Serialize)]
struct Date {
  day: u32,
  month: u32,
  year: i32,
}

#[command]
fn get_time() -> Time {
  let now = Local::now();
  Time {
    hour: now.hour(),
    minute: now.minute(),
  }
}

#[command]
fn get_date() -> Date {
  let now = Local::now();
  Date {
    day: now.day(),
    month: now.month(),
    year: now.year(),
  }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![get_time, get_date])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
