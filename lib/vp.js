'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register commands
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-vp:tententen': () => this.tententen(),
      'language-vp:unknown': () => this.character("？？？"),
      'language-vp:odin': () => this.character("オーディン"),
      'language-vp:lenneth': () => this.character("レナス"),
      'language-vp:zephyros': () => this.character("ゼフィロス"),
      'language-vp:vanir': () => this.character("ヴァン神族"),
      'language-vp:huginn': () => this.character("フギン"),
      'language-vp:muninn': () => this.character("ムニン"),
      'language-vp:jeanne': () => this.character("ジャンヌ")
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
  },

	tententen() {
		var editor = atom.workspace.getActiveTextEditor();
		if (editor) {
			editor.insertText("･･････");
		}
	}

};
