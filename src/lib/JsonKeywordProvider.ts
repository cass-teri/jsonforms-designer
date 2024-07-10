import * as monaco from 'monaco-editor';
interface MonarchLanguageConfiguration extends monaco.languages.IMonarchLanguage {
    keywords: string[];
}

monaco.languages.setMonarchTokensProvider('json', {
    keywords: ['class', 'extends' ]
} as MonarchLanguageConfiguration)
