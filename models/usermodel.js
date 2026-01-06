const fs = require("fs").promises;
const path = require("path");
const rootDir = require("../utils/pathUtil");

const testDataPath = path.join(rootDir, "data", "subject-data.json");

const dataPath = path.join(rootDir, "data", "data.json");

exports.getTests = async () => {
  try {
    const data = await fs.readFile(testDataPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading test data:", err);
    return []; // fallback if file not found or invalid
  }
};

exports.getData = async () => {
  try {
    const data = await fs.readFile(dataPath, "utf-8");
    return JSON.parse(data);  // contains {focusTopics:[], wrongQuestions:[]}
  } catch (err) {
    console.error("Error reading data.json:", err);
    return { focusTopics: [], wrongQuestions: [] };
  }
};