'use strict';

const timeUnits = {
	second: 1000,
	minute: 60 * 1000,
	hour: 60 * 60 * 1000,
	day: 24 * 60 * 60 * 1000,
	week: 7 * 24 * 60 * 60 * 1000,
	month: 30 * 24 * 60 * 60 * 1000,
	year: 365 * 24 * 60 * 60 * 1000
};

let agoSufix = 'ago';

module.exports = (date, short) => {
	if (short !== undefined && typeof short !== 'boolean') {
		throw new TypeError(
			`Expected a Boolean in the second argument, got ${typeof short}`,
		);
	}

	const plural = (n, unit) => {
		return short === undefined || short === false ?
			`${n > 1 ? n : 'a'} ${unit}${n > 1 ? 's' : ''} ${agoSufix}` :
			n + unit.substring(0, 1);
	};

	let timePassed = Date.now() - new Date(date).getTime();
	let tmpUnit;

	if (timePassed < 0) {
		timePassed *= -1;
		agoSufix = 'from now';
	}

	// eslint-disable-next-line guard-for-in
	for (const unit in timeUnits) {
		if (Math.round(timePassed) < timeUnits[unit]) {
			return plural(
				Math.round(timePassed / (timeUnits[tmpUnit] || 1)),
				tmpUnit || 'm',
			);
		}

		tmpUnit = unit;
	}

	return plural(Math.round(timePassed / timeUnits[tmpUnit]), tmpUnit);
};
