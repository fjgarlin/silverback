
/* global Given, When, Then */

beforeEach(function () {
  cy.drupalSession({ user: "admin", toolbar: 'on' });
});

Given(/^there is a workspace "([^"]*)" that has the configured path "([^"]*)"$/, (workspace, path) => {
  workspace = 'Test';
  path = "/test";
  cy.drupalScript(`silverback:integration/common/helpers/create-workspace.php`, {
    workspace: workspace.toLowerCase(),
    label: workspace,
    path: path
  });
});

When(/^the user accesses the frontpage without a prefix$/, () => {
  cy.visit('/');
});

When(/^the user accesses the frontpage with the "([^"]*)" prefix$/, (prefix) => {
  cy.visit(prefix + '/node');
});

Then(/^the "([^"]*)" workspace is active$/, (workspace) => {
  cy.get('.workspaces-toolbar-tab').contains(workspace);
});
