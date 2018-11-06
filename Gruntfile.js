var stxParser = require("service_task_xml_parser");
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

module.exports = function(grunt) {
    grunt.registerTask("default", 'My "default" task description.', function() {
        grunt.log.writeln('現在、"default"タスクを実行中…');

        var md = "";
        var warnCount = 0;
        var oks = [];
        var lists = []

        grunt.file.recurse("./service-task", function(
            abspath,
            rootdir,
            subdir,
            filename
        ) {

            if (filename.slice( -4 ) == '.xml') {
                var xml = grunt.file.read(abspath);
                var servicetask = stxParser(String(xml));

                lists.push({
                    filename:filename,
                    meta:servicetask
                })

                var mdRow = "";

                var found_A = xml.match(/data\.get/g);
                if (found_A) {
                    mdRow += "- data.get : " + found_A.length + "箇所\n";
                }

                var found_B = xml.match(/retVal\.put/g);
                if (found_B) {
                    mdRow += "- retVal.put : " + found_B.length + "箇所\n";
                }

                var found_C = xml.match(/instanceof/g);
                if (found_C) {
                    mdRow += "- instanceof : " + found_C.length + "箇所\n";
                }

                var found_D = xml.match(
                    /<last-modified>[0-9]{4}-[0-9]{2}-[0-9]{2}<\/last-modified>/g
                );
                if (!found_D) {
                    mdRow += "- last-modified : なし\n";
                }

                var found_E = xml.match(
                    /<engine-type>[0-9]{1,}<\/engine-type>/g
                );
                if (!found_E) {
                    mdRow += "- engine-type : なし\n";
                }

                if (mdRow.length > 0) {
                    if (servicetask.warning.hasWarning) {
                        mdRow += "- Warning (ついでに修正しよう)\n";
                        var warn = servicetask.warning.warning;
                        for (var i = 0; i < warn.length; i++) {
                            mdRow += "    - " + escapeHtml(warn[i]) + "\n";
                        }
                    }
                    mdRow += "\n";

                    warnCount++;
                    md +=
                        "## [" +
                        filename +
                        "](https://github.com/Questetra/addon/blob/master/service-task/" +
                        filename +
                        ")\n" +
                        mdRow;
                } else {
                    oks.push(
                        "[" +
                            filename +
                            "](https://github.com/Questetra/addon/blob/master/service-task/" +
                            filename +
                            ")"
                    );
                }
            }
        });

        md =
            "data.get, retVal.put, instanceof, last-modified, engine-type の検索\n\n" +
            md;
        md =
            "# 修正候補 (" +
            warnCount +
            "ファイル) " +
            grunt.template.today("yyyy-mm-dd HH:MM:ss") +
            "\n\n" +
            md;
        md +=
            "\n\n## ヒットしなかった定義ファイル (" +
            oks.length +
            "ファイル)\n\n" +
            oks.join(", ");

        grunt.log.writeln(md);
        grunt.file.write("./warn.md", md);


        // ================================
        let listMdMin = "# サービスタスク定義ファイルリスト A " +grunt.template.today("yyyy-mm-dd HH:MM:ss") + "\n\n"
        let listMd = "# サービスタスク定義ファイルリスト B " +grunt.template.today("yyyy-mm-dd HH:MM:ss") + "\n\n"

        lists.sort(function(a, b){
            let aLM = 0;
            let bLM = 0;
            if(a.meta && a.meta.lastModifiedDate){
                aLM = a.meta.lastModifiedDate
            }
            if(b.meta && b.meta.lastModifiedDate){
                //grunt.log.writeln(b.meta.lastModifiedDate);
                bLM = b.meta.lastModifiedDate
            }
            if(aLM > bLM){
                return 1
            }
            if(aLM < bLM){
                return -1
            }
            return 0
        })

        listMdMin += '|label|last modified|src|dl|help|help|\n'
        listMdMin += '|:---|:---|:---|:---|:---|:---|\n'
        for (var i = lists.length - 1; i >= 0; i--) {
            listMdMin += '|' + lists[i].meta.labels.ja || '?'
            listMdMin += '|' + lists[i].meta.lastModified || '?'
            listMdMin += '|' + '[GitHub](https://github.com/Questetra/addon/blob/master/service-task/' + lists[i].filename + ')' || '?'
            listMdMin += '|' + '[XML](https://questetra.github.io/addon/service-task/' + lists[i].filename + ')' || '?'
            listMdMin += '|' + '[Ja](' + lists[i].meta.helpPageUrls.ja + ')' || '?'
            listMdMin += '|' + '[En](' + lists[i].meta.helpPageUrls.en + ')' || '?'
            listMdMin += "|\n"
        }
        grunt.log.writeln(listMdMin);
        grunt.file.write("./list.md", listMdMin);




        for (var i = lists.length - 1; i >= 0; i--) {

            if(lists[i].meta.labels && lists[i].meta.labels.ja){
                listMd += "## " + lists[i].meta.labels.ja
                if(lists[i].meta.labels && lists[i].meta.labels.en){
                    listMd += " <small>en:" + lists[i].meta.labels.en + "</small>"
                }
                listMd += "\n\n"
            }else if(lists[i].meta.labels && lists[i].meta.labels.en){
                listMd += "## " + lists[i].meta.labels.en + "\n\n"
            }else{
                listMd += "## ???\n\n"
            }

            if(lists[i].meta.lastModified){
                listMd += "last-modified:" + lists[i].meta.lastModified
            }else{
                listMd += 'last-modified : <font color="Red">undefined</font>'
            }

            if(lists[i].meta.engineType){
                listMd += ", engine-type : " + lists[i].meta.engineType
            }else{
                listMd += ', engine-type : <font color="Red">undefined</font>'
            }
            listMd += '\n\n'

            listMd += "### Summary\n\n"
            if(lists[i].meta.summaries && lists[i].meta.summaries.ja){
                listMd += '> ' + lists[i].meta.summaries.ja + "\n"
                if(lists[i].meta.summaries && lists[i].meta.summaries.en){
                    listMd += '>> ' + lists[i].meta.summaries.en + "\n"
                }else{
                    listMd += '>> EN : <font color="Red">なし</font>\n'
                }
            }else if(lists[i].meta.summaries && lists[i].meta.summaries.en){
                listMd += '> JA : <font color="Red">なし</font>\n'
                listMd += '>> ' + lists[i].meta.summaries.en + "\n"
            }else{
                listMd += '> <font color="Red">なし</font>\n'
            }
            listMd += '\n'

            listMd += "### URLs\n\n"
            listMd += '- [GitHub](https://github.com/Questetra/addon/blob/master/service-task/' + lists[i].filename + ')\n'
            listMd += '- [Download URL (GitHub Pages)](https://questetra.github.io/addon/service-task/' + lists[i].filename + ')\n'

            listMd += '- ヘルプページURL\n'
            if(lists[i].meta.helpPageUrls && lists[i].meta.helpPageUrls.ja){
                listMd += '    - [JA : ' + lists[i].meta.helpPageUrls.ja + '](' + lists[i].meta.helpPageUrls.ja + ')\n'
            }else{
                listMd += '    - JA : <font color="Red">なし</font>\n'
            }
            if(lists[i].meta.helpPageUrls && lists[i].meta.helpPageUrls.en){
                listMd += '    - [EN : ' + lists[i].meta.helpPageUrls.en + '](' + lists[i].meta.helpPageUrls.en + ')\n'
            }else{
                listMd += '    - EN : <font color="Red">なし</font>\n'
            }
            listMd += '\n'
        }
        //grunt.log.writeln(listMd);
        grunt.file.write("./list_detail.md", listMd);


        //grunt.log.writeln(JSON.stringify(lists, null, 2));
    });
};
