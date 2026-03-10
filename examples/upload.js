import { ShelbyClient } from "@shelby-protocol/sdk"

const client = new ShelbyClient()

async function uploadFile() {
  const result = await client.upload("example.txt")
  console.log(result)
}

uploadFile()
