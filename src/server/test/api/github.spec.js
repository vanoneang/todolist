const fs = require('fs');
const axios = require("axios")
const { getAccessToken, getGuestInfo } = require("../../service/token") 

jest.mock('fs')
jest.mock("axios")

test("should get guest userinfo", async () => {
  jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { name: "user name" } })
  const data = await getGuestInfo("token");
  expect(data).toEqual({ name: "user name" })
})

describe("getAccessToken", () => {
  test("token is valid", async () => {
    const expired = new Date().getTime() + 7 * 1000
    fs.readFileSync.mockReturnValue(`{"token":"mock token","expired":${expired}}`) 
    const data = await getAccessToken("mockCode")
    expect(data).toEqual("mock token")
  })

  test("token is invalid", async () => {
    const expired = new Date().getTime() - 7000
    fs.readFileSync.mockReturnValue(`{"token":"mock token","expired":${expired}}`)
    fs.writeFile.mockReturnValue(`{"token":"mock token","expired":${expired}}`)
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { access_token: "8be222c0200daaeb9e3356a01111111" } })

    const data = await getAccessToken("mockCode")
    expect(data).toEqual("8be222c0200daaeb9e3356a01111111")
  })
})
