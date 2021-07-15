# login_project
試做登入系統，使用some篩選資料庫的資料是否存在
若驗證成功則進入Welcome Page
---完成於2021/07/15

## Features - 功能說明
* 使用者可以輸入帳號(信箱)、密碼登入
* 登入成功後，進入Welcome Page
* 登入失敗，顯示invalid user、wrong password等字樣

## Environment - 環境建置
* 開發環境: VS Code 
* 執行環境: Node.js 
* 框架: Express
* 模板引擎: Express-handlebars
* 實用套件: Nodemon

## Installation - 專案安裝
1. 在終端機輸入指令clone專案到本機電腦  
```git clone https://github.com/joeyWuTRKTR/restaurant_list-project.git```
2. 進入專案目錄  
```cd restaurant_list```
3. 安裝相關套件  
```npm install```
4. 載入種子資料  
``` npm run seed```
5. 啟動專案  
```npm run dev```
6. 終端機出現以下訊息後，即可在http://localhost:3000使用  
```Express is listening on https://localhost:3000```
