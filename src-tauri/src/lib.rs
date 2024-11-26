use chrono::{Datelike, Local, NaiveDate, Timelike};
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

#[derive(Serialize)]
struct DayWeekday {
  day: u32,
  weekday: u8,
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

#[command]
fn get_days_of_month(month: u32, year: i32) -> Vec<DayWeekday> {
  let mut day_list = Vec::new();

  let days_in_month = NaiveDate::from_ymd_opt(year, month + 1, 1)
      .unwrap_or_else(|| NaiveDate::from_ymd_opt((month + 1).try_into().unwrap(), 1, 1).unwrap())
      .pred_opt()
      .unwrap()
      .day();

  for day in 1..=days_in_month {
      if let Some(date) = NaiveDate::from_ymd_opt(year, month, day) {
          let weekday_number: u8 = (date.weekday().num_days_from_monday() + 1).try_into().unwrap();
          day_list.push(DayWeekday {
              day,
              weekday: weekday_number,
          });
      }
  }

  day_list
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
    .invoke_handler(tauri::generate_handler![get_time, get_date, get_days_of_month])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
