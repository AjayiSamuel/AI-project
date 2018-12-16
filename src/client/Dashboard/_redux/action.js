import { Action } from '../../_shared/services';
import { Constants } from '../../_shared/constants';
import { Constants as Type } from './types';

export const setSchemeState = (): Action => {
	if (localStorage.getItem(Constants.keys.store.GRADE_SCHEME)) {
		let data: Array<{}> = JSON.parse(localStorage.getItem(Constants.keys.store.GRADE_SCHEME));
		data = data.map(val => ({ ...val, min: parseInt(val.min), max: parseInt(val.max) }));
		return {
			type: Type.HAS_SCHEME,
			payload: data
		};
	}
	return {
		type: Type.NO_SCHEME,
		payload: null
	};
};