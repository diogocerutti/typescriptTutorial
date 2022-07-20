//accountInfo
//charInfo
//playerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string; // "?" = que é opcional
};

const account: AccountInfo = {
  id: 123,
  name: "Willian",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "willjusten",
  level: 100,
};

type PlayerInfo = AccountInfo & CharInfo; // intersection

const player: PlayerInfo = {
  name: "Willian",
  nickname: "willjusten",
  id: "123",
  level: 100,
};
