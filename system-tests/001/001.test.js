/* @flow */
"use strict"

const systemTestUtils = require("../systemTestUtils")
const stylelint = require("../../lib")

it("001", () => {
  return stylelint.lint({
    files: [systemTestUtils.caseStylesheetGlob("001")],
    configFile: systemTestUtils.caseConfig("001"),
  }).then((output) => {
    expect(systemTestUtils.prepResults(output.results)).toMatchSnapshot()
  })
})
