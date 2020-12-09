import ContainerController from "../../../cardinal/controllers/base-controllers/ContainerController.js";

const model = {
    htmlValue: `
        <psk-page title="psk-code">

            <psk-toc title="Table of contents">
            </psk-toc>

            <psk-description>
                <p>The main purpose of the component is to edit text files. A code-editor is embedded into this component, for the moment with the markup, css and javascript languages.</p>
                <p>The component has the markup(HTML, XML, Markup, SVG.) language as the default one in case no other is given.</p>
                <p>More informations about the editor used can be found at
                    <a href="https://live.prismjs.com/">PrismJs.Live</a>
                </p>
            </psk-description>

            <psk-property-descriptor title="Supported properties">
                <psk-code></psk-code>
            </psk-property-descriptor>

            <psk-chapter title="HTML Children">
                <p>This component has no HTML children.</p>
            </psk-chapter>

            <psk-container controller-name='LiveCodeEditorController'>
                <psk-live-code view-model='editor'></psk-live-code>
            </psk-container>
        </psk-page>`,
    javascriptValue: `
        export default class LiveCodeEditorController extends ContainerController {
            constructor(element) {
                super(element);
                this.model = this.setModel(JSON.parse(JSON.stringify(model)));
            }
        }
        `,
    cssValue: `
        @import url(/themes/dossier-explorer/components/psk-code/psk-code.css);
        div.prism-live {
            display: flex;
            position: relative;
            box-sizing: border-box;
            flex-flow: column;
            width: 80vw;
            height: 80vh;
        }

        textarea.prism-live {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 1000;
            color: transparent;
            cursor: text;
            white-space: pre;
            outline: none;
            background: none;
            border: none;
            box-shadow: none;
            resize: none;
            --selection-background: hsl(320, 80%, 25%);
            --selection-color: hsla(0, 0%, 100%, .8);
        }

        code[class*="language"] {
            display: block;
            overflow: initial;
            height: 100%;
            width: 100%;
        }

        @supports (not (caret-color: black)) and (-webkit-text-fill-color: black) {
            textarea.prism-live {
                color: inherit;
                -webkit-text-fill-color: transparent;
            }
        }


        /* Setting specific colors is needed
        * because otherwise Firefox shows blank text */

        textarea.prism-live::-moz-selection {
            background: var(--selection-background);
            color: var(--selection-color);
        }

        textarea.prism-live::selection {
            background: var(--selection-background);
            color: var(--selection-color);
        }

        pre.prism-live {
            flex: 1;
            position: relative;
            pointer-events: none;
            overflow: hidden;
            max-height: 100%;
        }

        pre.prism-live>code:empty::before {
            content: " "
        }
        `
};

export default class LiveCodeEditorController extends ContainerController {
    constructor(element) {
        super(element);
        this.model = this.setModel(JSON.parse(JSON.stringify(model)));
    }
}