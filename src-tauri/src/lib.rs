use chrono::{Datelike, Local, NaiveDate, NaiveDateTime, NaiveTime, TimeZone, Timelike};
use serde::{Deserialize, Serialize};
use tauri::command;

#[derive(Serialize, Deserialize)]
struct Time {
    hour: u32,
    minute: u32,
}

#[derive(Serialize, Deserialize)]
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

#[derive(Serialize, Deserialize)]
struct Mode {
    name: String,
    flag: String,
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
            let weekday_number: u8 = (date.weekday().num_days_from_monday() + 1)
                .try_into()
                .unwrap();
            day_list.push(DayWeekday {
                day,
                weekday: weekday_number,
            });
        }
    }

    day_list
}

#[command]
fn generate_timestamp(time: Time, date: Date, mode: Mode) -> String {
    //TODO let user select timezone

    let naive_date = NaiveDate::from_ymd_opt(date.year, date.month, date.day).expect("Wrong date!");

    let naive_time = NaiveTime::from_hms_opt(time.hour, time.minute, 0).expect("Wrong time!");

    let naive_datetime = NaiveDateTime::new(naive_date, naive_time);
    let local_datetime = Local.from_local_datetime(&naive_datetime).unwrap();

    let unix = local_datetime.timestamp();

    if mode.flag != "DO_NOT_SET" {
        let formated_string = format!("<t:{}:{}>", unix, mode.flag);
        return formated_string;
    } else {
        let formated_string = format!("<t:{}>", unix);
        return formated_string;
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::new().build())
        //.plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            #[cfg(desktop)]
            let _ = app
                .handle()
                .plugin(tauri_plugin_updater::Builder::new().build());
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_time,
            get_date,
            get_days_of_month,
            generate_timestamp
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
