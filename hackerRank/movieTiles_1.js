var https = require('https');

async function getMovieTitles(substr) {
    //The url we want is: 'jsonmock.hackerrank.com/api/movies/search/?Title=spiderman'
    await getJsonResult(substr, 1);
    return titleList;
}

let data = [];
let titleList = [];

async function getJsonResult(substr, pageNum) {
    let pageQueries = pageNum == null ? "" : "&page=" + pageNum;
    var options = {
        host: 'jsonmock.hackerrank.com',
        path: '/api/movies/search/?Title=' + substr + pageQueries
    };

    callback = function (response) {
        var str = '';

        //another chunk of data has been received, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            // console.log("json_result:", str);
            let obj = JSON.parse(str);
            data = data.concat(obj.data);
            if (obj.page < obj.total_pages){
                getJsonResult(substr, obj.page + 1)
            } else {
                for (let i = 0; i < data.length; i++) {
                    const e = data[i];
                    titleList.push(e.Title);
                }
                titleList.sort();
                for (let i = 0; i < titleList.length; i++) {
                    const e = titleList[i];
                    console.log(e);
                }
            }

        });
    }

    https.request(options, callback).end();
}
getMovieTitles("spiderman");