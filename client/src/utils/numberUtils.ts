export const normalizePhoneNumber = (phoneNumber: string): string => {
	const digits: string = phoneNumber.replace(/\D/g, '')
	if (digits.startsWith('8') || digits.startsWith('+')) {
		return '7' + digits.slice(1)
	}
	return digits
}
