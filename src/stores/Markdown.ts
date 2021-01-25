import {makeObservable, observable, action} from 'mobx'
import { MardownBlock, MarkdownAction, getMarkdownBlock } from '../settings/markdownSyntax'

export class MarkdownStore {
    currentMarkdownBlock: MardownBlock | null  = null
    markdownText = ""

    constructor() {
        makeObservable(this, {
            currentMarkdownBlock: observable,
            markdownText: observable,
            setCurrentMarkdownBlock: action('set current markdown block'),
            setMarkdownText: action('set markdown text')
        })
    }

    public setCurrentMarkdownBlock(value: MarkdownAction) {
        const markdownBlock = getMarkdownBlock(value)
        this.currentMarkdownBlock = markdownBlock 
    }

    public setMarkdownText(value: string) {
        this.markdownText = value 
    }
}