import {useContext} from 'react'

import { CoreContext } from '../components/Core/CoreContextProvider'

export const useMarkdownStore = () => {
    const {markdownStore} = useContext(CoreContext) 
    if(!markdownStore) {
        throw new Error('Markdown store is not initialized!')
    }

    return markdownStore
}
