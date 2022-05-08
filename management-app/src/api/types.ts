export type TAPIErrorsMap = {
  [key: number]: string;
};

export type TUserBase = {
  login: string;
  password: string;
};

export type TBoard = TBoardBase & {
  boardId: string;
};

export type TBoardBase = {
  title: string;
};

export type TUser = TUserBase & {
  name: string;
};
