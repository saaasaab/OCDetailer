import { window } from 'vscode';


/**
 * Shows an input box using window.showInputBox().
 */
export async function showInputBox() {
	const result = await window.showInputBox({
		// value: ',',
		placeHolder: 'List the order of the spacers for example:  ,(/  No spaces needed'  ,
	});
	return(result)
}