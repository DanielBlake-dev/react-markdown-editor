import { HeadlineType, TextActionsType } from './blockTypes';

export type MarkdownAction = HeadlineType | TextActionsType
export type MardownBlock = {
    label: MarkdownAction,
    value: string
}

const getHashTag = (count: number) => {
    if(count === 1) return "# "
    
    return `${'#'.repeat(2)} `
}

export const markdownSyntax: MardownBlock[] = [
    {label: "h1", value: getHashTag(1)},
    {label: "h2", value: getHashTag(2)},
    {label: "h3", value: getHashTag(3)},
    {label: "h4", value: getHashTag(4)},
    {label: "h5", value: getHashTag(5)},
    {label: "h6", value: getHashTag(6)},
    {label: "bold", value: '**Bold**'},
    {label: "italic", value: '*italic*'},
    {label: "blockquotes", value: '>'},
    {label: "code", value: '``code``'},
    {label: "ordered_list", value: '- list'},
    {label: "unordered_list", value: '1. List'},
    {label: "strikethrough", value: '~~strikethrough~~'},
]

export const getMarkdownBlock = (action: MarkdownAction): MardownBlock => {
    if(!action) {
        throw new Error (`Markdown Action is required! [expected: 
            "h1" | "h2" | "h3" | "h4" | "h5" | "h6"] |
            "bold" | "italic" | "strikethrough" | "blockquotes" | "code" | "ordered_list" | "unordered_list"
        `)
    }

    const markdownBlock = markdownSyntax.find(mdnSx => mdnSx.label === action)

    if(!markdownBlock) {
        throw new Error (`Not markdown block: ${action} found!`)
    }

    return markdownBlock
}