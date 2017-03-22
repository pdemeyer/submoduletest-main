

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BDAA6DA2-F5A3-4BBA-9CB7-71A8FA5A0E16"}
 */
var txt = "";


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7A9B57A6-AB94-4828-9E8C-6C8A24C9E852"}
 */
function onLoad(event) {
	txt = scopes.globals.testLibFunction();
}
