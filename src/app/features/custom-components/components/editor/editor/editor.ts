import { afterNextRender, Component, ElementRef, input, model, OnDestroy, output, signal, viewChild } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { EditorContent } from './models/editor-content.model';
import { Editor as TipTapEditor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
  imports: [],
  selector: 'app-editor',
  templateUrl: './editor.html',
})
export class Editor implements OnDestroy, FormValueControl<EditorContent> {
  value = model<EditorContent>('');
  disabled = input(false);
  readonly = input(false);
  required = input(false);
  invalid = input(false);
  touched = input(false);
  errors = input<readonly ValidationError.WithOptionalFieldTree[]>([]);
  touch = output<void>();

  protected tipTapEditor = signal<TipTapEditor | null>(null);

  private readonly host = viewChild.required<ElementRef<HTMLDivElement>>('host');

  constructor() {
    afterNextRender(() => this.createEditor());
  }

  ngOnDestroy(): void {
    this.tipTapEditor()?.destroy();
    this.tipTapEditor.set(null);
  }

  private createEditor(): void {
    const tipTapEditor = new TipTapEditor({
      element: this.host().nativeElement,
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class:
            'prose prose-sm max-w-none prose-slate focus:outline-none border p-2 border-gray-300 rounded-lg prose-p:my-0 prose-ul:my-0 prose-ol:my-0',
        },
      },
    });

    this.tipTapEditor.set(tipTapEditor);
  }
}
