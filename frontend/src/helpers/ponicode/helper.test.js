const helper = require("../helper");
// @ponicode
describe("helper.checkDate", () => {
  test("0", () => {
    let result = helper.checkDate("01-01-2020");
    expect(result).toMatchSnapshot();
  });

  test("1", () => {
    let result = helper.checkDate("32-01-2020");
    expect(result).toMatchSnapshot();
  });

  test("2", () => {
    let result = helper.checkDate("01-01-2030");
    expect(result).toMatchSnapshot();
  });

  test("3", () => {
    let result = helper.checkDate("01-13-2020");
    expect(result).toMatchSnapshot();
  });

  test("4", () => {
    let result = helper.checkDate("");
    expect(result).toMatchSnapshot();
  });
});
