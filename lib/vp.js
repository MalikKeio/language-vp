'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register commands
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-vp:valkyrie': () => this.character("ヴァルキリー"),
      'language-vp:unknown': () => this.character("？？？"),
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  character(name) {
		var editor = atom.workspace.getActiveTextEditor();
		if (editor) {
			var bufferRow = editor.getCursorBufferPosition().row;
			var currentLine = editor.lineTextForBufferRow(bufferRow);
			var insertedText = "";
			if (currentLine !== "") {
				insertedText += "\n";
			}
			insertedText += name + "\n\t";
			editor.insertText(insertedText);
		}
  }

};
