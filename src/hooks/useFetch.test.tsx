import * as _something from "./testFetch";

describe("my data fetching hook", () => {
  test.todo("write a test");

  it("should return data", async () => {
    const data = await _something.useFetch();
    expect(data).toBe(null);
  });

  it("should return error", async () => {
    const data = await _something.useFetch();
    expect(data).toEqual(expect.any(Error));
  });

  it("should return loading", async () => {
    const data = await _something.useFetch();
    expect(data).toBe(expect.any(Boolean));
  });
});
