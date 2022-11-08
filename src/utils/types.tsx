// link type (alias example)
export type Links = {
  id: string;
  title: string;
};
export type IUserModel = {
  email: string | null;
  uid: string | null;
  displayName: string | null;
  photoUrl?: string | null;
  lastLogin?: string | null;
};
export interface LinksInterface {
  id: string;
  title: string;
}
export interface Stats extends LinksInterface {
  value: string;
}

export type EventValuesContextType = {
  setMode(value: string): void;
  setScreenSize(value: number): void;
  screenSize: number;
  toggleTheme(value: string): void;
  mode: string;
};

export interface ToastOptions {
  position: string | undefined;
  autoClose: 2000;
  hideProgressBar: false;
  closeOnClick: true;
  pauseOnHover: true;
  draggable: true;
  progress: undefined;
}

//returned data type of any method
// interface IMovieModel {
//   title: string;
//   rating: string;
// }
{
  /* <Array<IMovieModel>> */
}
