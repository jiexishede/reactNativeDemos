'use strict'

export function setScreenName(navigatorName, screenName) {
    return {
        type: 'setScreenName',
        navigatorName,
        screenName,
    }
}

export function setNetInfo(netState) {
	return {
		type: 'setNetInfo',
		netState,
	}
}