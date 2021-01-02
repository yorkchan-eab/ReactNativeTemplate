import { all } from 'redux-saga/effects'
import auth from "./auth.saga";
import template from "./template.saga";

export default function* root() {
  yield all([
    ...auth,
    ...template,
  ])
}
