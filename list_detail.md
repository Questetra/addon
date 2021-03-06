# サービスタスク定義ファイルリスト B 2018-11-26 17:25:58

## クエリ文字列 から Value 抽出 <small>en:Extract Value from Query String</small>

last-modified:2018-11-29, engine-type : 1

### Summary

> シリアライズされたクエリ文字列（例 "a=123&amp;b=456"）から、指定パラメータの値（value）を抽出し、ワークフローデータとして格納します
>> Extracts the value of the specified parameter from the serialized query-string (e.g. "a=123&amp;b=456") and stores it as workflow data

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Extractor-ParamValue.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Extractor-ParamValue.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/extractor-serialized-string/](https://support.questetra.com/ja/addons/extractor-serialized-string/)
    - [EN : https://support.questetra.com/addons/extractor-serialized-string/](https://support.questetra.com/addons/extractor-serialized-string/)

## Box アップロード <small>en:Upload to Box</small>

last-modified:2018-11-26, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Box-upload.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Box-upload.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/box-upload/](https://support.questetra.com/ja/addons/services/box-upload/)
    - [EN : https://support.questetra.com/addons/services/box-upload/](https://support.questetra.com/addons/services/box-upload/)

## TSV の列追加 <small>en:Add Column to Tsv</small>

last-modified:2018-11-15, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tsv-AddColumn.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tsv-AddColumn.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tsv-addcolumn/](https://support.questetra.com/ja/addons/tsv-addcolumn/)
    - [EN : https://support.questetra.com/addons/tsv-addcolumn/](https://support.questetra.com/addons/tsv-addcolumn/)

## TSV の並び替え <small>en:Change Order of Tsv</small>

last-modified:2018-11-15, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tsv-ChangeOrder.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tsv-ChangeOrder.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tsv-changeorder/](https://support.questetra.com/ja/addons/tsv-changeorder/)
    - [EN : https://support.questetra.com/addons/tsv-changeorder/](https://support.questetra.com/addons/tsv-changeorder/)

## TSV の行削除 <small>en:Delete Rows of Tsv</small>

last-modified:2018-11-15, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tsv-DeleteRows.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tsv-DeleteRows.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tsv-deleterows/](https://support.questetra.com/ja/addons/tsv-deleterows/)
    - [EN : https://support.questetra.com/addons/tsv-deleterows/](https://support.questetra.com/addons/tsv-deleterows/)

## コンバータ (Table to Excel-CSV FILE) <small>en:Converter (Table to Excel-CSV FILE)</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TableToExcelCsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TableToExcelCsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tabletoexcelcsv/](https://support.questetra.com/ja/addons/converter-tabletoexcelcsv/)
    - [EN : https://support.questetra.com/addons/converter-tabletoexcelcsv/](https://support.questetra.com/addons/converter-tabletoexcelcsv/)

## 数値によるTSVフィルタ <small>en:TSV Filtering by Number</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tsv-FilteringByNumber.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tsv-FilteringByNumber.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tsv-filteringbynumber/](https://support.questetra.com/ja/addons/tsv-filteringbynumber/)
    - [EN : https://support.questetra.com/addons/tsv-filteringbynumber/](https://support.questetra.com/addons/tsv-filteringbynumber/)

## 日付によるTSVフィルタ <small>en:TSV Filtering by Date</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> 文字型データ項目に格納されたタブ区切りテキスト（TSV）の行を、日付の範囲でフィルターして保存します
日付を表す文字列値は Date.parse() メソッドによる認識可能な形式でなければなりません。
日付のみの文字列 (例: "1970-01-01") は、地方時ではなくUTCとして扱われます。
>> Filter a row in a tab-delimited text (TSV) stored in a String type Data Items by date range and save.
dateString should be in a format recognized by the Date.parse() method.
Date-only strings (e.g. "1970-01-01") are treated as UTC, not local.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tsv-FilteringByDate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tsv-FilteringByDate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tsv-filteringbydate/](https://support.questetra.com/ja/addons/tsv-filteringbydate/)
    - [EN : https://support.questetra.com/addons/tsv-filteringbydate/](https://support.questetra.com/addons/tsv-filteringbydate/)

## コンバータ (Date to 和暦テキスト) <small>en:Converter (Date to Japanese Era String)</small>

last-modified:2018-11-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-DateToJpEra.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-DateToJpEra.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-datetojpera/](https://support.questetra.com/ja/addons/converter-datetojpera/)
    - [EN : https://support.questetra.com/addons/converter-datetojpera/](https://support.questetra.com/addons/converter-datetojpera/)

## コンバータ (Table to Options) <small>en:Converter (Table to Options)</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> テーブル型データ項目（1列目2列目）に格納されたID(value)-Label(display)を、２つの複数行文字列型に格納します。（選択肢XMLとして基盤登録するには、選択肢型データで２つの文字列型データを参照します。その後、［サービスタスク（選択肢マスタ更新）］から当該選択肢型データを参照します）
>> Convert IDs-Labels defined in Table data to two String type data items. (In order to base registration as Options XML, refer to two String type data from Select type data. Then, refer to the Select type data from [Service Task (Choices Update)].)

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-Table-Options.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-Table-Options.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/addons/converter-table-options/](https://support.questetra.com/addons/converter-table-options/)
    - [EN : https://support.questetra.com/ja/addons/converter-table-options/](https://support.questetra.com/ja/addons/converter-table-options/)

## コンバータ (Options to Table) <small>en:Converter (Options to Table)</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> 選択肢XML（M319）に定義されたID(value)-Label(display)を、テーブル型データ項目（２列）に展開します。
>> Convert IDs-Labels (values-displays) defined in Options XML (M319) to Table type data item (2 columns).

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-Options-Table.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-Options-Table.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-options-table/](https://support.questetra.com/ja/addons/converter-options-table/)
    - [EN : https://support.questetra.com/addons/converter-options-table/](https://support.questetra.com/addons/converter-options-table/)

## コンバータ (Tsv to Table) <small>en:Converter (Tsv to Table)</small>

last-modified:2018-11-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TsvToTable.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TsvToTable.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tsvtotable/](https://support.questetra.com/ja/addons/converter-tsvtotable/)
    - [EN : https://support.questetra.com/addons/converter-tsvtotable/](https://support.questetra.com/addons/converter-tsvtotable/)

## コンバータ (Email-Str to Quser) <small>en:Converter (Email-Str to Quser)</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> 文字型データ項目に格納されているメールアドレス文字列からQuestetraユーザを判定し、ユーザ型データ項目を更新します。
>> Judging the Questetra User by the email address string stored in the string type data item and update the User type data item.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-EmailStr-Quser.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-EmailStr-Quser.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-emailstr-quser/](https://support.questetra.com/ja/addons/converter-emailstr-quser/)
    - [EN : https://support.questetra.com/addons/converter-emailstr-quser/](https://support.questetra.com/addons/converter-emailstr-quser/)

## コンバータ (Quser to ID, Name, Email) <small>en:Converter (Quser to ID, Name, Email)</small>

last-modified:2018-11-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/User-Converter.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/User-Converter.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/user-converter/](https://support.questetra.com/ja/addons/user-converter/)
    - [EN : https://support.questetra.com/addons/user-converter/](https://support.questetra.com/addons/user-converter/)

## コンバータ (TSV to Excel-CSV FILE) sjis <small>en:Converter (TSV to Excel-CSV FILE) sjis</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TsvToExcelCsvSjis.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TsvToExcelCsvSjis.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tsvtoexcelcsvsjis/](https://support.questetra.com/ja/addons/converter-tsvtoexcelcsvsjis/)
    - [EN : https://support.questetra.com/addons/converter-tsvtoexcelcsvsjis/](https://support.questetra.com/addons/converter-tsvtoexcelcsvsjis/)

## コンバータ (TSV to Excel-CSV FILE) <small>en:Converter (TSV to Excel-CSV FILE)</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TsvToExcelCsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TsvToExcelCsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tsvtoexcelcsv/](https://support.questetra.com/ja/addons/converter-tsvtoexcelcsv/)
    - [EN : https://support.questetra.com/addons/converter-tsvtoexcelcsv/](https://support.questetra.com/addons/converter-tsvtoexcelcsv/)

## コンバータ (Table to TSV) <small>en:Converter (Table to TSV)</small>

last-modified:2018-11-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TableToTsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TableToTsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tabletotsv/](https://support.questetra.com/ja/addons/converter-tabletotsv/)
    - [EN : https://support.questetra.com/addons/converter-tabletotsv/](https://support.questetra.com/addons/converter-tabletotsv/)

## コンバータ (Table to Excel-CSV FILE) sjis <small>en:Converter (Table to Excel-CSV FILE) sjis</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Converter-TableToExcelCsvSjis.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Converter-TableToExcelCsvSjis.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/converter-tabletoexcelcsvsjis/](https://support.questetra.com/ja/addons/converter-tabletoexcelcsvsjis/)
    - [EN : https://support.questetra.com/addons/converter-tabletoexcelcsvsjis/](https://support.questetra.com/addons/converter-tabletoexcelcsvsjis/)

## コンバータ (Email to Quser) <small>en:Converter (Email to Quser)</small>

last-modified:2018-11-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/User-EmailToQuser.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/User-EmailToQuser.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/user-emailtoquser/](https://support.questetra.com/ja/addons/user-emailtoquser/)
    - [EN : https://support.questetra.com/addons/user-emailtoquser/](https://support.questetra.com/addons/user-emailtoquser/)

## 請求データから仕訳伝票TSVの生成 <small>en:Journal Slip TSV from Invoice Data</small>

last-modified:2018-11-14, engine-type : 1

### Summary

> 売上金額・売上日・決済予定日から、売上金の振替伝票TSV（text/tab-separated-values）を生成します。一括して売上計上するケース、数か月に分けて売上分割するケース、それらが複合するケースに対応します（分割剰余は初月に加算されます）。 会計システムにインポート可能なファイルを生成させるは、下流工程に「TSV to Excel-CSV FILE」などのコンバータを配置して下さい。
>> Generate transfer slip TSV (tab-separated-values) from sales amount, sales date, due date. The case of sales division is also supported. In order to generate a file for the accounting system, please place a converter such as "TSV to Excel-CSV FILE".

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/JournalTsv-Generator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/JournalTsv-Generator.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/journal-tsv-generator/](https://support.questetra.com/ja/addons/journal-tsv-generator/)
    - [EN : https://support.questetra.com/addons/journal-tsv-generator/](https://support.questetra.com/addons/journal-tsv-generator/)

## Google Sheets セル値の更新 <small>en:Google Spreadsheets value update</small>

last-modified:2018-11-09, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Config [OAuth 2.0 Setting] (scope) https://www.googleapis.com/auth/spreadsheets


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-valueUpdate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-valueUpdate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-valueupdate/](https://support.questetra.com/ja/addons/googlesheets-valueupdate/)
    - [EN : https://support.questetra.com/addons/googlesheets-valueupdate/](https://support.questetra.com/addons/googlesheets-valueupdate/)

## Google Sheets 2列データの一括取得 <small>en:Batch to Get Two Column Values from Google Sheet</small>

last-modified:2018-11-09, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-getIdsLabels.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-getIdsLabels.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-getidslabels/](https://support.questetra.com/ja/addons/googlesheets-getidslabels/)
    - [EN : https://support.questetra.com/addons/googlesheets-getidslabels/](https://support.questetra.com/addons/googlesheets-getidslabels/)

## Google Drive フォルダ生成 <small>en:Creating Folder on Google Drive</small>

last-modified:2018-11-07, engine-type : 1

### Summary

> Google Drive の指定フォルダ内に新しいフォルダを作成します
>> Create a new folder in the specified folder on Google Drive

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-folderCreate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-folderCreate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googledrive-foldercreate/](https://support.questetra.com/ja/addons/googledrive-foldercreate/)
    - [EN : https://support.questetra.com/addons/googledrive-foldercreate/](https://support.questetra.com/addons/googledrive-foldercreate/)

## Googleドライブ ファイル削除 <small>en:Deleting File on Google Drive</small>

last-modified:2018-11-07, engine-type : 1

### Summary

> Google Drive上のファイルやフォルダを削除します。一度に複数の削除が可能です。複数削除する場合、データ項目では1行につき1つずつIDを書くようにしてください。
>> Delete files or folders on Google Drive.You can delete multiple files or folders at once.When you delete multiple ones,you should write one file/folder ID on each line.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-folderDelete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-folderDelete.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googledrive-folderdelete/](https://support.questetra.com/ja/addons/googledrive-folderdelete/)
    - [EN : https://support.questetra.com/addons/googledrive-folderdelete/](https://support.questetra.com/addons/googledrive-folderdelete/)

## Google Drive 共有設定 <small>en:Creating Permissions on Google Drive</small>

last-modified:2018-11-07, engine-type : 1

### Summary

> Google Drive の指定ファイルを共有します
>> Create Permissions in the specified files on Google Drive

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-permissionCreate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-permissionCreate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googledrive-permissioncreate/](https://support.questetra.com/ja/addons/googledrive-permissioncreate/)
    - [EN : https://support.questetra.com/addons/googledrive-permissioncreate/](https://support.questetra.com/addons/googledrive-permissioncreate/)

## Questetra 組織メンバー追加 <small>en:Questetra Org Membership Add</small>

last-modified:2018-11-06, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> System Administrator Authority and User Manager Authority required
1. Get Secret: https://{YOUR}.questetra.net/Admin/OAuth2/Client/list
2. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-membershipAdd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-membershipAdd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/questetra-membershipadd/](https://support.questetra.com/ja/addons/questetra-membershipadd/)
    - [EN : https://support.questetra.com/addons/questetra-membershipadd/](https://support.questetra.com/addons/questetra-membershipadd/)

## Questetra ロールメンバー削除 <small>en:Questetra Role Membership Delete</small>

last-modified:2018-11-06, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> System Administrator Authority and User Manager Authority required
1. Get Secret: https://{YOUR}.questetra.net/Admin/OAuth2/Client/list
2. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-rolemembershipDel.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-rolemembershipDel.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/questetra-rolemembershipadd/](https://support.questetra.com/ja/addons/questetra-rolemembershipadd/)
    - [EN : https://support.questetra.com/addons/questetra-rolemembershipadd/](https://support.questetra.com/addons/questetra-rolemembershipadd/)

## Questetra ロールメンバー追加 <small>en:Questetra Role Membership Add</small>

last-modified:2018-11-06, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> System Administrator Authority and User Manager Authority required
1. Get Secret: https://{YOUR}.questetra.net/Admin/OAuth2/Client/list
2. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-rolemembershipAdd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-rolemembershipAdd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/questetra-rolemembershipadd/](https://support.questetra.com/ja/addons/questetra-rolemembershipadd/)
    - [EN : https://support.questetra.com/addons/questetra-rolemembershipadd/](https://support.questetra.com/addons/questetra-rolemembershipadd/)

## Questetra 組織メンバー削除 <small>en:Questetra Org Membership Delete</small>

last-modified:2018-11-06, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> System Administrator Authority and User Manager Authority required
1. Get Secret: https://{YOUR}.questetra.net/Admin/OAuth2/Client/list
2. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-membershipDelete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-membershipDelete.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/questetra-membershipdelete/](https://support.questetra.com/ja/addons/questetra-membershipdelete/)
    - [EN : https://support.questetra.com/addons/questetra-membershipdelete/](https://support.questetra.com/addons/questetra-membershipdelete/)

## データ複製 (テーブル) <small>en:Data Duplicator (Table)</small>

last-modified:2018-11-01, engine-type : 1

### Summary

> テーブル型データ項目に格納されている全データを、他のテーブル型データに複製します。
>> Duplicates all data stored in table type data items to other table type data.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Duplicator-table.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Duplicator-table.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/duplicator-table/](https://support.questetra.com/ja/addons/duplicator-table/)
    - [EN : https://support.questetra.com/addons/duplicator-table/](https://support.questetra.com/addons/duplicator-table/)

## BoxのWebhookのJSONを解析 <small>en:Parse Box Webhook JSON</small>

last-modified:2018-10-26, engine-type : 1

### Summary

> BoxのWebhookにより送られてきたJSONオブジェクトを解析します。
>> Parse the JSON object sent by a webhook on Box.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Box-webhook-json-parse.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Box-webhook-json-parse.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/box-webhook-json-parse/](https://support.questetra.com/ja/addons/box-webhook-json-parse/)
    - [EN : https://support.questetra.com/addons/box-webhook-json-parse/](https://support.questetra.com/addons/box-webhook-json-parse/)

## BoxのWebhookを削除 <small>en:Delete Box Webhook</small>

last-modified:2018-10-24, engine-type : 1

### Summary

> BoxのWebhookを削除します。事前にOAuth2の設定が必要です。
>> Delete the Box webhook. In advance,you have to configure the OAuth2.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Box-webhook-delete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Box-webhook-delete.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/box-webhook-delete/](https://support.questetra.com/ja/addons/box-webhook-delete/)
    - [EN : https://support.questetra.com/addons/box-webhook-delete/](https://support.questetra.com/addons/box-webhook-delete/)

## BoxのWebhookを作成(フォルダの監視) <small>en:Create Box Webhook(folder)</small>

last-modified:2018-10-24, engine-type : 1

### Summary

> フォルダ単位での監視を行うBoxのWebhookを作成します。事前にOAuth2の設定が必要です。
>> Create a Box webhook to check events on the folder. In advance,you have to configure the OAuth2.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Box-webhook-create.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Box-webhook-create.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/box-webhook-create/](https://support.questetra.com/ja/addons/box-webhook-create/)
    - [EN : https://support.questetra.com/addons/box-webhook-create/](https://support.questetra.com/addons/box-webhook-create/)

## 法人番号 企業情報 参照 <small>en:Houjin-Bango Corporate Info Retrieve</small>

last-modified:2018-10-15, engine-type : <font color="Red">undefined</font>

### Summary

> 国税庁 法人番号 Web-API v3 にアクセスし、法人番号（13桁数字）に対応する正式商号・登記住所・フリガナ・最終更新日等の各データを取得します。事前に、国税庁から「アプリケーションID」の発行（無料）を受けておく必要があります
>> Access the National Tax Agency corporate number Web-API v3 and obtain the business name, address and reading data corresponding to the corporate number (13 digit number). "Application ID" from the National Tax Agency (free) needed

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/HoujinBangou-CorpInfo-retrieve.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/HoujinBangou-CorpInfo-retrieve.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/houjinbangou-corpinfo-retrieve/](https://support.questetra.com/ja/addons/houjinbangou-corpinfo-retrieve/)
    - [EN : https://support.questetra.com/addons/houjinbangou-corpinfo-retrieve/](https://support.questetra.com/addons/houjinbangou-corpinfo-retrieve/)

## Typetalk メッセージ投稿 <small>en:Typetalk Post Message</small>

last-modified:2018-10-15, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Typetalk-messagePost.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Typetalk-messagePost.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/typetalk-messagepost/](https://support.questetra.com/ja/addons/typetalk-messagepost/)
    - [EN : https://support.questetra.com/addons/typetalk-messagepost/](https://support.questetra.com/addons/typetalk-messagepost/)

## Typetalk メッセージ投稿（APIトークン方式） <small>en:Typetalk Post Message (use API token)</small>

last-modified:2018-10-15, engine-type : 1

### Summary

> URL で指定されたトピックにボットとして投稿します
>> Post a message as a bot to the topic specified by URL

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Typetalk-messagePost-token.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Typetalk-messagePost-token.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/typetalk-messagepost-token/](https://support.questetra.com/ja/addons/typetalk-messagepost-token/)
    - [EN : https://support.questetra.com/addons/typetalk-messagepost-token/](https://support.questetra.com/addons/typetalk-messagepost-token/)

## OpenChat 投稿 (Questetra 内の社内SNS機能) <small>en:Post to OpenChat (Questetra's Enterprise Social)</small>

last-modified:2018-10-01, engine-type : 1

### Summary

> 全ユーザが検索閲覧可能なメッセージが OpenChat に投稿されます。ワークフローエンジンの立場で投稿されるためフォロワーの概念はありません。"#p1234" の書式付投稿のため案件に関与するユーザのタイムラインに表示されます。組織IDがセットされている場合には、組織メンバーのタイムラインにも表示されます。
>> Messages that all users can search and view will be posted to OpenChat. Since posted on the workflow engine's standpoint, there is no concept of followers. It is displayed in the timeline of the participants as "#p1234".

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-OpenchatPost.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-OpenchatPost.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/questetra-openchatpost/](https://support.questetra.com/ja/addons/questetra-openchatpost/)
    - [EN : https://support.questetra.com/addons/questetra-openchatpost/](https://support.questetra.com/addons/questetra-openchatpost/)

## 差分確認 (Table and Table) <small>en:Diff (Table and Table)</small>

last-modified:2018-10-01, engine-type : 1

### Summary

> ２つのテーブル型データ項目を行単位で差分確認します
>> Confirm difference information of two table type data items line by line

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Tables-Diff.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Tables-Diff.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/tables-diff/](https://support.questetra.com/ja/addons/tables-diff/)
    - [EN : https://support.questetra.com/addons/tables-diff/](https://support.questetra.com/addons/tables-diff/)

## サービスタスク定義ファイル(XML)をパースする <small>en:Parse service task definition file (XML)</small>

last-modified:2018-09-28, engine-type : <font color="Red">undefined</font>

### Summary

> サービスタスク定義ファイル(XML)をパースして、各値を格納します。設定が不足している事項を検出します。
>> Parse the service task definition file (XML) and store each value. Detects missing settings.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/ServiceTaskXML_parse.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/ServiceTaskXML_parse.xml)
- ヘルプページURL
    - [JA : https://github.com/yambal/Parse-service-task-definition-file-XML-file-data](https://github.com/yambal/Parse-service-task-definition-file-XML-file-data)
    - EN : <font color="Red">なし</font>

## Google Sheets 行追加 (TSV) <small>en:New Record to Google Sheets (TSV)</small>

last-modified:2018-09-03, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-appendTsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-appendTsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-appendtsv/](https://support.questetra.com/ja/addons/googlesheets-appendtsv/)
    - [EN : https://support.questetra.com/addons/googlesheets-appendtsv/](https://support.questetra.com/addons/googlesheets-appendtsv/)

## Google Cloud Print ジョブの送信 <small>en:Submit Print Jobs via Google Cloud Print Service</small>

last-modified:2018-09-01, engine-type : 1

### Summary

> ワークフローデータとして添付されているファイル群を印刷します。（Google Cloud Print 経由）
>> Prints files attached as workflow data (via Google Cloud Print). Detail to the "GCP /submit API".

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleCloudPrint-print.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleCloudPrint-print.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlecloudprint-print/](https://support.questetra.com/ja/addons/googlecloudprint-print/)
    - [EN : https://support.questetra.com/addons/googlecloudprint-print/](https://support.questetra.com/addons/googlecloudprint-print/)

## Hangouts Chat メッセージ投稿 <small>en:Hangouts Chat Post Message</small>

last-modified:2018-08-31, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/HangoutsChat-messagePost.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/HangoutsChat-messagePost.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/hangoutschat-messageadd/](https://support.questetra.com/ja/addons/services/hangoutschat-messageadd/)
    - [EN : https://support.questetra.com/addons/services/hangoutschat-messageadd/](https://support.questetra.com/addons/services/hangoutschat-messageadd/)

## Microsoft Teams メッセージ投稿 <small>en:Microsoft Teams Post Message</small>

last-modified:2018-08-24, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/MicrosoftTeams-messagePost.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/MicrosoftTeams-messagePost.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/microsoftteams-messagepost/](https://support.questetra.com/ja/addons/microsoftteams-messagepost/)
    - [EN : https://support.questetra.com/addons/microsoftteams-messagepost/](https://support.questetra.com/addons/microsoftteams-messagepost/)

## ChatWork メッセージ追加 <small>en:ChatWork Add Message</small>

last-modified:2018-08-24, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Chatwork-MessageAdd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Chatwork-MessageAdd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/chatwork-messageadd/](https://support.questetra.com/ja/addons/chatwork-messageadd/)
    - [EN : https://support.questetra.com/addons/chatwork-messageadd/](https://support.questetra.com/addons/chatwork-messageadd/)

## Zendesk Support チケット更新 <small>en:Zendesk Support Update Ticket</small>

last-modified:2018-08-24, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/ZendeskSupport-ticketUpdateAPItoken.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/ZendeskSupport-ticketUpdateAPItoken.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/zendesksupport-ticketupdateapitoken/](https://support.questetra.com/ja/addons/zendesksupport-ticketupdateapitoken/)
    - [EN : https://support.questetra.com/addons/zendesksupport-ticketupdateapitoken/](https://support.questetra.com/addons/zendesksupport-ticketupdateapitoken/)

## Google Sheets の値のTSV取得 <small>en:Get Google Sheets Values as TSV</small>

last-modified:2018-08-19, engine-type : 1

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-GetValuesAsTsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-GetValuesAsTsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-getvaluesastsv/](https://support.questetra.com/ja/addons/googlesheets-getvaluesastsv/)
    - [EN : https://support.questetra.com/addons/googlesheets-getvaluesastsv/](https://support.questetra.com/addons/googlesheets-getvaluesastsv/)

## JSONPath による JSON Value の取得 <small>en:Single Value from a JSON object using JSONPath</small>

last-modified:2018-07-10, engine-type : <font color="Red">undefined</font>

### Summary

> JSON テキストデータから指定した値を取得し、ワークフローデータとして格納します
>> Obtains the specified values from JSON text data and stores them as workflow data

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/JsonValue-Extractor.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/JsonValue-Extractor.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/jsonvalue-extractor/](https://support.questetra.com/ja/addons/jsonvalue-extractor/)
    - [EN : https://support.questetra.com/addons/jsonvalue-extractor/](https://support.questetra.com/addons/jsonvalue-extractor/)

## LINE Notifyでメッセージ投稿 <small>en:Post message through LINE Notify</small>

last-modified:2018-04-20, engine-type : <font color="Red">undefined</font>

### Summary

> LINE Notifyを通してLINEグループにメッセージを投稿します。事前にパーソナルアクセストークンを取得してください。送信先はトークンを取得するユーザー本人、またはその人の参加しているグループの中からトークン取得時に選択します。
>> Post message to your LINE Group through LINE Notify. In advance you have to get a personal access token. When get the one, choose where messages are sent. 

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Line-pushNotify.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Line-pushNotify.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/line-pushnotify/](https://support.questetra.com/ja/addons/line-pushnotify/)
    - [EN : https://support.questetra.com/addons/line-pushnotify/](https://support.questetra.com/addons/line-pushnotify/)

## ユーザの指定組織への所属を判定 <small>en:Check the user is in the organization</small>

last-modified:2018-04-20, engine-type : <font color="Red">undefined</font>

### Summary

> 指定したユーザが指定した組織のリーダであれば"L" を、スタッフであれば"M" を、所属していなければ空を返します。
>> If the specified user is the leader of the specified organization, this task returns "L". If he or she is one of the its staff members,it returns "M". If he or she doesn't belong to it, it returns nothing. 

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Questetra-userOrgPosition.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Questetra-userOrgPosition.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/questetra-userorgposition/](https://support.questetra.com/ja/addons/services/questetra-userorgposition/)
    - [EN : https://support.questetra.com/addons/services/questetra-userorgposition/](https://support.questetra.com/addons/services/questetra-userorgposition/)

## PayPal 請求書 生成 (USD) <small>en:PayPal Invoicing Create (USD)</small>

last-modified:2018-01-29, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Paypal-createUsd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Paypal-createUsd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/paypal-createusd/](https://support.questetra.com/ja/addons/services/paypal-createusd/)
    - [EN : https://support.questetra.com/addons/services/paypal-createusd/](https://support.questetra.com/addons/services/paypal-createusd/)

## PayPal 請求書 生成 (JPY) <small>en:PayPal Invoicing Create (JPY)</small>

last-modified:2018-01-29, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Paypal-createJpy.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Paypal-createJpy.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/paypal-createjpy/](https://support.questetra.com/ja/addons/paypal-createjpy/)
    - [EN : https://support.questetra.com/addons/paypal-createjpy/](https://support.questetra.com/addons/paypal-createjpy/)

## Deleting File on Google Drive

last-modified:2018-01-04, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-fileDelete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-fileDelete.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Sending FAX by Twilio

last-modified:2017-12-14, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Twilio-faxSend.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Twilio-faxSend.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Google Drive アップロード <small>en:Google Drive Simple Uploads</small>

last-modified:2017-11-27, engine-type : <font color="Red">undefined</font>

### Summary

> 5MB以下のファイルを簡易アップロードし、メタデータを更新します。ファイルIDは複数時カンマ区切り (チームドライブ対応)
>> Upload Files Less than 5 MB, and Update Metadata. File IDs are Comma-separated List if Multiple (supports Team Drives)

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-simpleUpload.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-simpleUpload.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googledrive-simpleupload/](https://support.questetra.com/ja/addons/googledrive-simpleupload/)
    - [EN : https://support.questetra.com/addons/googledrive-simpleupload/](https://support.questetra.com/addons/googledrive-simpleupload/)

## Google Drive ファイルコピー <small>en:Google Drive Files Copy</small>

last-modified:2017-11-26, engine-type : <font color="Red">undefined</font>

### Summary

> 既存ファイルを複製し、指定フォルダに新規保存します (チームドライブ対応)
>> Creates a copy of a file into the Folder (supports Team Drives)

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-filesCopy.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-filesCopy.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googledrive-filescopy/](https://support.questetra.com/ja/addons/googledrive-filescopy/)
    - [EN : https://support.questetra.com/addons/googledrive-filescopy/](https://support.questetra.com/addons/googledrive-filescopy/)

## Google Drive ファイル取得 <small>en:Google Drive Files Get</small>

last-modified:2017-11-20, engine-type : <font color="Red">undefined</font>

### Summary

> GoogleDriveファイルをダウンロードし、ファイル型データ項目に追加します (FileIDは共有メニュー詳細設定にある共有リンクから取得)
>> Download Drive-File and Add to file-type data (FileID via Link URL at Shareing settings Advanced)

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleDrive-filesGet.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleDrive-filesGet.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/addons/services/googledrive-foldercreate/](https://support.questetra.com/addons/services/googledrive-foldercreate/)
    - [EN : https://support.questetra.com/addons/services/googledrive-filesget/](https://support.questetra.com/addons/services/googledrive-filesget/)

## HTTP ファイル取得 <small>en:HTTP Files Get</small>

last-modified:2017-11-19, engine-type : <font color="Red">undefined</font>

### Summary

> HTTPでファイルをダウンロードし、ファイル型データ項目に追加します
>> Download via HTTP and Add to file-type data

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Http-filesGet.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Http-filesGet.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/templates/http-filesget/](https://support.questetra.com/ja/templates/http-filesget/)
    - [EN : https://support.questetra.com/addons/http-filesget/](https://support.questetra.com/addons/http-filesget/)

## Google Sheets 行追加 <small>en:Google Sheets Append Cells</small>

last-modified:2017-10-31, engine-type : <font color="Red">undefined</font>

### Summary

> シート末尾に１行追加し、その各セルにデータを入力します。必要あれば行領域を拡大します。
>> Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-appendCells.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-appendCells.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-appendcells/](https://support.questetra.com/ja/addons/googlesheets-appendcells/)
    - [EN : https://support.questetra.com/addons/googlesheets-appendcells/](https://support.questetra.com/addons/googlesheets-appendcells/)

## Backlog 課題追加 <small>en:Backlog Add Issue</small>

last-modified:2017-10-25, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Backlog-issueAdd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Backlog-issueAdd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/backlog-issueadd/](https://support.questetra.com/ja/addons/services/backlog-issueadd/)
    - [EN : https://support.questetra.com/addons/services/backlog-issueadd/](https://support.questetra.com/addons/services/backlog-issueadd/)

## Salesforce 注文追加 <small>en:Salesforce Order Create</small>

last-modified:2017-10-20, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Salesforce-orderCreate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Salesforce-orderCreate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/salesforce-ordercreate/](https://support.questetra.com/ja/addons/salesforce-ordercreate/)
    - [EN : https://support.questetra.com/addons/salesforce-ordercreate/](https://support.questetra.com/addons/salesforce-ordercreate/)

## 乱数ジェネレータ (上限変動版) <small>en:Random Number Generator (dynamic)</small>

last-modified:2017-10-20, engine-type : <font color="Red">undefined</font>

### Summary

> "A"で選択した数値型データに格納されている数を超えないランダムな整数が、"B"で選択した数値型データ項目に格納されます

>> A random number that does not exceed the number in the Data item selected config "A" (e.g.: 0 to 99) will be stored in the Data item selected in the config "B"


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/RandomNumber-GenerateDynamic.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/RandomNumber-GenerateDynamic.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/random-number-generator-dynamic/](https://support.questetra.com/ja/addons/random-number-generator-dynamic/)
    - [EN : https://support.questetra.com/addons/random-number-generator-dynamic/](https://support.questetra.com/addons/random-number-generator-dynamic/)

## 乱数ジェネレータ <small>en:Random Number Generator</small>

last-modified:2017-10-18, engine-type : <font color="Red">undefined</font>

### Summary

> "A"でセットした上限値を超えないランダムな整数が、"B"で選択した数値型データ項目に格納されます

>> A random number that does not exceed the config "A" (e.g.: 0 to 99) will be stored in the Data item selected in the config "B"


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/RandomNumber-Generate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/RandomNumber-Generate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/randomnumber-generate/](https://support.questetra.com/ja/addons/randomnumber-generate/)
    - [EN : https://support.questetra.com/addons/randomnumber-generate/](https://support.questetra.com/addons/randomnumber-generate/)

## Box ファイルアップロード（パスワード、期限） <small>en:[box] upload file and set Password/ Expiration</small>

last-modified:2017-10-10, engine-type : <font color="Red">undefined</font>

### Summary

> ファイル型にセットされたファイル(1つ)を box にアップロードし、公開用URLを取得します。同時に、ダウンロード用パスワードと公開期限を設定します。アップロードするファイルが格納されるファイル型データ項目の「最大添付ファイル数」は 1 としておくことを推奨します。
>> Uploads (one) file which set in File type Data Item into "box" and obtain its URL for publication. At the same time, it sets and expiration date. It is recommended to set "Max number of files" of the File type Data Item where the file to be uploaded as 1.

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Box-fileUpdate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Box-fileUpdate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/box-fileupdate/](https://support.questetra.com/ja/addons/services/box-fileupdate/)
    - [EN : https://support.questetra.com/addons/services/box-fileupdate/](https://support.questetra.com/addons/services/box-fileupdate/)

## Stripe 課金（Customer ID） <small>en:Stripe Charge to Customer ID</small>

last-modified:2017-09-09, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Stripe-chargeCreate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Stripe-chargeCreate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/stripe-chargecreate/](https://support.questetra.com/ja/addons/stripe-chargecreate/)
    - [EN : https://support.questetra.com/addons/stripe-chargecreate/](https://support.questetra.com/addons/stripe-chargecreate/)

## Stripe Customer ID 生成（Token ID より） <small>en:Stripe Customer ID Create from Token</small>

last-modified:2017-09-01, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Stripe-customerCreate.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Stripe-customerCreate.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/stripe-customercreate/](https://support.questetra.com/ja/addons/services/stripe-customercreate/)
    - [EN : https://support.questetra.com/addons/services/stripe-customercreate/](https://support.questetra.com/addons/services/stripe-customercreate/)

## Google Calendar イベントリスト <small>en:Google Calendar events list</small>

last-modified:2017-08-01, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Config [OAuth 2.0 Setting] (scope) https://www.googleapis.com/auth/calendar.readonly


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleCalendar-eventsList.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleCalendar-eventsList.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/googlecalendar-eventslist/](https://support.questetra.com/ja/addons/services/googlecalendar-eventslist/)
    - [EN : https://support.questetra.com/addons/services/googlecalendar-eventslist/](https://support.questetra.com/addons/services/googlecalendar-eventslist/)

## Google Analytics レポート (PV ranking) <small>en:Google Analytics reports (PV ranking)</small>

last-modified:2017-07-24, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Config [OAuth 2.0 Setting] (scope) https://www.googleapis.com/auth/analytics.readonly


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleAnalytics-reportsPv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleAnalytics-reportsPv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googleanalytics-reportspv/](https://support.questetra.com/ja/addons/googleanalytics-reportspv/)
    - [EN : https://support.questetra.com/addons/googleanalytics-reportspv/](https://support.questetra.com/addons/googleanalytics-reportspv/)

## Google Analytics レポート (Domain ranking) <small>en:Google Analytics reports (Domain ranking)</small>

last-modified:2017-07-24, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Config [OAuth 2.0 Setting] (scope) https://www.googleapis.com/auth/analytics.readonly


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleAnalytics-reportsDomain.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleAnalytics-reportsDomain.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/googleanalytics-reportsdomain/](https://support.questetra.com/ja/addons/services/googleanalytics-reportsdomain/)
    - [EN : https://support.questetra.com/addons/services/googleanalytics-reportsdomain/](https://support.questetra.com/addons/services/googleanalytics-reportsdomain/)

## Google Analytics レポート (Referrer ranking) <small>en:Google Analytics reports (Referrer ranking)</small>

last-modified:2017-07-24, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Config [OAuth 2.0 Setting] (scope) https://www.googleapis.com/auth/analytics.readonly


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleAnalytics-reportsRef.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleAnalytics-reportsRef.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googleanalytics-reportsref/](https://support.questetra.com/ja/addons/googleanalytics-reportsref/)
    - [EN : https://support.questetra.com/addons/googleanalytics-reportsref/](https://support.questetra.com/addons/googleanalytics-reportsref/)

## 指定行抽出 <small>en:Specific Line Reader</small>

last-modified:2017-07-14, engine-type : <font color="Red">undefined</font>

### Summary

> 複数行テキストから指定行を抽出します
>> Extract specified line from multi-line text

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Text-SpecificLine-Reader.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Text-SpecificLine-Reader.xml)
- ヘルプページURL
    - [JA : https://www.questetra.com/ja/tour/m4/m415/addon-specific-line-reader](https://www.questetra.com/ja/tour/m4/m415/addon-specific-line-reader)
    - [EN : https://www.questetra.com/tour/m4/m415/addon-specific-line-reader](https://www.questetra.com/tour/m4/m415/addon-specific-line-reader)

## Google Group メンバーリスト参照 <small>en:Google Group members retrieve</small>

last-modified:2017-07-10, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Manage Domain: https://admin.google.com/ManageOauthClients
3. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleGroup-membersRetrieve.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleGroup-membersRetrieve.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlegroup-membersretrieve/](https://support.questetra.com/ja/addons/googlegroup-membersretrieve/)
    - [EN : https://support.questetra.com/addons/googlegroup-membersretrieve/](https://support.questetra.com/addons/googlegroup-membersretrieve/)

## Google Group メンバー削除 <small>en:Google Group member delete</small>

last-modified:2017-07-04, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Manage Domain: https://admin.google.com/ManageOauthClients
3. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleGroup-memberDelete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleGroup-memberDelete.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlegroup-memberdelete/](https://support.questetra.com/ja/addons/googlegroup-memberdelete/)
    - [EN : https://support.questetra.com/addons/googlegroup-memberdelete/](https://support.questetra.com/addons/googlegroup-memberdelete/)

## Google Group メンバー追加 <small>en:Google Group member add</small>

last-modified:2017-07-03, engine-type : <font color="Red">undefined</font>

### Summary

> JA : <font color="Red">なし</font>
>> 1. Get Secret: https://console.developers.google.com/apis/dashboard
2. Manage Domain: https://admin.google.com/ManageOauthClients
3. Config [OAuth 2.0 Setting]


### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleGroup-memberAdd.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleGroup-memberAdd.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlegroup-memberadd/](https://support.questetra.com/ja/addons/googlegroup-memberadd/)
    - [EN : https://support.questetra.com/addons/googlegroup-memberadd/](https://support.questetra.com/addons/googlegroup-memberadd/)

## PayPal 請求書 ステータス確認 <small>en:PayPal Invoicing Status</small>

last-modified:2017-06-03, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Paypal-status.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Paypal-status.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/paypal-status/](https://support.questetra.com/ja/addons/paypal-status/)
    - [EN : https://support.questetra.com/addons/paypal-status/](https://support.questetra.com/addons/paypal-status/)

## PayPal 請求書 送信指示 <small>en:PayPal Invoicing Send</small>

last-modified:2017-06-02, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Paypal-send.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Paypal-send.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/paypal-send/](https://support.questetra.com/ja/addons/paypal-send/)
    - [EN : https://support.questetra.com/addons/paypal-send/](https://support.questetra.com/addons/paypal-send/)

## NHK Program Search

last-modified:2017-04-13, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Nhk-programSearch.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Nhk-programSearch.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/nhk-programsearch/](https://support.questetra.com/ja/addons/nhk-programsearch/)
    - [EN : https://support.questetra.com/addons/nhk-programsearch/](https://support.questetra.com/addons/nhk-programsearch/)

## コネクタ（TSV一括開始） <small>en:Connector for TSV Bulk Start</small>

last-modified:2016-12-22, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Process-BulkStartTsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Process-BulkStartTsv.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/process-bulkstarttsv/](https://support.questetra.com/ja/addons/process-bulkstarttsv/)
    - [EN : https://support.questetra.com/addons/process-bulkstarttsv/](https://support.questetra.com/addons/process-bulkstarttsv/)

## OpenChat 投稿 (Questetra 内のコラボレーション機能) <small>en:Post to OpenChat (Team Collaboration Tool on Questetra)</small>

last-modified:2016-11-31, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/OpenChat-PostTextFileData.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/OpenChat-PostTextFileData.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/openchat-posttextfiledata/](https://support.questetra.com/ja/addons/openchat-posttextfiledata/)
    - [EN : https://support.questetra.com/addons/openchat-posttextfiledata/](https://support.questetra.com/addons/openchat-posttextfiledata/)

## データ削除 (Null の上書き) <small>en:Delete Data (Overwrite with Null)</small>

last-modified:2016-11-22, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Data-Delete.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Data-Delete.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/data-delete/](https://support.questetra.com/ja/addons/data-delete/)
    - [EN : https://support.questetra.com/addons/data-delete/](https://support.questetra.com/addons/data-delete/)

## Google Cloud Print ジョブ送信 <small>en:Submit Print Job via GCP Service</small>

last-modified:2016-11-07, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleCloudPrint-printSingle.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleCloudPrint-printSingle.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/googlecloudprint-printsingle/](https://support.questetra.com/ja/addons/services/googlecloudprint-printsingle/)
    - [EN : https://support.questetra.com/addons/services/googlecloudprint-printsingle/](https://support.questetra.com/addons/services/googlecloudprint-printsingle/)

## 法人番号 API 企業情報の取得 <small>en:Get Info via Corporate Number API</small>

last-modified:2016-11-02, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/CorpNumberAPI-getInfo.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/CorpNumberAPI-getInfo.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Google Calendar 予定追加 <small>en:Insert event to Google Calendar</small>

last-modified:2016-10-25, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleCalendar-insertEvent.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleCalendar-insertEvent.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/googlecalendar-insertevent/](https://support.questetra.com/ja/addons/services/googlecalendar-insertevent/)
    - [EN : https://support.questetra.com/addons/services/googlecalendar-insertevent/](https://support.questetra.com/addons/services/googlecalendar-insertevent/)

## Salesforce 取引先の一括取得 <small>en:Batch to Get Accounts from Salesforce</small>

last-modified:2016-10-17, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Salesforce-getAccounts.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Salesforce-getAccounts.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/salesforce-getaccounts/](https://support.questetra.com/ja/addons/salesforce-getaccounts/)
    - [EN : https://support.questetra.com/addons/salesforce-getaccounts/](https://support.questetra.com/addons/salesforce-getaccounts/)

## Stripe カード情報登録 <small>en:Card Info to Stripe</small>

last-modified:2016-10-06, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Stripe-cardRegistrationMmyy.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Stripe-cardRegistrationMmyy.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/stripe-cardregistrationmmyy/](https://support.questetra.com/ja/addons/stripe-cardregistrationmmyy/)
    - [EN : https://support.questetra.com/addons/stripe-cardregistrationmmyy/](https://support.questetra.com/addons/stripe-cardregistrationmmyy/)

## Stripe カード情報登録 <small>en:Card Info to Stripe</small>

last-modified:2016-10-06, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Stripe-cardRegistration.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Stripe-cardRegistration.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/stripe-cardregistration/](https://support.questetra.com/ja/addons/stripe-cardregistration/)
    - [EN : https://support.questetra.com/addons/stripe-cardregistration/](https://support.questetra.com/addons/stripe-cardregistration/)

## Dropbox アップロード <small>en:Upload to Dropbox</small>

last-modified:2016-10-05, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Dropbox-upload.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Dropbox-upload.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/dropbox-upload/](https://support.questetra.com/ja/addons/services/dropbox-upload/)
    - [EN : https://support.questetra.com/addons/services/dropbox-upload/](https://support.questetra.com/addons/services/dropbox-upload/)

## kintone 2列データの一括取得 <small>en:Batch to Get Two Column Values from kintone</small>

last-modified:2016-09-21, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Kintone-getIdsLabels.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Kintone-getIdsLabels.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/kintone-getidslabels/](https://support.questetra.com/ja/addons/services/kintone-getidslabels/)
    - [EN : https://support.questetra.com/addons/services/kintone-getidslabels/](https://support.questetra.com/addons/services/kintone-getidslabels/)

## Google Sheets 行追加 (Table) <small>en:New Record to Google Sheets (Table)</small>

last-modified:2016-09-15, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-appendTable.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-appendTable.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/addons/googlesheets-appendtable/](https://support.questetra.com/addons/googlesheets-appendtable/)
    - [EN : https://support.questetra.com/ja/addons/googlesheets-appendtable/](https://support.questetra.com/ja/addons/googlesheets-appendtable/)

## Google Sheets のセル合計（カンマ除去版） <small>en:Sum of cells in a Google Spreadsheet</small>

last-modified:2016-09-13, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-sumNumbersCom.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-sumNumbersCom.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/services/googlesheets-sumnumberscom/](https://support.questetra.com/ja/addons/services/googlesheets-sumnumberscom/)
    - [EN : https://support.questetra.com/addons/services/googlesheets-sumnumberscom/](https://support.questetra.com/addons/services/googlesheets-sumnumberscom/)

## Google Sheets のセル合計 <small>en:Sum of cells in a Google Spreadsheet</small>

last-modified:2016-09-13, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/GoogleSheets-sumNumbers.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/GoogleSheets-sumNumbers.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/googlesheets-sumnumbers/](https://support.questetra.com/ja/addons/googlesheets-sumnumbers/)
    - [EN : https://support.questetra.com/addons/googlesheets-sumnumbers/](https://support.questetra.com/addons/googlesheets-sumnumbers/)

## パスワード・ジェネレータ <small>en:Random Password Generator</small>

last-modified:2016-09-09, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Generate-Password.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Generate-Password.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Slack 投稿 (定型文) <small>en:Post to Slack (Fixed phrase)</small>

last-modified:2016-08-31, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Slack-postFixedPhrase.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Slack-postFixedPhrase.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/slack-postfixedphrase/](https://support.questetra.com/ja/addons/slack-postfixedphrase/)
    - [EN : https://support.questetra.com/addons/slack-postfixedphrase/](https://support.questetra.com/addons/slack-postfixedphrase/)

## ファイル名ジェネレータ <small>en:File Name Generator</small>

last-modified:2016-08-31, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Generate-FileName.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Generate-FileName.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## OpenChat 投稿 (Questetra 内の社内SNS機能) <small>en:Post to OpenChat (Questetra's Enterprise Social)</small>

last-modified:2016-08-31, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/OpenChat-PostTextData.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/OpenChat-PostTextData.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/openchat-posttextdata/](https://support.questetra.com/ja/addons/openchat-posttextdata/)
    - [EN : https://support.questetra.com/addons/openchat-posttextdata/](https://support.questetra.com/addons/openchat-posttextdata/)

## OpenChat 投稿 (Questetra 内の社内SNS機能) <small>en:Post to OpenChat (Questetra's Enterprise Social)</small>

last-modified:2016-08-30, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/OpenChat-Post.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/OpenChat-Post.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/openchat-post/](https://support.questetra.com/ja/addons/openchat-post/)
    - [EN : https://support.questetra.com/addons/openchat-post/](https://support.questetra.com/addons/openchat-post/)

## Slack 投稿 <small>en:Post to Slack</small>

last-modified:2016-08-29, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Slack-post.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Slack-post.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/slack-post/](https://support.questetra.com/ja/addons/slack-post/)
    - [EN : https://support.questetra.com/addons/slack-post/](https://support.questetra.com/addons/slack-post/)

## 文字数カウンター <small>en:Character (Letter) Counter</small>

last-modified:2016-08-29, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Character-Counter.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Character-Counter.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## OpenChat 投稿 (Questetra 内の社内SNS機能) <small>en:Post to OpenChat (Questetra's Enterprise Social)</small>

last-modified:2016-08-29, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/OpenChat-PostJoinTextData.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/OpenChat-PostJoinTextData.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/openchat-postjointextdata/](https://support.questetra.com/ja/addons/openchat-postjointextdata/)
    - [EN : https://support.questetra.com/addons/openchat-postjointextdata/](https://support.questetra.com/addons/openchat-postjointextdata/)

## Hash Calculator (MD5) <small>en:Hash Calculator (MD5)</small>

last-modified:2016-08-22, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Hash-CalculateMd5.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Hash-CalculateMd5.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/hash-calculatemd5/](https://support.questetra.com/ja/addons/hash-calculatemd5/)
    - [EN : https://support.questetra.com/addons/hash-calculatemd5/](https://support.questetra.com/addons/hash-calculatemd5/)

## Hash Calculator (SHA256)

last-modified:2016-08-22, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Hash-CalculateSha256.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Hash-CalculateSha256.xml)
- ヘルプページURL
    - [JA : https://support.questetra.com/ja/addons/hash-calculatesha256/](https://support.questetra.com/ja/addons/hash-calculatesha256/)
    - [EN : https://support.questetra.com/addons/hash-calculatesha256/](https://support.questetra.com/addons/hash-calculatesha256/)

## 日数計算 <small>en:Days Calculator</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Days-Calculator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Days-Calculator.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## 時間計算(分) <small>en:Minites Calculator</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Minites-Calculator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Minites-Calculator.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## データ複製 (テーブル) <small>en:Data Duplicator (Table)</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> 最新版をご利用ください（https://support.questetra.com/addons/duplicator-table/）
>> EN : <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Table-DataDuplicator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Table-DataDuplicator.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## 振替伝票の生成 <small>en:Generate Transfer Slips</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Generate-TransferSlips.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Generate-TransferSlips.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## データ複製 (Files) <small>en:Data Duplicator (Files)</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/File-Duplicator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/File-Duplicator.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Excel-CSV のメール送付 (Table) <small>en:Email a Excel-CSV (Table)</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Email-SendExcelCsvSjis.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Email-SendExcelCsvSjis.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Excel-CSV のメール送付 (Table) <small>en:Email a Excel-CSV (Table)</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Email-SendExcelCsv.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Email-SendExcelCsv.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## Accumulated Hours Calculator

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> <font color="Red">なし</font>

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/AccumulatedHours-Calculator.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/AccumulatedHours-Calculator.xml)
- ヘルプページURL
    - JA : <font color="Red">なし</font>
    - EN : <font color="Red">なし</font>

## 行数カウンター <small>en:Line Counter</small>

last-modified : <font color="Red">undefined</font>, engine-type : <font color="Red">undefined</font>

### Summary

> テキストの行数を計測します
>> Measure the number of lines in text

### URLs

- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/Line-Counter.xml)
- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/Line-Counter.xml)
- ヘルプページURL
    - [JA : https://www.questetra.com/ja/tour/m4/m415/addon-line-counter](https://www.questetra.com/ja/tour/m4/m415/addon-line-counter)
    - [EN : https://www.questetra.com/tour/m4/m415/addon-line-counter](https://www.questetra.com/tour/m4/m415/addon-line-counter)

