// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode      from 'vscode';
import { showInputBox } from './basicInput';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('ocdetailer.detailer',
	async() => {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;
		if(!editor){
			vscode.window.showInformationMessage('Editor does not exist');
			return;
		}

		let list = await showInputBox();
		if (!list){
			vscode.window.showInformationMessage(`Please add a delimiter to align by`);
			return
		}
		if(list != ""){
			console.log(list)
			let numDelimiter = (list?.match(/@/g) || []).length;
			let alignItems: any=[];

			let inDelimiterSpacer = false;
			let delim="";
			if(numDelimiter%2==0){
				for(let i = 0; i < list.length; i++){
					if(list[i]=="@" && !inDelimiterSpacer){
						inDelimiterSpacer=true
					}
					else if(list[i]=="@" && inDelimiterSpacer){
						inDelimiterSpacer=false
						alignItems.push(delim);
						delim=""
					}
					else if(inDelimiterSpacer){
						delim+=list[i];
					}
					else{
						alignItems.push(list[i]);
						delim=""
					}
				}

				const text = editor.document.getText(editor.selection);
				let array = text.match(/[^\r\n]+/g);
				
				// When you select the extension, it reads the next keys
				// Stores key presses until you press enter again
				
				if(array){
					let alignerCount = 0;

					// Set up new array
					let newArray = [];
					for(let line of array){
						newArray.push("");
					}

					//Cycle through all the align items
					for(let aligner of alignItems){
						let alignerNum = 0;
						let alignerPos = 0
						let maxPos = 0;
						for(let line of array){
							let pos = line.indexOf(aligner);
							if( pos > maxPos){
								maxPos = pos
							}
						}
						let count = 0;

						let tempArray = []
						for(let line of array){
							let minAligner = line.indexOf(aligner,0)
							newArray[count] += line.slice(0,minAligner) + " ".repeat(maxPos-minAligner)+aligner
							if(alignerCount == alignItems.length-1){
								newArray[count] +=line.slice(minAligner+aligner.length,line.length);
							}
							tempArray.push(line.slice(minAligner+aligner.length,line.length));
							count++;
						}
						array = tempArray;
						alignerCount++;
					}
					array = newArray;

					// Sort by number
					// get the string
					let order = [];
					let orderCount = 0;
					for(let line of array){
						// use / /g to remove all spaces from the string
						let remText = line.replace(/ /g, "");
						// get the length of the string after removal
						let length = remText.length;
						order.push([orderCount,length]);
						orderCount++;
					}

					let sortedArray:any = []
					let used:any = []
					for(let j = 0; j< order.length; j++){
						let min = Infinity;
						let minIndex = 0;
						for(let i = 0; i< order.length; i++){
							if(order[i][1]< min && !used.includes(i)){
								min = order[i][1]
								minIndex = order[i][0]
							}
						}
						used.push(minIndex);
						sortedArray.push(array[minIndex])
					}
					editor.edit((edit) => {
						if(array){
							edit.replace(editor.selection,sortedArray.join("\r\n"));
						}
					})
				}
			}
			else{
				vscode.window.showInformationMessage(`Please add a closing tag (@) and try again`);
			}
		}
		else{
			vscode.window.showInformationMessage(`Please add a delimiter to align by`);
		}
		// }
		// vscode.window.showInformationMessage(`Selected text: ${text}`);
		// const response = await fetch(`https://api.datamuse.com/words?ml=${text.replace(" ","+")}`);
		// const data = await response.json();
		// const quickPick = vscode.window.createQuickPick();
		// quickPick.items = data.map((x:any) => ({label: x.word}));
		// quickPick.onDidChangeSelection(([item]) => {
		// 	if (item){
		// 		vscode.window.showInformationMessage(item.label);
		// 		editor.edit((edit) => {
		// 			edit.replace(editor.selection,item.label);
		// 		})
		// 		quickPick.dispose();
		// 	}
		// });
		// quickPick.onDidHide(()=>quickPick.dispose());
		// quickPick.show();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
