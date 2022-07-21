// type Alias -> é mais recomendado do que interfaces
// | = "pipe"
type Uid = number | string | undefined;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`A user with ${uid} has a name as ${user}.`);
}

type Platform = "Windows" | "Linux" | "Mac Os" | "Ios";

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Ios");

logDetails(123, "sapato");
logDetails("123", "sapato");

logInfo(123, "Willian");
logInfo("123", "Willian");
