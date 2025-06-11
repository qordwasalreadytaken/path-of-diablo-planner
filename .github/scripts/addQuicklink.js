import fs from 'fs';
import path from 'path';
import https from 'https';

const issueBody = process.env.ISSUE_BODY || '';
const issueNumber = process.env.ISSUE_NUMBER;
const repo = process.env.REPO;
const token = process.env.GITHUB_TOKEN;

const filePath = path.resolve('data/quicklinks.js');
const fileContent = fs.readFileSync(filePath, 'utf8');

const urlMatch = issueBody.match(/Long URL:\s*(https?:\/\/\S+)/);
if (!urlMatch) {
  console.error('❌ No valid URL found in issue body');
  process.exit(1);
}
const longUrl = urlMatch[1];

// Find the highest existing qqlN
const qqlMatches = [...fileContent.matchAll(/params\.has\(['"]qql(\d+)['"]\)/g)];
const maxQql = qqlMatches.length ? Math.max(...qqlMatches.map(m => parseInt(m[1], 10))) : 0;
const newQql = `qql${maxQql + 1}`;

// Build new line
const newLine = `if (params.has('${newQql}')) { window.location.href = "${longUrl}"; }`;

// Insert above your comment marker or at the end
const newContent = fileContent.replace(
  /(\/\/ Shortlink example:[\s\S]*?)$/,
  `${newLine}\n$1`
);

fs.writeFileSync(filePath, newContent);
console.log(`✅ Added ${newQql} → ${longUrl}`);

// Leave a comment on the issue
const commentBody = {
//  body: `✅ Shortlink created: [https://build.pathofdiablo.com/?${newQql}](https://build.pathofdiablo.com/?${newQql}) → ${longUrl}\n\nIssue will now be closed.`
  body: `✅ Shortlink created: [https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?${newQql}](https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?${newQql}) → ${longUrl}\n\nIssue will now be closed.`
};

const postData = JSON.stringify(commentBody);
const options = {
  hostname: 'api.github.com',
  path: `/repos/${repo}/issues/${issueNumber}/comments`,
  method: 'POST',
  headers: {
    'User-Agent': 'quicklink-action',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
};

const req = https.request(options, res => {
  if (res.statusCode !== 201) {
    console.error(`❌ Failed to comment on issue: ${res.statusCode}`);
  } else {
    console.log(`💬 Commented on issue #${issueNumber}`);
  }
});
req.on('error', console.error);
req.write(postData);
req.end();

// Close the issue
const closeOptions = {
  hostname: 'api.github.com',
  path: `/repos/${repo}/issues/${issueNumber}`,
  method: 'PATCH',
  headers: {
    'User-Agent': 'quicklink-action',
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  }
};

const closeReq = https.request(closeOptions, res => {
  if (res.statusCode !== 200) {
    console.error(`❌ Failed to close issue: ${res.statusCode}`);
  } else {
    console.log(`✅ Issue #${issueNumber} closed`);
  }
});
closeReq.on('error', console.error);
closeReq.write(JSON.stringify({ state: 'closed' }));
closeReq.end();
