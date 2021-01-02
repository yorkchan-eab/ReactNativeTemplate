import { Record } from 'immutable';
import { AnyAction } from 'redux';
export * from './auth.model'
export * from './template.model'
import { TAuthState } from './auth.model';
import { TTemplateState } from './template.model';
export interface ActionBase extends AnyAction {
  payload?: any
}

export type TAppState = {
  loading: boolean,
  auth: TAuthState,
  template: TTemplateState
}
