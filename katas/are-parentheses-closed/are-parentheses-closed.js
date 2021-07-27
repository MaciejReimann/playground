export function areParenthesesClosed(input) {

	const parentheses = []

	const isClosed = char => char === ")"
	const isOpen = char => char === "("

	for (const char of input) {
		if (isClosed(char) & parentheses.length === 0) return false

		if (isOpen(char)) {
			parentheses.push(char)
		}
		if (isClosed(char)) {
			parentheses.pop(char)
		}

	}

	return !parentheses.length
}

