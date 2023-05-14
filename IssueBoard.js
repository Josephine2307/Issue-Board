const issues = [];

function renderIssues() {
  const issuesContainer = document.getElementById('issues-container');

  issuesContainer.innerHTML = '';

  issues.forEach((issue, index) => {
    const issueElement = document.createElement('div');
    issueElement.classList.add('issue');
    issueElement.innerHTML = `
      <h2>${issue.title}</h2>
      <p>${issue.description}</p>
      <p>Status: ${issue.status}</p>
      <button onclick="editIssue(${index})">Edit</button>
      <button onclick="deleteIssue(${index})">Delete</button>
    `;
    issuesContainer.appendChild(issueElement);
  });
}

function editIssue(index) {
  const issue = issues[index];

  editing = true;

  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="edit-issue-title" value="${issue.title}">
    <textarea id="edit-issue-description">${issue.description}</textarea>
    <input type="text" id="edit-issue-status" value="${issue.status}">
    <button type="submit">Save</button>
  `;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    issue.title = document.getElementById('edit-issue-title').value;
    issue.description = document.getElementById('edit-issue-description').value;
    issue.status = document.getElementById('edit-issue-status').value;

    editing = false;

    renderIssues();
  });

  const issuesContainer = document.getElementById('issues-container');
  issuesContainer.innerHTML = '';
  issuesContainer.appendChild(form);
}

function deleteIssue(index) {
  issues.splice(index, 1);

  renderIssues();
}

const form = document.getElementById('new-issue-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('new-issue-title').value;
  const description = document.getElementById('new-issue-description').value;
  const status = document.getElementById('new-issue-status').value;

  const issue = {
    title,
    description,
    status
  };

  issues.push(issue);

  renderIssues();
});
