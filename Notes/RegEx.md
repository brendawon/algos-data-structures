# Regular Expressions - allows searching through a string and makes finding and replacing values easy

# Structure

- Use forward slashes /suchasthis/ to denote a regular expression
- Add flags after the second forward slash
- A plus + means search the preceeding character one or more times (/e+/ would match for 'e', 'ee', etc.)
- A question mark ? means the preceeding character is optional (/ea?/ would match 'e', 'ea')
- An asterisk _ means match zero or more of the preceeding character (/re_/ would match 'r', 're', 'ree')
- A period . matches anything (/.at/ would match 'cat', 'bat', 'eat')
- A bracket will allow searching for any of the characters within the brackets (/[fc]at/ will match 'fat' and 'cat')
  - Brackets can be done in ranges [a-zA-Z] will search for all letters
- Parenthesis and | will allow or searches such as /(t|T)he/ searching for both 'the' and 'The'
- A backslash \ cancels out a special character (+, \*, ?, . so you can actually search for these characters in a regular expression - /\./ would match '.')
- Backslash w '/\w/' matches any word character
- Capital W '/\W/' matches anything that is not a word (a white space)
- Using curly braces with lowercase w allows searching for words with x number of letters (/\w{4, 5}/ will match only words that are 4-5 letters long)
- Backslash s '/\s/' matches any white space
- Capital S '/\S/' matches anything that is not a white space (a word)
- A caret ^ searches from the beginning of the line (/^T/ would check to make sure the first character in the line is 'T')
- A dollar sign $ searches from the end of the line (/\.$/ would check to see if the last character in the line is a period)

## Flags

g = global match; does a match all instead of just the first match in the string
i = case insensitive; use this when looking for instances of a letter (both capital AND lowercase)
m = multiline (important when using the ^ which searches at the beginning of a line or $ which searches at the end of a line)
