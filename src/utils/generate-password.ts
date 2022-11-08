import { DICTIONARY } from '~/utils/constants'
import type { DictionaryKeys } from '~/types'

export const generatePassword = (passwordLength: number, dictionary: DictionaryKeys): string => {
	const dictionaryString = dictionary.map(d => DICTIONARY[d]).join('')

	const randomArray = crypto.getRandomValues(new Uint32Array(passwordLength))

	const password = Array.from(randomArray)
		.map(x => dictionaryString[x % dictionaryString.length])
		.join('')

	return password
}
