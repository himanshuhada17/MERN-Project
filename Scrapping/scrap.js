// const cheerio = require('cheerio');
// const axios = require('axios');

// const url = 'https://www.bus.irctc.co.in/search?originCity=Jaipur&originCityCode=22667&destinationCity=Udaipur&destinationCityCode=23162&departDate=21-09-2023';

// let buses = [];
// axios.get(url).
//   then((response) => {

//     let $ = cheerio.load(response.data);
//     $('.top-search-result-card').each(function (index, el) {
//       let title = $(".SearchCard01 > label", el).text();
//       let desc = $(".SearchCard01 > p", el).text();




//       buses.push({ 
//         title: title,
//         desc: desc,
//       });
//     });
//     console.log(buses);
//   }).catch((error) => {
//     console.log(error);
//   })

const cheerio = require('cheerio');
const fs = require('fs');
const { default: puppeteer } = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.bus.irctc.co.in/search?originCity=Jaipur&originCityCode=22667&destinationCity=Udaipur&destinationCityCode=23162&departDate=21-09-2023");

    await page.waitForTimeout(5000);

    const travel = [];
    const $ = cheerio.load(await page.content());
    $(".top-search-result-card").each((index, el) => {
      let title = $(".SearchCard01 > label", el).text();
      let desc = $(".SearchCard01 > p", el).text();
      let price = $(".SearchCard05 > label",el).text();
      let duration =$(".searchCard03Top > label",el).text();
      let seatsleft = $(".SearchCard05 > p",el).text();
      travel.push({ 
                title: title,
                desc: desc,
                price:price,
                duration:duration,
                seatsleft:seatsleft
              });
    });

    // Use a callback function for writeFile
    fs.writeFile("travel.json", JSON.stringify(travel,null,4), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File saved successfully!");
        }
    });

    await browser.close();
    console.log(travel);
})();