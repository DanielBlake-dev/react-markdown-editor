import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export type Headline = {value: HeadlineType, label: string}
export type TextAction = {value: TextActionsType, label: OverridableComponent<SvgIconTypeMap<{}, "svg">>}

export type HeadlineType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextActionsType = "bold" | "italic" | "strikethrough" | "blockquotes" | "code" | "ordered_list" | "unordered_list" ;

export type BlockTypes = {
    headlines: Headline []
    textActions: TextAction[]
} 

export const headlines: Headline[] = [
    {value: 'h1', label: "Заголовок 1"},
    {value: 'h2', label: "Заголовок 2"},
    {value: 'h3', label: "Заголовок 3"},
    {value: 'h4', label: "Заголовок 4"},
    {value: 'h5', label: "Заголовок 5"},
    {value: 'h6', label: "Заголовок 6"},
]

export const textActions: TextAction[] = [
    {value: "bold", label: FormatBoldIcon},
    {value: "italic", label: FormatItalicIcon},
    {value: "strikethrough", label: FormatStrikethroughIcon},
    {value: "blockquotes", label: FormatQuoteIcon},
    {value: "ordered_list", label: FormatListNumberedIcon},
    {value: "unordered_list", label: FormatListBulletedIcon},
]


export const blockTypes: BlockTypes = {
    headlines,
    textActions
}

export const getHeadlines = () => {
    return blockTypes.headlines
}

export const getTextActions = () => {
    return blockTypes.textActions
}

export const getTextAction = (textAction: TextActionsType): TextAction => {
    if(!textAction) {
        throw new Error("TextAction type is required!") 
    }

    const txAc = blockTypes.textActions.find(txAc => txAc.value === textAction)

    if(!txAc) {
        throw new Error('No text action found. You could have passed the wrong type [expected headline type: "bold" | "italic" | "strikethrough" | "blockquotes" | "code" | "ordered_list" | "unordered_list" ]') 
    }

    return txAc
    
}

export const getHeadline = (headline: HeadlineType): Headline => {
    if(!headline) {
        throw new Error("Headline type is required!") 
    }

    const hl = blockTypes.headlines.find(hl => hl.value === headline)

    if(!hl) {
        throw new Error('No headline found. You could have passed the wrong type [expected headline type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ]') 
    }

    return hl
    
}