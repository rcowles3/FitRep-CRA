/* Datascaping & API
 * ===============================================
 * This file is what handles the logic for scraping the
 * workout data from two different websites, a begginer
 * and advanced workout.
 * as well as creation of our API routes
 * */

// Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");

// Requiring our Exercise model
let BackToBasics = require("../models/BackToBasics");
let MaxedOutMuscle = require("../models/MaxedOutMuscle");

// Our scraping tools
let request = require("request");
let cheerio = require("cheerio");

// Initialize Express
let app = express();
let dataScrape = express.Router();

dataScrape.route("/scrape/maxed-out-muscle").get(function (req, res) {

    let result = {};

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-back", function (error, response, html) {

        let $ = cheerio.load(html);

        let checkTitle = $(this).find("h3.b-workout-part--title").text().replace(/\s+/g, " ").trim();

        if (checkTitle) {
            result.workoutTitle
        }

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Back";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("BACK\n\n", result);
        })
    })

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-chest", function (error, response, html) {

        let $ = cheerio.load(html);

        // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Chest";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("CHEST\n\n", result);
        })
    })

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-shoulders", function (error, response, html) {

        let $ = cheerio.load(html);

        // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Shoulders";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("SHOULDERS\n\n", result);
        })
    })

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-biceps", function (error, response, html) {

        let $ = cheerio.load(html);

        // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Biceps";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("BICEPS\n\n", result);
        })
    })

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-triceps", function (error, response, html) {

        let $ = cheerio.load(html);

        // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Triceps";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("TRICEPS\n\n", result);
        })
    })

    request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-legs", function (error, response, html) {

        let $ = cheerio.load(html);

        // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

        $(".b-workout-part--item").each(function (i, element) {

            result.excersiseType = "Legs";
            result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
            result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
            result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
            result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
            result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

            let newMaxedOutMuscle = new MaxedOutMuscle(result);

            // Now, save that entry to the db
            newMaxedOutMuscle.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("LEGS\n\n", result);
        })
    })

    res.redirect("Muscle Redirect Complete");
});

dataScrape.get("/scrape/back-to-basics", function (req, res) {
    request("http://www.mensfitness.com/training/workout-routines/workout-plan-get-back-basics", function (error, response, html) {

        let $ = cheerio.load(html);

        $(".workout-days__steps.cf").each(function (i, element) {

            // Save an empty result object
            let result = {};

            // let to check not null
            let checkWeek = $(this).parent().prev().find(".workout-day__title").text();
            let checkDay = $(this).prev().find(".workout-day__number").text();

            // Add the text and href of every link, and save them as properties of the result object
            if (checkWeek) {
                result.workoutWeek = checkWeek;
            }

            if (checkDay) {
                result.workoutDay = checkDay;
            }

            result.exercises = $(this).find("p.workout-days__steps__title").text().replace(/\s+/g, " ").trim();
            result.sets = $(element).find(".workout-days__steps__specs").children().first().text().replace(/\s+/g, " ").trim();
            result.reps = $(element).find(".workout-days__steps__specs").children().next().text().replace(/\s+/g, " ").trim();
            result.proTip = $(element).find(".workout-days__steps__description").text();

            // Using our Back to Basics model, create a new entry
            // This effectively passes the result object to the entry (and the title and link)
            let newBasicWorkout = new BackToBasics(result);

            // Now, save that entry to the db
            newBasicWorkout.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });

            console.log("Data\n\n", result, "\n");
        });

    });
    res.redirect("Scrape Complete");
});

dataScrape.route('/workout-data/back-to-basics').get((req, res) => {
    BackToBasics.find((err, basicsData) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(basicsData);
        }
    });
});

dataScrape.route('/workout-data/maxed-out-muscle').get((req, res) => {
    MaxedOutMuscle.find((err, muscleData) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(muscleData);
        }
    });
});

module.exports = dataScrape;