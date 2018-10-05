var stxParser = require("service_task_xml_parser")

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

module.exports = function(grunt) {
    grunt.registerTask('default', 'My "default" task description.', function() {
        grunt.log.writeln('現在、"default"タスクを実行中…');

        var md = "";
        var warnCount = 0
        var oks =[]
        grunt.file.recurse('./service-task', function(abspath, rootdir, subdir, filename) {

            var xml = grunt.file.read(abspath)

            var mdRow = "";

            var found_A = xml.match(/data\.get/g)
            if(found_A){
                mdRow +="- data.get : " + found_A.length + "箇所\n"
            }

            var found_B = xml.match(/retVal\.put/g)
            if(found_B){
                mdRow +="- retVal.put : " + found_B.length + "箇所\n"
            }

            var found_C = xml.match(/instanceof/g)
            if(found_C){
                mdRow +="- instanceof : " + found_C.length + "箇所\n"
            }

            var found_D = xml.match(/<last-modified>[0-9]{4}-[0-9]{2}-[0-9]{2}<\/last-modified>/g)
            if(!found_D){
                mdRow +="- last-modified : なし\n"
            }

            var found_E = xml.match(/<engine-type>[0-9]{1,}<\/engine-type>/g)
            if(!found_E){
                mdRow +="- engine-type : なし\n"
            }

            if(mdRow.length > 0){
                var servicetask = stxParser(String(xml));
                if(servicetask.warning.hasWarning){
                    mdRow +="- Warning (ついでに修正しよう)\n"
                    var warn = servicetask.warning.warning
                    for (var i = 0; i < warn.length; i++) {
                        mdRow +="    - " + escapeHtml(warn[i]) + "\n"
                    }
                }

                warnCount++
                md += "## [" + filename + "](https://github.com/Questetra/addon/blob/master/service-task/" + filename + ")\n" + mdRow
            }else{
                oks.push('[' + filename + '](https://github.com/Questetra/addon/blob/master/service-task/' + filename + ')')
            }
        })

        md = "data.get, retVal.put, instanceof, last-modified, engine-type の検索\n\n" + md
        md = "# 修正候補 (" + warnCount + "ファイル) " + grunt.template.today('yyyy-mm-dd HH:MM:ss') + "\n\n" + md
        md += "\n\n## ヒットしなかった定義ファイル (" + oks.length + "ファイル)\n\n" + oks.join(', ')

        grunt.log.writeln(md);
        grunt.file.write('./warn.md', md);

    });
};