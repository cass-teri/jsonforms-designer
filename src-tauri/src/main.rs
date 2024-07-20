// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn build_menu() -> Menu {
    let menu = Menu::new()
        .add_submenu(Submenu::new(
            "App",
            Menu::new()
                .add_native_item(MenuItem::Quit)
        ))
        .add_submenu(Submenu::new(
            "File",
            Menu::new()
                .add_item(CustomMenuItem::new("new_project".to_string(), "New Project"))
                .add_item(CustomMenuItem::new("open_project".to_string(), "Open Project"))
                .add_item(CustomMenuItem::new("save_project".to_string(), "Save Project"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("new_data_schema".to_string(), "New Data Schema"))
                .add_item(CustomMenuItem::new("new_ui_schema".to_string(), "New UI Schema"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("open_data_schema".to_string(), "Open Data Schema"))
                .add_item(CustomMenuItem::new("open_ui_schema".to_string(), "Open UI Schema"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("save_data_schema".to_string(), "Save Data Schema"))
                .add_item(CustomMenuItem::new("save_ui_schema".to_string(), "Save UI Schema"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("save_all".to_string(), "Save All"))
                .add_native_item(MenuItem::Separator)
                .add_item(CustomMenuItem::new("save_data_schema as".to_string(), "Save Data Schema As"))
                .add_item(CustomMenuItem::new("save_ui_schema as".to_string(), "Save Data Schema As"))
        ))
        .add_submenu(Submenu::new("Edit", Menu::new()
            .add_native_item(MenuItem::Undo)
            .add_native_item(MenuItem::Redo)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Cut)
            .add_native_item(MenuItem::Copy)
            .add_native_item(MenuItem::Paste)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::SelectAll)
        ))
        .add_submenu(Submenu::new("Window", Menu::new()
            .add_native_item(MenuItem::Minimize)
            .add_native_item(MenuItem::Zoom)
        ))

        ;
    menu
}

fn main() {
    tauri::Builder::default()
        .menu(build_menu())
        .on_menu_event(|event| {
            match event.menu_item_id() {
                "new_project" => {
                    event.window().emit("new_project", "").unwrap();
                }
                "open_project" => {
                    println!("Open Project");
                    event.window().emit("open_project", "").unwrap();
                }
                "save_project" => {
                    event.window().emit("save_project", "").unwrap();
                }
                "new_data_schema" => {
                    event.window().emit("new_data_schema", "").unwrap();
                }
                "new_ui_schema" => {
                    event.window().emit("new_ui_schema", "").unwrap();
                }
                "open_data_schema" => {
                    event.window().emit("open_data_schema", "").unwrap();
                }
                "open_ui_schema" => {
                    event.window().emit("open_ui_schema", "").unwrap();
                }
                "save_data_schema" => {
                    event.window().emit("save_data_schema", "").unwrap();
                }
                "save_ui_schema" => {
                    event.window().emit("save_ui_schema", "").unwrap();
                }
                "save_data_schema as" => {
                    event.window().emit("save_data_schema_as", "").unwrap();
                }
                "save_ui_schema as" => {
                    event.window().emit("save_ui_schema_as", "").unwrap();
                }
                "save_all" => {
                    event.window().emit("save_all", "").unwrap();
                }
                _ => {}
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
