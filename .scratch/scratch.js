import ham from 'https://hamilsauce.github.io/hamhelper/hamhelper1.0.0.js';
const { template, utils, csvToJson } = ham;
console.log('ham', ham)
import c2j from './csv2json.js';


const jiraCSV = await (await fetch('./my-jira-tickets-all.csv')).text();

const jiraStories = c2j(jiraCSV);

console.log('jiraStories', jiraStories)