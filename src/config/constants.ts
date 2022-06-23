// input field validation
export const NAME_REGEX: RegExp = new RegExp('^[a-zA-Z]+$')
export const EMAIL_REGEX: RegExp = new RegExp('^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
export const PWD_UPPER_REGEX: RegExp = new RegExp('(?=.*?[A-Z])')
export const PWD_LOWER_REGEX: RegExp = new RegExp('(?=.*?[a-z])')
export const PWD_DIGIT_REGEX: RegExp = new RegExp('(?=.*?[0-9])')
