import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10.0.0/dist/mermaid.esm.min.mjs';

export function main(){
    // marmaidのスクリプト
    // marmaidの初期化
    mermaid.initialize({ startOnLoad: true });

    // vscodeが読み込まれるたびに処理
    window.addEventListener('vscode.markdown.updateContent', () => {
        mermaid.init();
        updateDate();
    });

    function updateDate() {
        const dateEls = document.querySelectorAll('.date');
        for (let dateEl of dateEls) {
            dateEl.textContent = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" }).replaceAll('/', '-');
        }
    }

    mermaid.init();
    updateDate();
}