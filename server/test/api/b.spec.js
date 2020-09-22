const server  = require("../../starter")
const request = require("supertest")

afterEach(() => {
  server.close() // 当所有测试都跑完了之后，关闭server
})

describe("test", () => {
  test("test", async () => {
    const response = await request(server).get('/')
    console.log(response, "2333333333");
  })
})