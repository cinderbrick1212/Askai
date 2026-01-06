//fake database fetch
const {getTests} = require("../models/usermodel");
const {getData} = require("../models/usermodel");


exports.homePage = (req, res, next) => {
    res.render('store/home-page', {pageTitle: 'Homepage | Ask.ai'})
};

exports.about = (req, res, next) => {
    res.render('store/about', {pageTitle: 'About | Ask.ai'});
};

exports.getForm = (req, res, next) => {
    res.render('store/preference', {pageTitle: 'Questions | Ask.ai'});
};

exports.subjects = (req, res, next) => {
    const topicName = req.params.topicName; 
    res.render('store/subject', {
        pageTitle: `${topicName} | Ask.ai`,
        topicName: topicName
    });
};

exports.privacy = (req, res, next) => {
    res.render('store/privacypolicy', {pageTitle: 'PrivacyPolicy | Ask.ai'});
};

exports.dashboard = async (req, res, next) => {
  try {
    const [tests, data] = await Promise.all([
      getTests(),
      getData()
    ]);

    res.render("store/student-profile", {
      pageTitle: "Dashboard | Ask.ai",
      tests: tests,
      topics: data // contains both wrongQuestions & focusTopics
    });
  } catch (err) {
    console.error("Error in dashboard:", err);
    res.status(500).send("Server error loading dashboard");
  }
};