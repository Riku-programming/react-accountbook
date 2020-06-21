import * as firebase from 'firebase/app';

export type User = firebase.User;

export type Provider =
  | firebase.auth.FacebookAuthProvider
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.TwitterAuthProvider;

export interface Store {
  counter: {
    count: number;
  };
  expense: {
    expense: { id: string; date: Date; formatedDate: string; amount: number }[];
  };
}

export interface Expense {
  id: string;
  date: Date;
  formatedDate: string;
  amount: number;
}
